import { ReactNode } from "react";
import { Settings } from "src/@core/context/settingsContext";

export type Layout = "vertical" | "horizontal" | "blank" | "blankWithAppBar";

export type Skin = "default" | "bordered" | "semi-dark";

export type ContentWidth = "full" | "boxed";

export type AppBar = "fixed" | "static" | "hidden";

export type Footer = "fixed" | "static" | "hidden";

export type ThemeColor =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success";

export type VerticalNavToggle = "accordion" | "collapse";

export type HorizontalMenuToggle = "hover" | "click";

export type NavLink = {
  path?: string;
  title: string;
  action?: string;
  subject?: string;
  disabled?: boolean;
  badgeContent?: string;
  externalLink?: boolean;
  openInNewTab?: boolean;
  icon?: string | string[] | ReactNode;
  badgeColor?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info";
  display?: boolean;
};

export type NavGroup = {
  title: string;
  action?: string;
  subject?: string;
  badgeContent?: string;
  children?: (NavGroup | NavLink)[];
  icon?: string | string[] | ReactNode;
  badgeColor?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info";
};

export type NavSectionTitle = {
  sectionTitle: string;
  action?: string;
  subject?: string;
};

export type VerticalNavItemsType = (NavLink | NavGroup | NavSectionTitle)[];
export type HorizontalNavItemsType = (NavLink | NavGroup)[];

export type LayoutProps = {
  hidden: boolean;
  settings: Settings;
  children: ReactNode;
  menuLockedIcon?: ReactNode;
  menuUnlockedIcon?: ReactNode;
  verticalNavItems?: VerticalNavItemsType;
  scrollToTop?: (props?: any) => ReactNode;
  saveSettings: (values: Settings) => void;
  footerContent?: (props?: any) => ReactNode;
  horizontalNavItems?: HorizontalNavItemsType;
  verticalAppBarContent?: (props?: any) => ReactNode;
  verticalNavMenuContent?: (props?: any) => ReactNode;
  verticalNavMenuBranding?: (props?: any) => ReactNode;
  horizontalAppBarContent?: (props?: any) => ReactNode;
  horizontalAppBarBranding?: (props?: any) => ReactNode;
  horizontalNavMenuContent?: (props?: any) => ReactNode;
  afterVerticalNavMenuContent?: (props?: any) => ReactNode;
  beforeVerticalNavMenuContent?: (props?: any) => ReactNode;
};

export type BlankLayoutProps = {
  children: ReactNode;
};

export type BlankLayoutWithAppBarProps = {
  children: ReactNode;
};
