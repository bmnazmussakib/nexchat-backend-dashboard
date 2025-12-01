import { ReactNode } from "react";


export interface SubMenuItem {
  name: string;
  icon: ReactNode;
  href: string;
}

export interface MenuItem {
  name: string;
  icon: ReactNode;
  href: string;
  subItems?: SubMenuItem[];
}

export interface SidebarSection {
  title: string;
  items: MenuItem[];
}

export interface SidebarData {
  logo: {
    icon: ReactNode;
    text: string;
  };
  sections: MenuItem[];
}