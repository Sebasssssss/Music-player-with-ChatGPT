'use client'
import { useState } from 'react'
import { listData } from '@/app/lib/itemsList'
import { NavArrowLeft } from 'iconoir-react'
import { cn } from '@/app/lib/utils'
import ListOfPlaylist from './ListOfPlaylist'
import { DropDownMenu } from './DropDownMenu'

const Sidebar = () => {
  const [isShrinkView, setIsShrinkView] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleSidebarView = () => {
    setIsShrinkView(!isShrinkView)
  }

  const handleIsActive = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className="absolute left-4 top-4 h-screen">
      <div
        className={cn(
          'sidebar-container rounded-[10px] p-4 relative w-[240px] transition-all duration-300 ease-in-out bg-white',
          {
            shrink: isShrinkView
          }
        )}
      >
        <button
          className="sidebar-viewButton absolute w-8 h-8 rounded-[50%] border-none -right-4 top-1 flex items-center cursor-pointer p-0 transition duration-300 ease-in-out text-white justify-center bg-black customShadowMedium hover:opacity-80"
          type="button"
          aria-label={isShrinkView ? 'Expand Sidebar' : 'Shrink Sidebar'}
          title={isShrinkView ? 'Expand' : 'Shrink'}
          onClick={handleSidebarView}
        >
          <NavArrowLeft className="w-4 h-4" />
        </button>
        <div className="flex flex-col h-full md:overflow-y-auto md:overflow-x-hidden overflow-x-visible">
          <ul className="list-none p-0 mt-5">
            {listData.map((item, index) => (
              <>
                <li
                  key={index}
                  onClick={() => handleIsActive(index)}
                  className={cn(
                    'sidebar-listItem flex items-center opacity-0 py-2 relative -translate-x-4',
                    {
                      active: activeIndex === index
                    }
                  )}
                >
                  <button className="w-full p-5 rounded inline-flex items-center">
                    {item.icon}
                    {item.element}
                  </button>
                </li>
              </>
            ))}
            <ListOfPlaylist />
          </ul>
          <DropDownMenu />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
