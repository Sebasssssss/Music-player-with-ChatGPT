import {
  Tooltip as Tip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/app/components/ui/tooltip'
import { InfoEmpty } from 'iconoir-react'

export function Tooltip() {
  return (
    <div className="absolute top-2 left-2">
      <TooltipProvider>
        <Tip>
          <TooltipTrigger>
            <div>
              <InfoEmpty className="opacity-50 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </TooltipTrigger>
          <TooltipContent className="w-52 text-left dark:border-zinc-700">
            <p>The song that is selected is the one to be reproduce next.</p>
          </TooltipContent>
        </Tip>
      </TooltipProvider>
    </div>
  )
}
