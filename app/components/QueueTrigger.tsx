'use client'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/app/components/ui/popover'
import { Playlist } from 'iconoir-react'
import Carousel from './Carousel'
import { Tooltip } from './Tooltip'

export default function QueueTrigger() {
  return (
    <div className="z-20 not-selectable grid place-items-center">
      <Popover>
        <PopoverTrigger className="hover:opacity-70 active:translate-y-0.5 transition-all duration-300">
          <Playlist />
        </PopoverTrigger>
        <PopoverContent className="h-80 w-80 border-none rounded-[10px] grid place-items-center gap-4 customShadowMedium overflow-hidden px-8">
          <Tooltip />
          <h1 className="absolute top-4 text-lg font-medium">
            Comming next...
          </h1>
          <Carousel />
        </PopoverContent>
      </Popover>
    </div>
  )
}
