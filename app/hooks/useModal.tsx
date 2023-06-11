import { useState } from 'react'

export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const close = () => setIsModalOpen(false)
  const open = () => setIsModalOpen(true)

  return { isModalOpen, close, open }
}
