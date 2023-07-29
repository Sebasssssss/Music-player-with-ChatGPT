'use client'
import { Pause, Play } from 'iconoir-react'
import { Songs } from '../lib/api-response'
import ContextMenu from './ContextMenu'
import { useAudioContext } from '../context/appState'
import { useEffect, useRef } from 'react'

export default function ListOfSongs() {
  const {
    pause,
    handlePlaySong,
    handleDoubleClick,
    activeIndex
  } = useAudioContext()

  const listItemRef = useRef<NodeListOf<HTMLLIElement> | null>(null)
  const menuBackDropRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    listItemRef.current = document.querySelectorAll('#landing-header li')
    menuBackDropRef.current = document.querySelector('#menu-backdrop')

    const handleMouseEnter = (e: Event) => {
      const item = e.currentTarget as HTMLLIElement
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
    <div className="h-96 overflow-y-scroll overflow-x-hidden scrollbar-hidden masked-overflow">
      <ul
        id="landing-header"
        className="font-semibold text-sm flex flex-col gap-2"
      >
        {Songs.map((song, index) => (
          <ContextMenu key={song.id} name={song.name}>
            <li
              onDoubleClick={() => handleDoubleClick(index)}
              className="flex h-[4em] items-center justify-between w-96 gap-8 rounded-xl px-6 group"
            >
              {activeIndex === index ? (
                <>
                  <button
                    onClick={() => handlePlaySong(index)}
                    className="hidden group-hover:block"
                  >
                    {pause ? (
                      <Play className="w-5" />
                    ) : (
                      <Pause className="w-5" />
                    )}
                  </button>
                  <div className="flex rotate-180 group-hover:hidden h-5 mt-1">
                    <div className="audio-visualizer w-[2px] h-5 bg-black dark:bg-white rounded-[5px] m-[0.1em]" />
                    <div className="audio-visualizer w-[2px] h-5 bg-black dark:bg-white rounded-[5px] m-[0.1em]" />
                    <div className="audio-visualizer w-[2px] h-5 bg-black dark:bg-white rounded-[5px] m-[0.1em]" />
                    <div className="audio-visualizer w-[2px] h-5 bg-black dark:bg-white rounded-[5px] m-[0.1em]" />
                  </div>
                </>
              ) : (
                <div className="w-8">
                  <button
                    onClick={() => handlePlaySong(index)}
                    className="hidden group-hover:block"
                  >
                    <Play className="w-5" />
                  </button>
                  <span className="cursor-pointer group-hover:hidden">
                    {index + 1}
                  </span>
                </div>
              )}
              <p className="whitespace-nowrap overflow-hidden w-max text-ellipsis">
                {song.name}
              </p>
              <span>{song.duration}</span>
            </li>
          </ContextMenu>
        ))}
        <div
          id="menu-backdrop"
          className="
          absolute bg-black/20 backdrop-blur-lg rounded-[10px]
          translate-x-[var(--left)] translate-y-[var(--top)]
          left-0 top-0
          w-[var(--width)] h-[var(--height)]
          transition-all duration-300
          ease-in-out opacity-0 -z-10
        "
        />
      </ul>
    </div>
  )
}
