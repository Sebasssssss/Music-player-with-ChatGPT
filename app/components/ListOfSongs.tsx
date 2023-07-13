'use client'
import { Pause, Play } from 'iconoir-react'
import { Songs } from '../lib/api-response'
import ContextMenu from './ContextMenu'
import useSongs from '../hooks/useSongs'

export default function ListOfSongs() {
  const {
    isPlaying,
    setIsPlaying,
    handlePlaySong,
    handleDoubleClick,
    activeIndex,
    pause,
    setPause
  } = useSongs()

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
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="hidden group-hover:block"
                  >
                    {isPlaying ? (
                      <Pause
                        className="w-5"
                        onClick={() => setIsPlaying(false)}
                      />
                    ) : (
                      <Play
                        className="w-5"
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
                <div className="w-8">
                  <button className="hidden group-hover:block">
                    {pause ? (
                      <Play
                        className="w-5"
                        onClick={() => handlePlaySong(index)}
                      />
                    ) : (
                      <Pause className="w-5" onClick={() => setPause(!pause)} />
                    )}
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
