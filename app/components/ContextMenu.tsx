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
import { ReactNode } from 'react'

interface ContextMenuProps {
  children: ReactNode
  name: string
}

export default function ContextMenu({ children, name }: ContextMenuProps) {
  const handleCopyText = () => {
    navigator.clipboard.writeText(name)
  }

  return (
    <Context>
      <ContextMenuTrigger className="w-full">{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-52 customShadowLow dark:border-zinc-700">
        <ContextMenuItem
          inset
          className="cursor-pointer"
          onClick={handleCopyText}
        >
          Copy text
          <ContextMenuShortcut>
            <Copy />
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset className="cursor-pointer">
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
          <ContextMenuSubTrigger inset>Add to playlist</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48 dark:border-zinc-700">
            {playlists.map(playlist => (
              <ContextMenuItem key={playlist.id} className="cursor-pointer">
                {playlist.name}
              </ContextMenuItem>
            ))}
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </Context>
  )
}
