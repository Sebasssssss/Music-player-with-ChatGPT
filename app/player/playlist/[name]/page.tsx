import Image from 'next/image'
import template from '../../../../public/album.png'
import ListOfSongs from '../../../components/ListOfSongs'
import { Songs } from '../../../lib/itemsList'

export default function Player() {
  return (
    <div className="overflow-hidden w-full h-screen">
      <div className="flex h-screen items-center justify-center w-full gap-2">
        <Image
          alt="albumCover"
          src={template}
          width={100}
          height={100}
          className="not-selectable blur-2xl opacity-80 -z-20 w-screen h-screen absolute ml-auto mr-auto right-0 left-0 text-center"
        />
        <div className="flex flex-col items-center px-12">
          <Image
            alt="albumCover"
            src={template}
            width={400}
            height={400}
            className="rounded-[32px]"
          />
        </div>
        <div>
          <h1 className="text-xl font-bold flex flex-col py-4 px-6">
            Know
            <span className="text-sm">
              Jason Mraz • 2018 • {Songs.length} songs
            </span>
          </h1>
          <ListOfSongs />
        </div>
      </div>
    </div>
  )
}
