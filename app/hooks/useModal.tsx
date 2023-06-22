import { useState, useEffect } from 'react'

export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const close = () => setIsModalOpen(false)
  const open = () => setIsModalOpen(true)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return { isModalOpen, close, open }
}
