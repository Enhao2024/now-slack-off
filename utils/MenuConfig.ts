import { AppConfig } from "./AppConfig";

export enum MenuTitle {
  GIT_REPO = "GitHub",
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
  [MenuTitle.GIT_REPO]: {
    title: MenuTitle.GIT_REPO,
    href: AppConfig.gitRepo,
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

export const TOP_BAR_MENU = [MenuConfig[MenuTitle.GIT_REPO], MenuConfig[MenuTitle.CONTACT]];
