import { useEffect, useCallback } from 'react'
import { useThemeContext } from '../context/themeContext'

const useThemeToggle = () => {
  const themeContext = useThemeContext()

  if (!themeContext) {
    throw new Error('useThemeToggle must be used within a ThemeProvider')
  }

  const { isDarkMode, setIsDarkMode, toggleTheme } = themeContext

  useEffect(() => {
    const userTheme = localStorage.getItem('theme')
    const systemTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    if (setIsDarkMode) {
      setIsDarkMode(userTheme === 'dark' || (!userTheme && systemTheme))
    }
  }, [setIsDarkMode])

  const themeCheck = useCallback(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  useEffect(() => {
    if (setIsDarkMode) {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
      themeCheck()
    }
  }, [isDarkMode, setIsDarkMode, themeCheck])

  return { isDarkMode, toggleTheme }
}

export default useThemeToggle
