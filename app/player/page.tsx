'use client'
import Image from 'next/image'
import template from '../../public/album.png'
import GrainyFilter from '../components/GrainyFilter'
import { Songs } from '../lib/itemsList'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Pause, Play, SkipNext, SkipPrev } from 'iconoir-react'
import Audiobar from '../components/Audiobar'
import ListOfSongs from '../components/ListOfSongs'

export default function Player() {
  const [pause, setPause] = useState(false)

  return (
    <>
      <Sidebar />
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
              <span className="text-sm">
                Jason Mraz • 2018 • {Songs.length} songs
              </span>
            </h1>
            <ListOfSongs />
          </div>
        </div>
        <GrainyFilter />
      </div>
    </>
  )
}
