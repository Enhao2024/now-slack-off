import Hamburger from './Hamburger';
import Logo from './Logo';
import TopMenu from './TopMenu';

function TopBar() {
  return (
    <div className="w-full flex justify-between items-center nav-logo-text">
      <Logo />
      <TopMenu />
      <Hamburger />
    </div>
  );
}

export default TopBar;
