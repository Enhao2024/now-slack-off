import { MenuTitle } from '@/utils/MenuConfig'
import AboutSvg from '../svg/AboutIcon'
import Coffee from '../svg/CoffeeIcon'
import Contact from '../svg/ContactIcon'
import MenuLink from './MenuLink'

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4 font-bold">
        <MenuLink menuName={MenuTitle.CALCULATOR} />
        <MenuLink menuName={MenuTitle.LUNCH_GUESS} />
        <MenuLink menuName={MenuTitle.CHAT_ROOM} />
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-8">
          <MenuLink menuName={MenuTitle.ABOUT}>
            <AboutSvg customize='w-12 h-12' />
          </MenuLink>
          <MenuLink menuName={MenuTitle.CONTACT}>
            <Contact customize='w-12 h-12' />
          </MenuLink>
          <MenuLink menuName={MenuTitle.DONATE}>
            <Coffee customize='w-12 h-12' />
          </MenuLink>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by SlackOffNow</p>
      </aside>
    </footer>
  )
}

export default Footer