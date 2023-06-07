'use client'
import { useState } from 'react'
import Image from 'next/image'
import { spotifyTopArtists } from '../lib/api-response'

export default function Player() {
  const [state, setState] = useState(spotifyTopArtists)

  return (
    <div className="overflow-hidden w-full h-screen">
      <div className="container mx-auto">
        <h1 className="font-medium py-8 text-lg">Top artists</h1>
        <div className="flex items-center w-full gap-8">
          {state.items
            .map(({ name, images }) => (
              <div key={name} className="flex flex-col gap-2 w-full">
                <Image
                  src={images[0].url}
                  width={500}
                  height={500}
                  alt=""
                  className="w-56 h-56 rounded-[10px] aspect-square shados"
                />
                <h1 className="font-medium">{name}</h1>
              </div>
            ))
            .slice(0, 6)}
        </div>
      </div>
    </div>
  )
}
