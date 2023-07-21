'use client'
import { useState } from 'react'
import './styles.css'
import { useThemeContext } from '@/app/context/themeContext'

export default function LikeButton() {
  const [isChecked, setIsChecked] = useState(false)
  const { isDarkMode } = useThemeContext()

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  const bubblesColor = isDarkMode ? '#c7d2fe' : '#450a0a'

  return (
    <button className="w-max h-max outline-none">
      <input
        onChange={handleCheckboxChange}
        checked={isChecked}
        type="checkbox"
        id="checkbox"
      />
      <label htmlFor="checkbox">
        <svg
          id="heart-svg"
          viewBox="467 392 58 57"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Group"
            fill="none"
            fillRule="evenodd"
            transform="translate(467 392)"
          >
            <path
              d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
              id="heart"
              stroke={isDarkMode ? '#d4d4d8' : '#27272a'}
              strokeWidth={3}
              fill="none"
            />
            <circle
              id="main-circ"
              fill={bubblesColor}
              opacity="0"
              cx="29.5"
              cy="29.5"
              r="1.5"
            />

            <g id="grp7" opacity="0" transform="translate(7 6)">
              <circle id="oval1" fill={bubblesColor} cx="2" cy="6" r="2" />
              <circle id="oval2" fill={bubblesColor} cx="5" cy="2" r="2" />
            </g>

            <g id="grp6" opacity="0" transform="translate(0 28)">
              <circle id="oval1" fill={bubblesColor} cx="2" cy="7" r="2" />
              <circle id="oval2" fill={bubblesColor} cx="3" cy="2" r="2" />
            </g>

            <g id="grp3" opacity="0" transform="translate(52 28)">
              <circle id="oval2" fill={bubblesColor} cx="2" cy="7" r="2" />
              <circle id="oval1" fill={bubblesColor} cx="4" cy="2" r="2" />
            </g>

            <g id="grp2" opacity="0" transform="translate(44 6)">
              <circle id="oval2" fill={bubblesColor} cx="5" cy="6" r="2" />
              <circle id="oval1" fill={bubblesColor} cx="2" cy="2" r="2" />
            </g>

            <g id="grp5" opacity="0" transform="translate(14 50)">
              <circle id="oval1" fill={bubblesColor} cx="6" cy="5" r="2" />
              <circle id="oval2" fill={bubblesColor} cx="2" cy="2" r="2" />
            </g>

            <g id="grp4" opacity="0" transform="translate(35 50)">
              <circle id="oval1" fill={bubblesColor} cx="6" cy="5" r="2" />
              <circle id="oval2" fill={bubblesColor} cx="2" cy="2" r="2" />
            </g>

            <g id="grp1" opacity="0" transform="translate(24)">
              <circle id="oval1" fill={bubblesColor} cx="2.5" cy="3" r="2" />
              <circle id="oval2" fill={bubblesColor} cx="7.5" cy="2" r="2" />
            </g>
          </g>
        </svg>
      </label>
    </button>
  )
}
