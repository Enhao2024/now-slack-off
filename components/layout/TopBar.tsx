import Hamburger from './Hamburger'
import Logo from './Logo'
import TopMenu from './TopMenu'

const TopBar = () => {
  return (
    <div className='w-full flex justify-between items-center nav-logo-text'>
      <Logo />
      <TopMenu />
      <Hamburger />
    </div>
  )
}

export default TopBar