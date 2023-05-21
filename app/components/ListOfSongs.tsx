import React, { useEffect, useRef, useState } from 'react'
import { Songs } from '../lib/itemsList'
import { cn } from '@/app/lib/utils'
import { Pause, Play } from 'iconoir-react'

function ListOfSongs() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [pause, setPause] = useState(false)

  const handlePlaySong = (index: number) => {
    setPause(true)
    setIsPlaying(true)
    setActiveIndex(index)
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

  return (
    <div>
      <ul
        id="landing-header"
        className="font-semibold text-sm flex flex-col gap-2 overflow-hidden relative"
      >
        {Songs.map((song, index) => (
          <li
            key={song.id}
            className={cn(
              'flex flex-row h-[4em] items-center justify-between w-full gap-8 rounded-xl px-6 group',
              {
                'bg-white shadow': activeIndex === index
              }
            )}
          >
            {activeIndex === index ? (
              <>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hidden group-hover:block"
                >
                  {isPlaying ? (
                    <Pause
                      className="w-4 h-4"
                      onClick={() => setIsPlaying(false)}
                    />
                  ) : (
                    <Play
                      className="w-3 h-3"
                      onClick={() => handlePlaySong(index)}
                    />
                  )}
                </button>
                <div className="flex rotate-180 group-hover:hidden h-5 mt-1">
                  <div className="audio-visualizer w-[2px] h-5 bg-black rounded-[5px] m-[0.1em]"></div>
                  <div className="audio-visualizer w-[2px] h-5 bg-black rounded-[5px] m-[0.1em]"></div>
                  <div className="audio-visualizer w-[2px] h-5 bg-black rounded-[5px] m-[0.1em]"></div>
                  <div className="audio-visualizer w-[2px] h-5 bg-black rounded-[5px] m-[0.1em]"></div>
                </div>
              </>
            ) : (
              <>
                <button className="hidden group-hover:block">
                  {pause ? (
                    <Play
                      className="w-4 h-4"
                      onClick={() => handlePlaySong(index)}
                    />
                  ) : (
                    <Pause
                      className="w-4 h-4"
                      onClick={() => setPause(!pause)}
                    />
                  )}
                </button>
                <span className="cursor-pointer group-hover:hidden">
                  {song.id}
                </span>
              </>
            )}
            <p>{song.name}</p>
            <span>{song.duration}</span>
          </li>
        ))}
      </ul>
      <div
        id="menu-backdrop"
        className={`
      absolute bg-white backdrop-blur-lg rounded-[10px]
      translate-x-[var(--left)] translate-y-[var(--top)]
      left-0 top-0
      w-[var(--width)] h-[var(--height)]
      transition-all duration-500
      ease-in-out opacity-0 -z-10
    `}
      />
    </div>
  )
}

export default ListOfSongs