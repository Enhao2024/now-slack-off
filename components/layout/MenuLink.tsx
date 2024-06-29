import { MenuConfig, MenuTitle } from '@/utils/MenuConfig'
import { DEV, PREVIEW, PROD } from '@/utils/VercelEnv';
import Link from 'next/link';
import { ReactNode } from "react";

interface Props {
  menuName: MenuTitle,
  newPage?: boolean,
  children?: ReactNode,
}
const MenuLink = ({ menuName, newPage, children }: Props) => {
  if (!menuName || !MenuConfig[menuName]) {
    return null;
  }

  const content = () => {
    if (!!children) {
      return children;
    }
    return MenuConfig[menuName].title;
  }

  const greyout = () => {
    return PROD && !MenuConfig[menuName].golive;
  }

  if (greyout()) {
    return (
      <div title='Will be there soon...'>
        <Link className='disabled-link' href={MenuConfig[menuName].href} target={newPage ? '_blank' : '_self'}>{content()}</Link>
      </div>
    )
  }
  return (
    <Link href={MenuConfig[menuName].href} target={newPage ? '_blank' : '_self'}>{content()}</Link>
  )

}

export default MenuLink