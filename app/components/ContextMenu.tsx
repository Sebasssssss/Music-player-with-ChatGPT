import {
  ContextMenu as Context,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger
} from '@/app/components/ui/context-menu'
import { YouTube, Copy } from 'iconoir-react'
import { playlists } from '../lib/api-response'
import Link from 'next/link'

export default function ContextMenu({ children, name }) {
  const handleCopyText = () => {
    navigator.clipboard.writeText(name)
  }

  return (
    <Context>
      <ContextMenuTrigger className="w-full">{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-52 bg-white shados">
        <ContextMenuItem
          inset
          className="hover:bg-[#f1f5f9] cursor-pointer"
          onClick={handleCopyText}
        >
          Copy text
          <ContextMenuShortcut>
            <Copy />
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset className="hover:bg-[#f1f5f9] cursor-pointer">
          <Link
            href={`https://www.youtube.com/results?search_query=${name}`}
            target="_blank"
            className="w-full inline-flex items-center justify-between"
          >
            Play on Youtube
            <ContextMenuShortcut>
              <YouTube />
            </ContextMenuShortcut>
          </Link>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem inset disabled>
          Add to queue
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          Go to song radio
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          Go to artist
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          Go to album
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          Show credits
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset className="hover:bg-[#f1f5f9]">
            Add to playlist
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48 bg-white">
            {playlists.map(playlist => (
              <ContextMenuItem
                key={playlist.id}
                className="hover:bg-[#f1f5f9] cursor-pointer"
              >
                {playlist.name}
              </ContextMenuItem>
            ))}
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </Context>
  )
}
