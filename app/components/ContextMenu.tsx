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

export default function ContextMenu() {
  return (
    <Context>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52 bg-white shados">
        <ContextMenuItem inset className="hover:bg-[#f1f5f9]">
          Copy text
          <ContextMenuShortcut>
            <Copy />
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset className="hover:bg-[#f1f5f9]">
          Play on youtube
          <ContextMenuShortcut>
            <YouTube />
          </ContextMenuShortcut>
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
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger inset className="hover:bg-[#f1f5f9]">
            Add to playlist
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48 bg-white">
            {playlists.map(playlist => (
              <ContextMenuItem key={playlist.id} className="hover:bg-[#f1f5f9]">
                {playlist.name}
              </ContextMenuItem>
            ))}
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </Context>
  )
}
