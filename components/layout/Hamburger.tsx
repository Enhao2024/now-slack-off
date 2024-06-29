import { MenuTitle, TOP_BAR_MENU } from '@/utils/MenuConfig'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import MenuLink from './MenuLink'

const Hamburger = () => {

  const TopBarMenu = () => TOP_BAR_MENU.map((menu) => {
    let toNewPage = false;
    if (menu.title === MenuTitle.GIT_REPO) {
      toNewPage = true;
    }
    return <MenuItem key={menu.href}>
      <MenuLink menuName={menu.title} newPage={toNewPage} >
        <button className="flex w-full items-center rounded-lg py-1.5 px-3 hover:bg-base-200 font-bold">
          {menu.title}
        </button>
      </MenuLink>
    </MenuItem>
  });

  return (
    <div className='lg:hidden'>
      <Menu>
        <MenuButton>
          <div className='btn btn-ghost m-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </MenuButton>
        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems 
            anchor="bottom end"
            className="w-32 origin-top-right rounded-xl border bg-base-100/75 p-1 text-sm/6 focus:outline-none"
          >
            {TopBarMenu()}
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  )
}

export default Hamburger