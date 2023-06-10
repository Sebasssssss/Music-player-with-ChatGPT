'use client'
import { useState } from 'react'
import Image from 'next/image'
import { spotifyTopArtists } from '../lib/api-response'
import template from '@/public/album.png'
import useAudio from '../hooks/useAudio'

export default function Player() {
  const [topArtists, setTopArtists] = useState(spotifyTopArtists)
  const { handleSeek, currentTime, audioRef } = useAudio()

  return (
    <div className="overflow-hidden w-full h-screen bg-gradient-to-b from-[#ffeddf] to-[#ecdff7]">
      <div className="container mx-auto flex flex-col gap-8">
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
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-xl">Now Playing</h1>
            <div className="rounded-[20px] grid place-items-center gap-4 bg-white py-8 shados">
              <Image
                src={template}
                width={250}
                height={250}
                alt=""
                className="aspect-square rounded-[20px] shados"
              />
              <div className="grid gap-2 text-center">
                <h1 className="text-lg font-semibold">Saint-Tropez</h1>
                <p className="text-gray-500 font-medium">Post Malone</p>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  step="0.1"
                  max={audioRef.current?.duration || 0}
                  value={currentTime}
                  onChange={handleSeek}
                  className="range-slider w-80 appearance-none bg-gray-200 h-1 rounded-lg focus:outline-none active:bg-gray-300"
                />
                <p className="absolute left-0 top-7 text-sm">2:10</p>
                <p className="absolute right-0 top-7 text-sm">-3:56</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-xl">Most played</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
