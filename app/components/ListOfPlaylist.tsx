'use client'
import Image from 'next/image'
import { cn } from '@/app/lib/utils'
import { playlists, Playlist } from '@/app/lib/api-response'
import { useState } from 'react'
import Link from 'next/link'

export default function ListOfPlaylist() {
  const [state, setState] = useState<Playlist[]>(playlists)
  const [isLoading, setIsLoading] = useState(true)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleIsActive = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <>
      {state.map((item, index) => (
        <Link
          href={`/player/playlist/${item.id}`}
          key={index}
          onClick={() => handleIsActive(index)}
          className={cn(
            'sidebar-listItem flex items-center opacity-0 py-2 relative -translate-x-4',
            {
              active: activeIndex === index
            }
          )}
        >
          <button className="w-full p-2 rounded inline-flex items-center">
            <Image
              src={item.images[0].url}
              width={50}
              height={50}
              alt={item.name}
              className={cn(
                'duration-700 ease-in-out rounded-md w-10 h-10 inline-block mr-2 flex-shrink-0',
                {
                  'grayscale blur-sm': isLoading,
                  'grayscale-0 blur-0': !isLoading
                }
              )}
              onLoadingComplete={() => setIsLoading(false)}
            />
            <span className="sidebar-listItemText whitespace-nowrap overflow-hidden text-ellipsis leading-[20px] text-sm font-medium">
              {item.name}
            </span>
          </button>
        </Link>
      ))}
    </>
  )
}
