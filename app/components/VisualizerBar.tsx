import { useEffect, useRef } from 'react'

export default function VisualizerBar({ onClick, pause }) {
  const barsRef = useRef<NodeListOf<HTMLElement> | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

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
            bar.style.background = 'black'
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
  }, [])

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
          bar.style.background = 'black'
        })
      }, 150)
    }
  }, [pause])

  return (
    <div className="visualizer-container" onClick={onClick}>
      {Array.from({ length: 50 }).map((_, index) => (
        <div key={index} className="bars"></div>
      ))}
    </div>
  )
}
