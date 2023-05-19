import {
  DropdownMenu as DropDown,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/app/components/ui/dropdown-menu'
import Image from 'next/image'
import template from '../../public/album.png'
import Link from 'next/link'
import {
  User,
  GitHub,
  LogOut,
  Settings,
  AddUser,
  Mail,
  Message,
  Plus
} from 'iconoir-react'

export function DropDownMenu() {
  return (
    <DropDown>
      <DropdownMenuTrigger className="sidebar-profileSection font-medium flex items-center gap-2 mt-auto border border-[#f9f8fb] py-2 px-[10px] rounded-[28px] overflow-hidden h-[60px] flex-shrink-0 cursor-pointer hover:bg-[#f9f8fb] outline-none">
        <Image
          src={template}
          width="40"
          height="40"
          alt="Monica Geller"
          className="w-10 h-10 rounded-[50%] object-cover flex-shrink-0"
        />
        <span className="whitespace-nowrap overflow-hidden text-ellipsis text-zinc-900">
          Sebass Rodriguez
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="hover:bg-[#f9f8fb]">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-[#f9f8fb]">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <AddUser className="mr-2 h-4 w-4" />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="bg-white">
                <DropdownMenuItem className="hover:bg-[#f9f8fb]">
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#f9f8fb]">
                  <Message className="mr-2 h-4 w-4" />
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-[#f9f8fb]">
                  <Plus className="mr-2 h-4 w-4" />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:bg-[#f9f8fb]">
          <GitHub className="mr-2 h-4 w-4" />
          <Link href="https://github.com/Sebasssssss" target="_blank">
            GitHub
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-[#f9f8fb]">
          <Plus className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:bg-[#f9f8fb]">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropDown>
  )
}
