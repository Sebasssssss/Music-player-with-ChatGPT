'use client'
import { useState } from 'react'
import { NavArrowLeft } from 'iconoir-react'
import { cn } from '@/app/lib/utils'
import ListOfPlaylist from './ListOfPlaylist'
import { DropDownMenu } from './DropDownMenu'
import { Home, Search } from 'iconoir-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Sidebar = () => {
  const [isShrinkView, setIsShrinkView] = useState(true)
  const router = usePathname()

  const handleSidebarView = () => {
    setIsShrinkView(!isShrinkView)
  }

  return (
    <div className="absolute left-0 top-0 h-screen z-40">
      <div
        className={cn(
          'sidebar-container rounded-br-[10px] rounded-tr-[10px] p-4 relative w-[240px] transition-all duration-300 ease-in-out bg-white',
          {
            shrink: isShrinkView
          }
        )}
      >
        <button
          className="sidebar-viewButton outline-none absolute w-8 h-8 rounded-[50%] border-none -right-4 top-1 flex items-center cursor-pointer p-0 transition duration-300 ease-in-out text-white justify-center bg-black customShadowMedium hover:opacity-80"
          type="button"
          aria-label={isShrinkView ? 'Expand Sidebar' : 'Shrink Sidebar'}
          title={isShrinkView ? 'Expand' : 'Shrink'}
          onClick={handleSidebarView}
        >
          <NavArrowLeft className="w-4 h-4" />
        </button>
        <div className="flex flex-col h-full md:overflow-y-auto md:overflow-x-hidden overflow-x-visible scrollbar-hide">
          <ul className="list-none p-0 mt-5">
            <Link
              href="/player"
              className="sidebar-listItem flex items-center opacity-0 py-2 relative -translate-x-4"
            >
              <button
                className={cn('w-full p-5 rounded inline-flex items-center', {
                  'bg-[#f5f4fd]': router === '/player'
                })}
              >
                <Home className="w-5 h-5 inline-block mr-2 flex-shrink-0" />
                <span className="sidebar-listItemText whitespace-nowrap overflow-hidden text-ellipsis leading-[20px]">
                  Home
                </span>
              </button>
            </Link>
            <li className="sidebar-listItem flex items-center opacity-0 py-2 relative -translate-x-4">
              <Link
                href="player/search"
                className={cn('w-full p-5 rounded inline-flex items-center', {
                  'bg-[#f5f4fd]': router === '/player/search'
                })}
              >
                <Search className="w-5 h-5 inline-block mr-2 flex-shrink-0 sidebar-listIcon" />
                <span className="sidebar-listItemText">Search</span>
              </Link>
            </li>
            <ListOfPlaylist />
          </ul>
          <DropDownMenu />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
