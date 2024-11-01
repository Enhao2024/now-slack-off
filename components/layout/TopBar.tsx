import Hamburger from './Hamburger';
import Logo from './Logo';
import TopMenu from './TopMenu';

function TopBar() {
  return (
    <div className="w-full flex justify-between items-center nav-logo-text fixed py-4 bg-opacity-20 z-10 backdrop-blur-md">
      <Logo />
      <TopMenu />
      <Hamburger />
    </div>
  );
}

export default TopBar;
