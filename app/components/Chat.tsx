'use client'
import ChatInput from './ChatInput'
import ChatMessages from './ChatMessages'
import ChatHeader from './ChatHeader'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from './accordion'

const Chat = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="relative bg-white z-40 customShadowLow"
    >
      <AccordionItem value="item-1">
        <div className="fixed right-8 w-80 bottom-8 bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div className="w-full h-full flex flex-col">
            <AccordionTrigger className="px-6 border-b border-zinc-300 bg-[#4a2560] text-white rounded-r-2xl">
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
