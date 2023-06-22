import { useEffect, useState, useRef } from 'react'
export default function useSongs() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [pause, setPause] = useState(true)

  const handlePlaySong = (index: number) => {
    setPause(true)
    setIsPlaying(true)
    setActiveIndex(index)
  }

  const handleDoubleClick = (index: number) => {
    handlePlaySong(index)
  }

  const listItemRef = useRef<NodeListOf<HTMLLIElement> | null>(null)
  const menuBackDropRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    listItemRef.current = document.querySelectorAll('#landing-header li')
    menuBackDropRef.current = document.querySelector('#menu-backdrop')

    const handleMouseEnter = (event: Event) => {
      const item = event.currentTarget as HTMLLIElement
      const { left, top, width, height } = item.getBoundingClientRect()

      if (menuBackDropRef.current) {
        menuBackDropRef.current.style.setProperty('--left', `${left}px`)
        menuBackDropRef.current.style.setProperty('--top', `${top}px`)
        menuBackDropRef.current.style.setProperty('--width', `${width}px`)
        menuBackDropRef.current.style.setProperty('--height', `${height}px`)

        menuBackDropRef.current.style.opacity = '1'
        menuBackDropRef.current.style.visibility = 'visible'
      }
    }

    const handleMouseLeave = () => {
      if (menuBackDropRef.current) {
        menuBackDropRef.current.style.opacity = '0'
        menuBackDropRef.current.style.visibility = 'hidden'
      }
    }

    if (listItemRef.current) {
      listItemRef.current.forEach(item => {
        item.addEventListener('mouseenter', handleMouseEnter)
        item.addEventListener('mouseleave', handleMouseLeave)
      })
    }

    return () => {
      if (listItemRef.current) {
        listItemRef.current.forEach(item => {
          item.removeEventListener('mouseenter', handleMouseEnter)
          item.removeEventListener('mouseleave', handleMouseLeave)
        })
      }
    }
  }, [])

  return {
    handleDoubleClick,
    handlePlaySong,
    isPlaying,
    setIsPlaying,
    activeIndex,
    pause,
    setPause
  }
}
