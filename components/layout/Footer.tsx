import { MenuTitle } from '@/utils/MenuConfig';
import MenuLink from './MenuLink';

function Footer() {
  return (
    <footer className="footer footer-center p-10 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4 font-bold">
        <MenuLink menuName={MenuTitle.ABOUT} />
        <MenuLink menuName={MenuTitle.CONTACT} />
        <MenuLink menuName={MenuTitle.DONATE} />
      </nav>
      <aside>
        <p className="text-xs m-2">Copyright © 2024 - All right reserved by GoodAfterLunch</p>
        <div className="text-xs m-2">
          This site is protected by reCAPTCHA and the Google&nbsp;
          <a className="font-bold" href="https://policies.google.com/privacy">Privacy Policy</a>
          {' '}
          and&nbsp;
          <a className="font-bold" href="https://policies.google.com/terms">Terms of Service</a>
          {' '}
          apply.
        </div>
      </aside>
    </footer>
  );
}

export default Footer;
