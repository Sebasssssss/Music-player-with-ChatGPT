import React, { ReactNode } from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion'

interface BackdropProps {
  children: ReactNode
  onClick: () => void
}

function Backdrop({ children, onClick }: BackdropProps) {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 left-0 z-40 grid h-full w-full justify-center bg-black/10 backdrop-blur-md"
    >
      {children}
    </motion.div>
  )
}

const variants: Variants = {
  hidden: {
    y: '-200',
    scale: '0',
    opacity: '0'
  },
  visible: {
    y: '0',
    scale: '1',
    opacity: '1',
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 30,
      stiffness: 500
    }
  }
}

interface ModalProps {
  handleClose: () => void
  children: ReactNode
}

export default function Modal({ handleClose, children }: ModalProps) {
  return (
    <>
      <Backdrop onClick={handleClose}>
        <AnimatePresence>
          <motion.div
            onClick={e => e.stopPropagation()}
            variants={variants}
            initial="hidden"
            animate="visible"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </Backdrop>
    </>
  )
}
