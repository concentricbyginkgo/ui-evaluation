import { Link } from 'react-router-dom'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { navMenus, profileMenus } from '@/common/menu_item'

import ginkgoLogo from '@/assets/biosecurity-logo-black.svg'

const ShadcnHeader = () => {
  return (
    <header className='bg-white w-screen flex h-[64px] pl-5 justify-stretch shadow-lg shadow-black flex-none'>
      <div className='my-3'>
        <img src={ginkgoLogo} className='h-full w-auto flex-none ' />
      </div>
      <NavigationMenu className='flex-1 justify-end align-middle w-full mx-6 max-w-full'>
        <NavigationMenuList className='gap-6'>
          {navMenus.map((menu) => (
            <NavigationMenuItem
              key={menu.label}
              className='flex gap-2 items-center hover:underline'>
              {menu.icon}
              <NavigationMenuLink>
                <Link to={menu.link}>{menu.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className='h-full flex-none w-[220px] bg-[#0e0e1d] flex justify-center items-center text-white hover:bg-slate-600 hover:shadow-md'>
            Yao Mo
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          {profileMenus.map((menu) => (
            <DropdownMenuItem>
              <Link to={menu.link}>{menu.label}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}

export { ShadcnHeader }
