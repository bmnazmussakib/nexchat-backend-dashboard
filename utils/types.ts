import { ReactNode } from "react";

export interface SidebarLogo {
  img: string;
  text: string;
}

export interface SidebarSection {
  name: string;
  icon: ReactNode;
  href: string;
}

export interface SidebarData {
  logo: SidebarLogo;
  sections: SidebarSection[];
}
