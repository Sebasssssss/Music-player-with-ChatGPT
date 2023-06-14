'use client'
import { useState } from 'react'
import Image from 'next/image'
import { playlists, spotifyTopArtists } from '../lib/api-response'
import { Play } from 'iconoir-react'
import { getGreeting } from '../lib/getGreeting'

export default function Player() {
  const [topArtists, setTopArtists] = useState(spotifyTopArtists)

  return (
    <div className="overflow-hidden w-full h-screen bg-gradient-to-b from-[#ffeddf] to-[#ecdff7]">
      <div className="container mx-auto flex flex-col gap-8">
        <h1 className="font-semibold pt-8 text-3xl">Good {getGreeting()}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {playlists
            .map(playlist => (
              <div
                key={playlist.id}
                className="flex items-center gap-4 bg-white rounded-[10px] shados group relative"
              >
                <Image
                  src={playlist.images[0].url}
                  width={150}
                  height={150}
                  alt={playlist.name}
                  className="aspect-square rounded-l-[10px]"
                />
                <h1 className="font-medium">{playlist.name}</h1>
                <button className="opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 absolute bottom-4 right-4 transition duration-300">
                  <Play className="w-8 h-8" />
                </button>
              </div>
            ))
            .slice(0, 6)}
        </div>
        <div>
          <h1 className="font-semibold pt-8 pb-2 text-xl">Top artists</h1>
          <div className="flex items-center w-full gap-8">
            {topArtists.items
              .map(({ name, images }) => (
                <div key={name} className="flex flex-col gap-2 w-full relative">
                  <Image
                    src={images[0].url}
                    width={500}
                    height={500}
                    alt=""
                    className="w-48 h-48 rounded-[10px] aspect-square shados z-10"
                  />
                  <Image
                    src={images[0].url}
                    width={500}
                    height={500}
                    alt=""
                    className="w-44 h-44 rounded-[10px] aspect-square absolute bottom-8 blur-2xl opacity-60"
                  />
                  <h1 className="font-medium">{name}</h1>
                </div>
              ))
              .slice(0, 7)}
          </div>
        </div>
      </div>
    </div>
  )
}
