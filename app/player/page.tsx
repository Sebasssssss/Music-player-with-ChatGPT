'use client'
import Image from 'next/image'
import AlbumVinyl from '../components/AlbumVinyl'
import { playlists } from '../lib/api-response'
import { Play } from 'iconoir-react'
import { getGreeting } from '../lib/getGreeting'

export default function Player() {
  return (
    <div className="overflow-hidden w-full h-screen bg-gradient-to-b from-[#ffeddf] to-[#ecdff7]">
      <div className="container mx-auto flex flex-col gap-8">
        <h1 className="font-semibold pt-8 text-3xl">Good {getGreeting()}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {playlists
            .map(playlist => (
              <div
                key={playlist.id}
                className="flex justify-between w-full bg-white rounded-[10px] shados group relative"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={playlist.images[0].url}
                    width={100}
                    height={100}
                    alt={playlist.name}
                    className="aspect-square rounded-l-[10px]"
                  />
                  <h1 className="font-medium">{playlist.name}</h1>
                </div>
                <button className="mr-8 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition duration-300">
                  <Play className="w-8 h-8" />
                </button>
              </div>
            ))
            .slice(0, 6)}
        </div>
        <AlbumVinyl />
      </div>
    </div>
  )
}
