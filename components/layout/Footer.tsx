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
        <p className='text-xs m-2'>Copyright © 2024 - All right reserved by SlackOffNow</p>
        <div className='text-xs m-2'>
          This site is protected by reCAPTCHA and the Google&nbsp;
          <a className='text-cyan-500' href="https://policies.google.com/privacy">Privacy Policy</a> and&nbsp;
          <a className='text-cyan-500' href="https://policies.google.com/terms">Terms of Service</a> apply.
        </div>
      </aside>
    </footer>
  )
}

export default Footer