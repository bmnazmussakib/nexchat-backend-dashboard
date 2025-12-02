import { ComponentType, ReactNode, SVGProps } from "react";

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

export interface DashboardItemTypes {
  id: number;
  icon: ComponentType<SVGProps<SVGSVGElement> & { color?: string }>;
  iconProps?: SVGProps<SVGSVGElement> & { color?: string };
  title: string;
  count: number;
}

export interface ColoredIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

