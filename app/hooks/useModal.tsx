import { useState, useEffect } from 'react'

export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const close = (): void => setIsModalOpen(false)
  const open = (): void => setIsModalOpen(true)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.ctrlKey && e.key === 'f') {
        e.preventDefault()
        open()
      }
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
