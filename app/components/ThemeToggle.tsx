'use client'
import { HalfMoon, SunLight } from 'iconoir-react'
import { cn } from '@/app/lib/utils'
import useThemeToggle from '../hooks/useThemeToggle'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useThemeToggle()

  return (
    <div className="p-[4px] rounded text-black dark:text-white overflow-hidden bg-[#f5f4fd] dark:bg-[#16161b] flex-shrink-0 transition-colors duration-500 ease-in-out">
      <label
        className={cn(
          'sidebar-themeLabel flex justify-between relative cursor-pointer before:bg-white dark:before:bg-[#383838] before:inline-block before:absolute before:z-0 before:content-[""] before:left-[2px] before:top-[50%] before:rounded',
          {
            switched: isDarkMode
          }
        )}
      >
        <input
          className="sidebar-themeInput"
          type="checkbox"
          id="theme-toggle"
          onChange={toggleTheme}
        />
        <div className="sidebar-themeType w-[50%] flex gap-2 items-center justify-center py-3 px-2 text-center flex-shrink-0 leading-5 z-10 light">
          <SunLight className="w-5 h-5" />
          <span className="sidebar-themeInputText font-[14px] whitespace-nowrap overflow-hidden text-ellipsis">
            Light
          </span>
        </div>
        <div className="sidebar-themeType w-[50%] flex gap-2 items-center justify-center py-3 px-2 text-center flex-shrink-0 leading-5 z-10 dark">
          <HalfMoon className="w-5 h-5" />
          <span className="sidebar-themeInputText font-[14px] whitespace-nowrap overflow-hidden text-ellipsis">
            Dark
          </span>
        </div>
      </label>
    </div>
  )
}

export default ThemeToggle
