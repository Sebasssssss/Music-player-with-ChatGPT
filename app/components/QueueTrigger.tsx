'use client'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/app/components/ui/popover'
import { InfoEmpty, Playlist } from 'iconoir-react'
import Carousel from './Carousel'

export default function QueueTrigger() {
  return (
    <div className="z-20 not-selectable grid place-items-center">
      <Popover>
        <PopoverTrigger className="hover:opacity-70 active:translate-y-0.5 transition-all duration-300">
          <Playlist />
        </PopoverTrigger>
        <PopoverContent className="h-80 w-80 bg-white rounded-[10px] grid place-items-center gap-4 shados overflow-hidden px-8">
          <div className="absolute top-2 left-2">
            <InfoEmpty className="opacity-70 hover:opacity-90 transition-opacity duration-300" />
          </div>
          <h1 className="absolute top-4 text-lg font-medium">
            Comming next...
          </h1>
          <Carousel />
        </PopoverContent>
      </Popover>
    </div>
  )
}
