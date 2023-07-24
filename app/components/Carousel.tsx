import React, { useState, useRef, ReactNode } from 'react'
import { Songs } from '../lib/api-response'
import { NavArrowLeft, NavArrowRight } from 'iconoir-react'
import { cn } from '@/app/lib/utils'

const MAX_VISIBILITY = 3

interface CarouselProps {
  children: ReactNode
}

interface CarouselStyles {
  '--active': string
  '--offset': string
  '--direction': string
  '--abs-offset': string
  pointerEvents: 'auto' | 'none'
  opacity: '0' | '1'
  display: 'none' | 'block'
}

const CarouselContent: React.FC<CarouselProps> = ({ children }) => {
  const [active, setActive] = useState(0)
  const count = React.Children.count(children)
  const containerRef = useRef<HTMLDivElement>(null)
  const startXRef = useRef<number>(0)

  const handleMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
    startXRef.current = e.clientX
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const handleMouseMove = (e: MouseEvent) => {
    const containerWidth = containerRef.current?.offsetWidth || 0
    const dragDistance = e.clientX - startXRef.current
    const dragRatio = dragDistance / containerWidth

    if (Math.abs(dragRatio) >= 1 / MAX_VISIBILITY) {
      if (dragRatio > 0) {
        setActive(prevActive => Math.max(prevActive - 1, 0))
      } else {
        setActive(prevActive => Math.min(prevActive + 1, count - 1))
      }
      startXRef.current = e.clientX
    }
  }

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }

  const handleMouseDownLeft = () => {
    setActive(prevActive => Math.max(prevActive - 1, 0))
  }

  const handleMouseDownRight = () => {
    setActive(prevActive => Math.min(prevActive + 1, count - 1))
  }

  return (
    <div
      className="carousel relative w-full h-full grid place-items-center"
      ref={containerRef}
    >
      {React.Children.map(children, (child, i) => {
        const styles: CarouselStyles = {
          '--active': i === active ? '1' : '0',
          '--offset': `${(active - i) / 3}`,
          '--direction': `${Math.sign(active - i)}`,
          '--abs-offset': `${Math.abs(active - i) / 3}`,
          pointerEvents: active === i ? 'auto' : 'none',
          opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
          display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block'
        }

        return (
          <div
            className="card-container absolute w-full h-full transition-all duration-300 ease-out"
            style={styles}
          >
            {React.cloneElement(child as React.ReactElement<any>, {
              onMouseDown: handleMouseDown
            })}
          </div>
        )
      })}
      <div className="inline-flex items-center gap-2 absolute bottom-0">
        <button
          className={cn(
            'opacity-0 invisible hover:opacity-100 active:scale-90 transition-all duration-300',
            {
              'opacity-50 visible': active > 0
            }
          )}
        >
          <NavArrowLeft className="w-8 h-8" onMouseDown={handleMouseDownLeft} />
        </button>
        <button
          className={cn(
            'opacity-0 hover:opacity-100 invisible active:scale-90 transition-all duration-300',
            {
              'opacity-50 hover:opacity-100 visible': active < count - 1
            }
          )}
        >
          <NavArrowRight
            className="w-8 h-8"
            onMouseDown={handleMouseDownRight}
          />
        </button>
      </div>
    </div>
  )
}

const Carousel = () => {
  const handleMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault()
  }

  return (
    <div className="w-full h-full">
      <CarouselContent>
        {Songs.map(song => (
          <div
            key={song.id}
            className="card w-full h-full flex flex-col items-center justify-center gap-2 p-[2rem] transition-all duration-300 ease-out"
          >
            <p className="font-medium">{song.name}</p>
            <div className="relative group">
              <div
                className="w-40 h-40 rounded-[10px] albumShadow"
                style={{ backgroundImage: `url(${song.image})` }}
                onMouseDown={handleMouseDown}
              />
            </div>
          </div>
        ))}
      </CarouselContent>
    </div>
  )
}

export default Carousel
