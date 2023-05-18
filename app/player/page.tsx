'use client'
import Image from 'next/image'
import template from '../../public/template.jpg'
import GrainyFilter from '../components/GrainyFilter'
import {
  IcoPause,
  IcoPlay,
  IcoSkipNext,
  IcoSkipPrev
} from '../components/Icons'
import { cn } from '@/app/lib/utils'
import { Songs } from '../lib/itemsList'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'

export default function Player() {
  const [pause, setPause] = useState(false)
  return (
    <div className="overflow-hidden w-full h-screen">
      <div className="flex h-screen items-center justify-center w-full gap-2">
        <Sidebar />
        <div className="glassmorphism w-full h-screen absolute ml-auto mr-auto right-0 left-0 text-center -z-10 bg-white/20"></div>
        <Image
          alt="albumCover"
          src={template}
          width={100}
          height={100}
          className="rounded-xl -z-20 w-screen h-screen absolute ml-auto mr-auto right-0 left-0 text-center"
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
            <IcoSkipPrev />
            <button type="button" onClick={() => setPause(prev => !prev)}>
              {pause ? <IcoPause /> : <IcoPlay />}
            </button>
            <IcoSkipNext />
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold flex flex-col py-4">
            Know
            <span className="text-sm">Jason Mraz • 2018 • 10 songs</span>
          </h1>
          <ul className="font-semibold text-sm flex flex-col gap-2 overflow-hidden">
            {Songs.map(song => (
              <li
                key={song.id}
                className={cn(
                  'inline-flex items-center justify-between w-full gap-8 rounded-xl px-6 py-3',
                  {
                    'bg-black text-white': song.isCurrentlyPlaying
                  }
                )}
              >
                <span className="inline-flex items-center">
                  {song.isCurrentlyPlaying ? <IcoPlay /> : song.id}
                </span>{' '}
                <p>{song.name}</p>
                <span>{song.duration}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <GrainyFilter />
    </div>
  )
}
