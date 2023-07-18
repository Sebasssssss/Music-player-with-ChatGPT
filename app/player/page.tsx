'use client'
import Image from 'next/image'
import AlbumVinyl from '../components/AlbumVinyl'
import { playlists } from '../lib/api-response'
import { Play } from 'iconoir-react'
import { getGreeting } from '../lib/getGreeting'
import template from '@/public/post.png'

export default function Player() {
  return (
    <div className="overflow-hidden w-full h-screen">
      <div className="container mx-auto flex flex-col gap-8">
        <h1 className="font-semibold pt-8 text-3xl">Good {getGreeting()}</h1>
        <article className="w-full h-80 bg-black text-white grid grid-cols-2 px-8 place-items-center rounded-[10px] shados relative">
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-2xl">
              Sunflower - Spider-Man: Into the Spider-Verse
            </h1>
            <p className="opacity-70 text-sm">Post Malone</p>
          </div>
          <Image
            width={420}
            height={420}
            src={template}
            alt="Banner"
            className="absolute right-4 bottom-0"
          />
        </article>
        <div className="flex items-center justify-between gap-8">
          <AlbumVinyl />
          <div className="grid grid-cols-2 grid-rows-2 place-items-center gap-8 h-max w-[800px]">
            {playlists
              .map(playlist => (
                <div
                  key={playlist.id}
                  className="flex justify-between h-[100px] w-full bg-white rounded-[10px] shados group relative"
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
              .slice(0, 4)}
          </div>
        </div>
      </div>
    </div>
  )
}
