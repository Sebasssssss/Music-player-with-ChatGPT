'use client'
import { MessagesContext } from '@/app/context/messages'
import { Message } from '@/app/lib/validators/message'
import { useMutation } from '@tanstack/react-query'
import { nanoid } from 'nanoid'
import {
  FC,
  HTMLAttributes,
  KeyboardEvent,
  ChangeEvent,
  useContext,
  useRef,
  useState
} from 'react'
import { Toaster, toast } from 'sonner'
import TextareaAutosize from 'react-textarea-autosize'
import { Send } from 'iconoir-react'
import Loader from './Loader'

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

const ChatInput: FC<ChatInputProps> = ({ className, ...props }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const [input, setInput] = useState<string>('')
  const {
    messages,
    addMessage,
    removeMessage,
    updateMessage,
    setIsMessageUpdating
  } = useContext(MessagesContext)

  const { mutate: sendMessage, isLoading } = useMutation({
    mutationKey: ['sendMessage'],
    mutationFn: async (_message: Message) => {
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages })
      })

      return response.body
    },
    onMutate(message) {
      addMessage(message)
    },
    onSuccess: async stream => {
      if (!stream) throw new Error('No stream')

      const id = nanoid()
      const responseMessage: Message = {
        id,
        isUserMessage: false,
        text: ''
      }

      addMessage(responseMessage)

      setIsMessageUpdating(true)

      const reader = stream.getReader()
      const decoder = new TextDecoder()
      let done = false

      while (!done) {
        const { value, done: doneReading } = await reader.read()
        done = doneReading
        const chunkValue = decoder.decode(value)
        updateMessage(id, prev => prev + chunkValue)
      }

      setIsMessageUpdating(false)
      setInput('')

      setTimeout(() => {
        textareaRef.current?.focus()
      }, 10)
    },
    onError: (_, message) => {
      toast.error('Something went wrong. Please try again.')
      removeMessage(message.id)
      textareaRef.current?.focus()
    }
  })

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()

      const message: Message = {
        id: nanoid(),
        isUserMessage: true,
        text: input
      }

      sendMessage(message)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }

  return (
    <div {...props} className={className}>
      <div className="relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none">
        <TextareaAutosize
          ref={textareaRef}
          onKeyDown={handleKeyDown}
          rows={2}
          maxRows={4}
          value={input}
          autoFocus
          disabled={isLoading}
          onChange={handleChange}
          placeholder="Write a message..."
          className="dark:bg-transparent placeholder:text-zinc-700 dark:placeholder:text-zinc-500 p placeholder:font-medium outline-none disabled:opacity-50 pr-14 resize-none block w-full border-0 py-1.5 focus:ring-0 text-sm sm:leading-6"
        />

        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd className="inline-flex items-center rounded px-1 font-sans text-xs text-gray-400">
            {isLoading ? <Loader /> : <Send />}
          </kbd>
        </div>

        <div className="absolute inset-x-0 bottom-0" aria-hidden="true" />
        <Toaster />
      </div>
    </div>
  )
}

export default ChatInput
