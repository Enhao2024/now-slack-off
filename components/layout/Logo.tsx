import Link from 'next/link';
import LogoIcon from '../svg/LogoIcon';
import Timer from './Timer';

function Logo() {
  return (
    <>
      <div className="hidden lg:block">
        <Link href="/">
          <div className="flex flex-row mx-8 justify-between items-center space-x-4">
            <LogoIcon customize="w-14 h-14" />
            <div className="nav-logo-text">Slack Off Now</div>
            <Timer fontSize="22px" title="Will Be Redirected After No Action" customize="tooltip-right" />
          </div>
        </Link>
      </div>
      <div className="lg:hidden">
        <Link href="/">
          <div className="flex flex-row mx-8 justify-between items-center space-x-4">
            <LogoIcon customize="w-14 h-14" />
            <Timer fontSize="20px" title="Will Be Redirected After No Action" customize="tooltip-bottom" />
          </div>
        </Link>
      </div>
    </>
  );
}

export default Logo;
