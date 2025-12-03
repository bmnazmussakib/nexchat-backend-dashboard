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


// Multistep Form data type
// types.ts
export enum AppStep {
  Configuration = 1,
  UploadFile = 2,
  CreateAgent = 3,
  Playground = 4,
}

export interface AgentConfig {
  apiKey: string;
  file?: File | null;
  fileName: string | null;
  displayName: string;
  welcomeMessage: string;
  systemInstruction: string;
  model: string;
  errorMessage: string;
}

export const DEFAULT_CONFIG: AgentConfig = {
  apiKey: '',
  file: null,
  fileName: null,
  displayName: 'NexChat AI Agent',
  welcomeMessage: 'Hello, how can I help you?',
  systemInstruction:
    'You are an assistant who helps users that visit our website, keep it short, always refer to the documentation provided and never ask for more information.',
  model: 'gpt-4o',
  errorMessage:
    'Oops! An error has occurred. If the issue persists, feel free to reach out to our support team for assistance. We\'re here to help!',
};

