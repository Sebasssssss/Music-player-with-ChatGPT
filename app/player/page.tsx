'use client'
import Image from 'next/image'
import template from '../../public/album.png'
import GrainyFilter from '../components/GrainyFilter'
import { cn } from '@/app/lib/utils'
import { Songs } from '../lib/itemsList'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Pause, Play, SkipNext, SkipPrev } from 'iconoir-react'

export default function Player() {
  const [pause, setPause] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleIsActive = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <>
      <div className="absolute left-4 top-4 h-screen">
        <Sidebar />
      </div>
      <div className="overflow-hidden w-full h-screen">
        <div className="flex h-screen items-center justify-center w-full gap-2">
          <Image
            alt="albumCover"
            src={template}
            width={100}
            height={100}
            className="rounded-xl blur-2xl -z-20 w-screen h-screen absolute ml-auto mr-auto right-0 left-0 text-center"
          />
          <div className="flex flex-col items-center px-12">
            <Image
              alt="albumCover"
              src={template}
              width={400}
              height={400}
              className="rounded-[32px] hover:-translate-y-2 hover:shadow-2xl active:translate-y-0 active:shadow-sm transition-all duration-300"
            />
            <div className="inline-flex items-center justify-between w-80 p-12">
              <SkipPrev />
              <button type="button" onClick={() => setPause(prev => !prev)}>
                {pause ? <Pause /> : <Play />}
              </button>
              <SkipNext />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold flex flex-col py-4">
              Know
              <span className="text-sm">Jason Mraz • 2018 • 10 songs</span>
            </h1>
            <ul className="font-semibold text-sm flex flex-col gap-2 overflow-hidden">
              {Songs.map((song, index) => (
                <li
                  key={song.id}
                  className={cn(
                    'inline-flex items-center justify-between w-full gap-8 rounded-xl px-6 h-[4em]',
                    {
                      'bg-black text-white': activeIndex === index
                    }
                  )}
                >
                  <div onClick={() => handleIsActive(index)}>
                    {activeIndex === index ? (
                      <div className="flex mt-[1em] ml-[0.3em] rotate-180 h-1">
                        <div className="audio-visualizer w-[2px] h-8 bg-white rounded-[5px] m-[0.1em]"></div>
                        <div className="audio-visualizer w-[2px] h-8 bg-white rounded-[5px] m-[0.1em]"></div>
                        <div className="audio-visualizer w-[2px] h-8 bg-white rounded-[5px] m-[0.1em]"></div>
                        <div className="audio-visualizer w-[2px] h-8 bg-white rounded-[5px] m-[0.1em]"></div>
                      </div>
                    ) : (
                      <span className="cursor-pointer">{song.id}</span>
                    )}
                  </div>
                  <p>{song.name}</p>
                  <span>{song.duration}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <GrainyFilter />
      </div>
    </>
  )
}
