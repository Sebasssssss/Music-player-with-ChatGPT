'use client'
import { useState } from 'react'
import Image from 'next/image'
import { listData } from '@/app/lib/itemsList'
import { IcoChevron } from '../Icons'
import { cn } from '@/app/lib/utils'
import template from '../../../public/album.png'
import './styles.css'

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
        <IcoChevron className="w-4 h-4" />
      </button>
      <div className="flex flex-col h-full md:overflow-y-auto md:overflow-x-hidden overflow-x-visible">
        <ul className="list-none p-0 mt-5">
          {listData.map((item, index) => (
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
          ))}
        </ul>
        <div className="sidebar-profileSection font-medium flex items-center gap-2 mt-auto border border-[#f9f8fb] py-2 px-[10px] rounded-[28px] overflow-hidden h-[60px] flex-shrink-0 cursor-pointer hover:bg-[#f9f8fb]">
          <Image
            src={template}
            width="40"
            height="40"
            alt="Monica Geller"
            className="w-10 h-10 rounded-[50%] object-cover flex-shrink-0"
          />
          <span className="whitespace-nowrap overflow-hidden text-ellipsis text-zinc-900">
            Sebass Rodriguez
          </span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
