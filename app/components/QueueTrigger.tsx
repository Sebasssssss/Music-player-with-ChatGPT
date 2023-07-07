'use client'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/app/components/ui/popover'
import { Playlist } from 'iconoir-react'
import Carousel from './Carousel'

export default function QueueTrigger() {
  return (
    <div className="z-20 not-selectable">
      <Popover>
        <PopoverTrigger className="mt-1.5 hover:opacity-70 active:translate-y-0.5 transition-all duration-300">
          <Playlist />
        </PopoverTrigger>
        <PopoverContent className="h-80 w-80 bg-white rounded-[10px] grid place-items-center gap-4 shados overflow-hidden px-8">
          <Carousel />
        </PopoverContent>
      </Popover>
    </div>
  )
}
