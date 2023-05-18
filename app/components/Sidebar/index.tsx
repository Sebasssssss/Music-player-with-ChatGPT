'use client'
import { useState } from 'react'
import './styles.css'
import template from '../../../public/template.jpg'
import Image from 'next/image'
import { listData } from '@/app/lib/itemsList'

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
      <div className={`sidebar-container${isShrinkView ? ' shrink' : ''}`}>
        <button
          className="sidebar-viewButton"
          type="button"
          aria-label={isShrinkView ? 'Expand Sidebar' : 'Shrink Sidebar'}
          title={isShrinkView ? 'Expand' : 'Shrink'}
          onClick={handleSidebarView}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-chevron-left"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div className="sidebar-wrapper">
          <ul className="sidebar-list">
            {listData.map((item, index) => (
              <li
                key={index}
                onClick={() => handleIsActive(index)}
                className={`${
                  activeIndex === index ? 'active' : ''
                } sidebar-listItem`}
              >
                <button className="w-full p-5 rounded inline-flex items-center">
                  {item.svg}
                  {item.element}
                </button>
              </li>
            ))}
          </ul>
          <div className="sidebar-profileSection font-medium">
            <Image src={template} width="40" height="40" alt="Monica Geller" />
            <span>Sebass Rodriguez</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
