'use client'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/app/components/ui/popover'
import ChatMessages from './ChatMessages'
import ChatInput from './ChatInput'
import Image from 'next/image'
import logo from '../../public/beatbrain.jpg'

export default function ChatTrigger() {
  return (
    <div className="absolute right-12 bottom-6 z-20 not-selectable">
      <Popover>
        <PopoverTrigger>
          <Image
            src={logo}
            alt="LogoChat"
            width={100}
            height={100}
            className="rounded-full w-20 h-20 hover:-translate-y-1 active:translate-y-0 transition-transform duration-200 shados"
          />
        </PopoverTrigger>
        <PopoverContent className="w-80 bg-white mr-8 rounded-[10px] flex flex-col gap-4">
          <header className="w-full flex gap-3 justify-start items-center">
            <div className="flex flex-col items-start text-sm">
              <p className="text-xs">Chat with</p>
              <div className="flex gap-1.5 items-center">
                <p className="w-2 h-2 rounded-full bg-green-500" />
                <p className="font-medium">BeatBrain</p>
              </div>
            </div>
          </header>
          <div className="flex flex-col h-80">
            <ChatMessages className="px-2 py-3 flex-1" />
            <ChatInput className="px-4" />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
