import ListOfSongs from './ListOfSongs'
import Modal from './Modal'
import Image from 'next/image'
import { Search, Cancel } from 'iconoir-react'
import { AnimatePresence } from 'framer-motion'
import template from '@/public/album.png'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface ModalContentProps {
  isModalOpen: boolean
  close: () => void
}

const variants = {
  hidden: { opacity: 0, y: -20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 }
}

export default function ModalContent({
  isModalOpen,
  close
}: ModalContentProps) {
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const ref = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => setInput(e.target.value), 500)
  }

  const handleClearInput = () => {
    setInput('')
    if (ref.current) {
      ref.current.value = ''
    }
  }

  useEffect(() => {
    setIsTyping(false)

    if (input !== '') {
      setIsTyping(true)
    }
  }, [input])

  return (
    <AnimatePresence mode="wait" initial={false}>
      {isModalOpen && (
        <Modal handleClose={close}>
          <div className="flex flex-col gap-4 w-full items-center">
            <div className="relative mt-8">
              <input
                autoFocus={true}
                onChange={handleChange}
                placeholder="Search..."
                ref={ref}
                className="w-full md:w-96 h-12 px-3 shados rounded-[10px] border-2 hover:border-black/40  active:shadow-none focus:border-black/40 hover:bg-gray-100 transition duration-300 focus:outline-none input"
              />
              <div className="flex items-center absolute right-[10px] top-3">
                {input !== '' ? (
                  <button onClick={handleClearInput}>
                    <Cancel className="text-gray-500" />
                  </button>
                ) : null}

                <button>
                  <Search className="text-gray-500" />
                </button>
              </div>
            </div>
            <AnimatePresence mode="wait">
              {isTyping ? (
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="enter"
                  exit="exit"
                  className="bg-white w-full h-full rounded-[10px] shados relative"
                >
                  <div className="flex flex-col items-center justify-between shados gap-8 p-8 w-full rounded-[10px] relative">
                    <div className="flex flex-col gap-2">
                      <Image
                        className="rounded-[10px] shados"
                        src={template}
                        width={200}
                        height={200}
                        alt=""
                      />
                      <div className="flex flex-col gap-4 text-center">
                        <h1 className="font-bold text-4xl">Ghost</h1>
                        <h1 className="text-zinc-400">Jaden Smith</h1>
                      </div>
                    </div>
                    <ListOfSongs />
                  </div>
                  <Cancel
                    onClick={close}
                    className="absolute top-4 right-4 cursor-pointer"
                  />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </Modal>
      )}
    </AnimatePresence>
  )
}
