import Image from 'next/image'
import template from '../../public/yes.png'
import GrainyFilter from '../components/GrainyFilter'
import Sidebar from '../components/Sidebar'
import Audiobar from '../components/Audiobar'
import ListOfSongs from '../components/ListOfSongs'
import { Songs } from '../lib/itemsList'
import ChatTrigger from '../components/ChatTrigger'

export default function Player() {
  return (
    <>
      <Sidebar />
      <Audiobar />
      <ChatTrigger />
      <div className="overflow-hidden w-full h-screen">
        <div className="flex h-screen items-center justify-center w-full gap-2">
          <Image
            alt="albumCover"
            src={template}
            width={100}
            height={100}
            className="not-selectable blur-2xl -z-20 w-screen h-screen absolute ml-auto mr-auto right-0 left-0 text-center"
          />
          <div className="flex flex-col items-center px-12">
            <Image
              alt="albumCover"
              src={template}
              width={400}
              height={400}
              className="rounded-[32px] hover:-translate-y-2 hover:shadow-2xl active:translate-y-0 active:shadow-sm transition-all duration-300"
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
        <GrainyFilter />
      </div>
    </>
  )
}
