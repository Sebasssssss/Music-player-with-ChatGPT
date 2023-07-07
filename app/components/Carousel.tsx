import React, { useState, Children, ReactNode } from 'react'
import { ArrowLeft, ArrowRight } from 'iconoir-react'
import Image from 'next/image'
import { playlists } from '../lib/api-response'

const MAX_VISIBILITY = 3

interface CarouselProps {
  children: ReactNode
}

const CarouselContent: React.FC<CarouselProps> = ({ children }) => {
  const [active, setActive] = useState<number>(0)
  const count = Children.count(children)

  return (
    <div className="carousel relative w-full h-full grid place-items-center">
      {active > 0 && (
        <button
          className="absolute flex items-center justify-center top-[50%] left-0 z-20 cursor-pointer not-selectable"
          onClick={() => setActive(i => i - 1)}
        >
          <ArrowLeft className="w-5 text-black" />
        </button>
      )}
      {Children.map(children, (child, i) => (
        <div
          className="card-container absolute w-full h-full transition-all duration-300 ease-out"
          style={{
            '--active': String(i === active ? 1 : 0),
            '--offset': String((active - i) / 3),
            '--direction': String(Math.sign(active - i)),
            '--abs-offset': String(Math.abs(active - i) / 3),
            'pointer-events': active === i ? 'auto' : 'none',
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block'
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button
          className="absolute flex items-center justify-center top-[50%] right-0 z-20 cursor-pointer not-selectable"
          onClick={() => setActive(i => i + 1)}
        >
          <ArrowRight className="w-5 text-black" />
        </button>
      )}
    </div>
  )
}

const Carousel = () => (
  <div className="w-full h-full">
    <CarouselContent>
      {playlists.map(playlist => (
        <div
          key={playlist.id}
          className="card w-full h-full flex flex-col items-center justify-center gap-2 p-[2rem] transition-all duration-300 ease-out text-black"
        >
          <Image
            className="w-40 h-40 rounded-[10px] shados"
            width={200}
            height={200}
            src={playlist.images[0].url}
            alt={playlist.name}
          />

          <p className="font-medium">{playlist.name}</p>
        </div>
      ))}
    </CarouselContent>
  </div>
)

export default Carousel
