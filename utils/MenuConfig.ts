import { AppConfig } from "./AppConfig";

export enum MenuTitle {
  DASHBOARD = "Dashboard",
  GIT_REPO = "GitHub",
  CHAT_ROOM = "Chat Room",
  LUNCH_GUESS = "What's For Lunch",
  CONTACT = "Contact",
  DONATE = "Donate",
  ABOUT = "About Us",
  LUNCH_RECIPE = "Try New Recipe",
  AFTER_WORK_PLAN = "Todos After Work",
  AFTERNOON_PLAN = "Todos AfterNoon",
  WEEKEND_PLAN = "Weekend Plans",
  LEARNING = "Learning",
  NEXT_WEEK_PLAN = "Todes Next Week"
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
  [MenuTitle.DASHBOARD]: {
    title: MenuTitle.DASHBOARD,
    href: '/',
    golive: true,
  },
  [MenuTitle.LUNCH_RECIPE]: {
    title: MenuTitle.LUNCH_RECIPE,
    href: '/recipe',
    golive: false,
  },
  [MenuTitle.AFTER_WORK_PLAN]: {
    title: MenuTitle.AFTER_WORK_PLAN,
    href: '/after_work_plan',
    golive: false,
  },
  [MenuTitle.AFTERNOON_PLAN]: {
    title: MenuTitle.AFTERNOON_PLAN,
    href: '/afternoon_plan',
    golive: false,
  },
  [MenuTitle.WEEKEND_PLAN]: {
    title: MenuTitle.WEEKEND_PLAN,
    href: '/weekend_plan',
    golive: false,
  },
  [MenuTitle.LEARNING]: {
    title: MenuTitle.LEARNING,
    href: '/learning',
    golive: false,
  },
  [MenuTitle.NEXT_WEEK_PLAN]: {
    title: MenuTitle.NEXT_WEEK_PLAN,
    href: '/next_week_plan',
    golive: false,
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
  [MenuTitle.LUNCH_GUESS]: {
    title: MenuTitle.LUNCH_GUESS,
    href: '/lunch',
    golive: true,
  },
  [MenuTitle.CONTACT]: {
    title: MenuTitle.CONTACT,
    href: '/contact',
    golive: true,
  },
  [MenuTitle.DONATE]: {
    title: MenuTitle.DONATE,
    href: '/donate',
    golive: false,
  },
};

export const TOP_BAR_MENU = [MenuConfig[MenuTitle.GIT_REPO], MenuConfig[MenuTitle.CONTACT]];
