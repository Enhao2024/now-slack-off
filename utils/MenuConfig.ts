import { AppConfig } from "./AppConfig";

export enum MenuTitle {
  GITLAB = "GitLab",
  CALCULATOR = "Salary Calculator",
  CHAT_ROOM = "Chat Room",
  LUNCH_GUESS = "What's For Lunch",
  CONTACT = "Contact",
  DONATE = "Donate",
  ABOUT = "About Me"
}

export interface Menu {
  title: MenuTitle,
  href: string,
  golive: boolean,
}

export const MenuConfig: { [key: string]: Menu } = {
  [MenuTitle.GITLAB]: {
    title: MenuTitle.GITLAB,
    href: AppConfig.gitlab,
    golive: true,
  },
  [MenuTitle.CHAT_ROOM]: {
    title: MenuTitle.CHAT_ROOM,
    href: '/chatroom',
    golive: false,
  },
  [MenuTitle.ABOUT]: {
    title: MenuTitle.ABOUT,
    href: '/about',
    golive: true,
  },
  [MenuTitle.CALCULATOR]: {
    title: MenuTitle.CALCULATOR,
    href: '/calculator',
    golive: true,
  },
  [MenuTitle.LUNCH_GUESS]: {
    title: MenuTitle.LUNCH_GUESS,
    href: '/lunch',
    golive: true,
  },
  [MenuTitle.CONTACT]: {
    title: MenuTitle.CONTACT,
    href: '/contact',
    golive: false,
  },
  [MenuTitle.DONATE]: {
    title: MenuTitle.DONATE,
    href: '/donate',
    golive: false,
  },
};

export const TOP_BAR_MENU = [MenuConfig[MenuTitle.GITLAB], MenuConfig[MenuTitle.CONTACT]];
