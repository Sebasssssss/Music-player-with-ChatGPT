'use client'
import { playlists } from '@/app/lib/itemsList'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Page() {
  const pathname = usePathname()
  const value = pathname.split('/').pop()
  const [state, setState] = useState('')
  useEffect(() => {
    playlists.map(item => (value === item.href ? setState(item.href) : null))
  }, [value])

  return <h1 className="w-full text-center text-4xl font-medium">{value}</h1>
}
