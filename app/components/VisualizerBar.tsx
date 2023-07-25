import { useEffect, useRef } from 'react'
import { useThemeContext } from '../context/themeContext'

interface VisualizerBarProps {
  onClick: () => void
  pause: boolean
}

export default function VisualizerBar({ onClick, pause }: VisualizerBarProps) {
  const barsRef = useRef<NodeListOf<HTMLElement> | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const { isDarkMode } = useThemeContext()

  useEffect(() => {
    barsRef.current = document.querySelectorAll('.bars')

    barsRef.current?.forEach(bar => {
      let size = Math.random()
      bar.style.transform = `scaleY(${size})`
    })

    const handleClick = () => {
      const bars = barsRef.current

      if (intervalRef.current) {
        clearInterval(intervalRef.current)

        bars?.forEach(bar => {
          bar.style.background = '#9696a0'
        })

        intervalRef.current = null

        return
      } else {
        intervalRef.current = setInterval(() => {
          bars?.forEach(bar => {
            let size = Math.random()
            bar.style.transform = `scaleY(${size})`
            bar.style.background = isDarkMode ? 'white' : 'black'
          })
        }, 150)
      }
    }

    const audioContainerRef = document.querySelector('.visualizer-container')
    audioContainerRef?.addEventListener('click', handleClick)

    return () => {
      audioContainerRef?.removeEventListener('click', handleClick)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isDarkMode])

  useEffect(() => {
    const bars = barsRef.current

    if (pause && intervalRef.current) {
      clearInterval(intervalRef.current)

      bars?.forEach(bar => {
        bar.style.background = '#9696a0'
      })

      intervalRef.current = null
    } else if (!pause && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        bars?.forEach(bar => {
          let size = Math.random()
          bar.style.transform = `scaleY(${size})`
          bar.style.background = isDarkMode ? 'white' : 'black'
        })
      }, 150)
    }
  }, [pause, isDarkMode])

  return (
    <div
      className="visualizer-container cursor-pointer h-5 flex gap-[0.2rem] justify-between"
      onClick={onClick}
    >
      {Array.from({ length: 50 }).map((_, index) => (
        <div key={index} className="bars w-[2px] bg-[#9696a0]" />
      ))}
    </div>
  )
}
