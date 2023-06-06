'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Playlist, playlists } from '../lib/api-response'

export default function Player() {
  const [state, setState] = useState<Playlist[]>(playlists)

  return (
    <div className="overflow-hidden w-full h-screen">
      <div className="container mx-auto">
        <h1 className="font-medium py-8 text-lg">Recently Listened to</h1>
        <div className="grid grid-cols-3 gap-8">
          {state
            .map(({ name, images }) => (
              <div
                key={name}
                className="flex items-center gap-2 w-full rounded-[10px] shados"
              >
                <Image
                  src={images[0].url}
                  width={100}
                  height={100}
                  alt=""
                  className="w-24 h-24 rounded-l-[10px]"
                />
                <h1 className="font-medium p-2">{name}</h1>
              </div>
            ))
            .slice(0, 6)}
        </div>
      </div>
    </div>
  )
}
