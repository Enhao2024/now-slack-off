import { MenuTitle, TOP_BAR_MENU } from '@/utils/MenuConfig';
import MenuLink from './MenuLink';

function TopMenu() {
  // add more menu items through TOP_BAR_MENU
  const renderMenu = () => TOP_BAR_MENU.map((menu) => {
    let toNewPage = false;
    if (menu.title === MenuTitle.GIT_REPO) {
      toNewPage = true;
    }
    return <MenuLink key={menu.href} menuName={menu.title} newPage={toNewPage} />;
  });

  return (
    <div className="hidden lg:block lg:flex space-x-6 justify-evenly nav-menu-text px-8">
      {renderMenu()}
    </div>
  );
}

export default TopMenu;
