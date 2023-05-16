'use client'
import Image from 'next/image'
import template from '../../public/template.jpg'
import { IcoPlay } from '../components/Icons'
import { cn } from '@/app/lib/utils'

const Songs = [
  {
    id: 1,
    name: "Let's See What The Night Can Do",
    duration: '4:05',
    isCurrentlyPlaying: true
  },
  {
    id: 2,
    name: "Let's See What The Night Can Do",
    duration: '4:05',
    isCurrentlyPlaying: false
  },
  {
    id: 3,
    name: "Let's See What The Night Can Do",
    duration: '4:05',
    isCurrentlyPlaying: false
  },
  {
    id: 4,
    name: "Let's See What The Night Can Do",
    duration: '4:05',
    isCurrentlyPlaying: false
  },
  {
    id: 5,
    name: "Let's See What The Night Can Do",
    duration: '4:05',
    isCurrentlyPlaying: false
  },
  {
    id: 6,
    name: "Let's See What The Night Can Do",
    duration: '4:05',
    isCurrentlyPlaying: false
  },
  {
    id: 7,
    name: "Let's See What The Night Can Do",
    duration: '4:05',
    isCurrentlyPlaying: false
  }
]

export default function Player() {
  return (
    <>
      <div className="flex h-screen items-center justify-center w-full gap-12">
        <div>
          <Image
            alt="albumCover"
            src={template}
            width={400}
            height={400}
            className="rounded-xl"
          />
        </div>
        <div>
          <h1 className="text-xl font-bold flex flex-col">
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
      <svg>
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            stitchTiles="stitch"
          />
          <feColorMatrix
            in="colorNoise"
            type="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
          />
          <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
        </filter>
      </svg>
    </>
  )
}
