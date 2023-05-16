'use client'
import { MessagesContext } from '@/app/context/messages'
import { cn } from '@/app/lib/utils'
import { FC, HTMLAttributes, useContext } from 'react'
import MarkdownLite from './MarkdownLite'
import { motion } from 'framer-motion'

interface ChatMessagesProps extends HTMLAttributes<HTMLDivElement> {}

const ChatMessages: FC<ChatMessagesProps> = ({ className, ...props }) => {
  const { messages } = useContext(MessagesContext)
  const inverseMessages = [...messages].reverse()

  return (
    <div
      {...props}
      className={cn(
        'flex flex-col-reverse gap-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch',
        className
      )}
    >
      <div className="flex-1 flex-grow" />
      {inverseMessages.map(message => {
        return (
          <div className="chat-message" key={`${message.id}-${message.id}`}>
            <motion.div
              initial={{ opacity: 0.7, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={cn('flex items-end', {
                'justify-end': message.isUserMessage
              })}
            >
              <div
                className={cn(
                  'flex flex-col space-y-2 text-sm max-w-xs mx-2 overflow-x-hidden',
                  {
                    'order-1 items-end': message.isUserMessage,
                    'order-2 items-start': !message.isUserMessage
                  }
                )}
              >
                <p
                  className={cn('px-4 py-2', {
                    'bg-zinc-900 text-white rounded-l-xl rounded-tr-xl rounded-br-sm':
                      message.isUserMessage,
                    'bg-gray-200 text-gray-900 rounded-r-xl rounded-tl-xl rounded-bl-sm':
                      !message.isUserMessage
                  })}
                >
                  <MarkdownLite text={message.text} />
                </p>
              </div>
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}

export default ChatMessages
