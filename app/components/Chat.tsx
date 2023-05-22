'use client'
import { useState } from 'react'
import ChatInput from './ChatInput'
import ChatMessages from './ChatMessages'
import ChatHeader from './ChatHeader'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from './ui/accordion'
import { cn } from '@/app/lib/utils'

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Accordion type="single" collapsible className="relative bg-white z-40">
      <AccordionItem value="item-1">
        <div
          className={cn(
            'fixed right-8 bottom-6 bg-white rounded-[10px] overflow-hidden shadow-2xl transition-all duration-300 focus:w-80',
            {
              'w-80': isOpen,
              'w-24': isOpen == false
            }
          )}
        >
          <div className="w-full h-full flex flex-col">
            <AccordionTrigger
              onClick={handleIsOpen}
              className="px-6 border-b outline-none active:translate-y-0.5 active:bg-gray-200 border-zinc-300 bg-white text-black rounded-r-[10px]"
            >
              <ChatHeader />
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col h-80">
                <ChatMessages className="px-2 py-3 flex-1" />
                <ChatInput className="px-4" />
              </div>
            </AccordionContent>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  )
}

export default Chat
