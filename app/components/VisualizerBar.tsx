import { useEffect, useRef } from 'react'

export default function VisualizerBar({ audioRef, onClick }) {
  const barsRef = useRef<NodeListOf<HTMLElement> | null>(null)
  const audioContainerRef = useRef<HTMLDivElement | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    barsRef.current = document.querySelectorAll('.bars')
    audioContainerRef.current = document.querySelector('.visualizer-container')
    audioRef.current = document.querySelector('audio')

    barsRef.current?.forEach(bar => {
      let size = Math.random()
      bar.style.transform = `scaleY(${size})`
    })

    const handleClick = () => {
      const bars = barsRef.current
      const audio = audioRef.current

      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        if (audio) audio.pause()
        intervalRef.current = null

        bars?.forEach(bar => {
          bar.style.background = '#9696a0'
        })
        return
      } else {
        if (audio) audio.play()
        intervalRef.current = setInterval(() => {
          bars?.forEach(bar => {
            let size = Math.random()
            bar.style.transform = `scaleY(${size})`
            bar.style.background = 'black'
          })
        }, 150)
      }
    }

    const handleAudioEnded = () => {
      clearInterval(intervalRef.current as NodeJS.Timeout)
    }

    audioContainerRef.current?.addEventListener('click', handleClick)
    audioRef.current?.addEventListener('ended', handleAudioEnded)

    return () => {
      audioContainerRef.current?.removeEventListener('click', handleClick)
      audioRef.current?.removeEventListener('ended', handleAudioEnded)
    }
  }, [audioRef])

  return (
    <div className="visualizer-container" onClick={onClick}>
      {Array.from({ length: 50 }).map((_, index) => (
        <div key={index} className="bars"></div>
      ))}
    </div>
  )
}
