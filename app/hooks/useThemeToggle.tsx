import { useEffect, useCallback } from 'react'
import { useThemeContext } from '../context/themeContext'

const useThemeToggle = () => {
  const { isDarkMode, setIsDarkMode, toggleTheme } = useThemeContext()

  // Load theme preference from local storage on initial render
  useEffect(() => {
    const userTheme = localStorage.getItem('theme')
    const systemTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    setIsDarkMode(userTheme === 'dark' || (!userTheme && systemTheme))
  }, [setIsDarkMode])

  // Function to apply the theme class to the document's html element
  const themeCheck = useCallback(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  // Save the user's theme preference to local storage and apply the theme class
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    themeCheck()
  }, [isDarkMode, themeCheck])

  return { isDarkMode, toggleTheme }
}

export default useThemeToggle
