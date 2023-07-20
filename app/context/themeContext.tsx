'use client'
import { createContext, useContext, useState, useCallback } from 'react'

interface ThemeContextValue {
  isDarkMode: boolean
  setIsDarkMode: (value: boolean) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export const ThemeProvider: React.FC = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = useCallback(() => {
    setIsDarkMode(prevMode => !prevMode)
  }, [])

  const contextValue: ThemeContextValue = {
    isDarkMode,
    setIsDarkMode,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = (): ThemeContextValue => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  return context
}
