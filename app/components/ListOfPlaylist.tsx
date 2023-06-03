'use client'
import Image from 'next/image'
import { cn } from '@/app/lib/utils'
import { playlists } from '../lib/itemsList'
import { useState } from 'react'
import Link from 'next/link'

export default function ListOfPlaylist() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleIsActive = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <>
      {playlists.map((item, index) => (
        <Link
          href={`/player/playlist/${item.href}`}
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
              src={item.image}
              width={50}
              height={50}
              className="rounded-md w-10 h-10 inline-block mr-2 flex-shrink-0"
              alt={item.name}
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
