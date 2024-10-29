import { MenuConfig, MenuTitle } from '@/utils/MenuConfig';
import {
  Github, Coffee, DollarSign, Linkedin,
} from '@geist-ui/icons';

import MenuLink from './MenuLink';
import Timer from './Timer';

function Hamburger() {
  return (
    <div className="lg:hidden">
      <div className="drawer z-50">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* button here */}
          <label htmlFor="my-drawer" className=" drawer-button">
            <div className="btn btn-ghost mx-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay" />
          <div className="min-h-full bg-zinc-100 flex flex-col justify-between bg-opacity-95 backdrop-blur-md">
            <ul className="menu text-base-content min-h-full w-72 px-6 py-12">
              {/* Sidebar content here */}
              <li key={MenuConfig[MenuTitle.GIT_REPO].href}>
                <MenuLink menuName={MenuConfig[MenuTitle.GIT_REPO].title} newPage>
                  <button
                    type="button"
                    className="flex gap-4 w-full items-center rounded-lg py-1.5 px-3 hover:bg-base-200 font-bold"
                  >
                    <Github />
                    <span>{MenuConfig[MenuTitle.GIT_REPO].title}</span>
                  </button>
                </MenuLink>
              </li>
              <li key={MenuConfig[MenuTitle.CONTACT].href}>
                <MenuLink menuName={MenuConfig[MenuTitle.CONTACT].title}>
                  <button
                    type="button"
                    className="flex gap-4 w-full items-center rounded-lg py-1.5 px-3 hover:bg-base-200 font-bold"
                  >
                    <Coffee />
                    <span>{MenuConfig[MenuTitle.CONTACT].title}</span>
                  </button>
                </MenuLink>
              </li>
              <li key={MenuConfig[MenuTitle.ABOUT].href}>
                <MenuLink menuName={MenuConfig[MenuTitle.ABOUT].title}>
                  <button
                    type="button"
                    className="flex gap-4 w-full items-center rounded-lg py-1.5 px-3 hover:bg-base-200 font-bold"
                  >
                    <Linkedin />
                    <span>{MenuConfig[MenuTitle.ABOUT].title}</span>
                  </button>
                </MenuLink>
              </li>
              <li key={MenuConfig[MenuTitle.DONATE].href}>
                <MenuLink menuName={MenuConfig[MenuTitle.DONATE].title}>
                  <button
                    type="button"
                    className="flex gap-4 w-full items-center rounded-lg py-1.5 px-3 hover:bg-base-200 font-bold"
                  >
                    <DollarSign />
                    <span>{MenuConfig[MenuTitle.DONATE].title}</span>
                  </button>
                </MenuLink>
              </li>
            </ul>
            <div className="text-center p-4">
              <Timer fontSize="22px" title="Exactly One Hour :)" customize="tooltip-top" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
