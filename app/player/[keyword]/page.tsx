import { Search } from 'iconoir-react'
import { Play } from 'iconoir-react'
import template from '../../../public/album.png'
import Image from 'next/image'
import ListOfSongs from '@/app/components/ListOfSongs'

export default function Page() {
  return (
    <div className="grid gap-8 container mx-auto mt-8">
      <div className="w-[220px] relative">
        <input
          type="text"
          name="text"
          className="input w-full h-10 p-[10px] transition duration-200 ease-linear border-[2.5px] border-black font-[14px] placeholder:uppercase placeholder:tracking-[2px] focus:outline-none focus:border-[0.5px] input"
          placeholder="search..."
        />
        <span className="absolute right-[10px] top-2">
          <Search />
        </span>
      </div>
      <div className="grid grid-cols-2 gap-8 w-full mx-auto rounded-[10px]">
        <div className="flex flex-col items-center justify-between gap-4 p-8 w-full group bg-gray-100 hover:bg-gray-200 transtion-all duration-300 cursor-pointer rounded-[10px] shados active:shadow-sm active:translate-y-1 relative">
          <Image
            className="rounded-[10px] shados"
            src={template}
            width={200}
            height={200}
            alt=""
          />
          <div className="flex flex-col gap-4 text-center">
            <h1 className="font-bold text-4xl">Ghost</h1>
            <h1 className="text-zinc-400">Jaden Smith</h1>
          </div>
          <Play className="w-8 h-8 absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300" />
        </div>
        <div>
          <ListOfSongs />
        </div>
      </div>
    </div>
  )
}
