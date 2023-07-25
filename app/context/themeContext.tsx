'use client'
import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode
} from 'react'

interface ThemeContextProps {
  children?: ReactNode
  isDarkMode?: boolean
  setIsDarkMode?: (value: boolean) => void
  toggleTheme?: () => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export const ThemeProvider: React.FC<ThemeContextProps> = ({
  children
}: ThemeContextProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = useCallback(() => {
    setIsDarkMode(prevMode => !prevMode)
  }, [])

  const contextValue: ThemeContextProps = {
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

export const useThemeContext = (): ThemeContextProps => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  return context
}
