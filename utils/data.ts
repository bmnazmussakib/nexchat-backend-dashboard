import AiAgentsIcon from "@/app/components/ui/icons/AiAgentsIcon";
import { ChartCardConfig, DashboardItemTypes, SortOption } from "./types";


export const dashboardItems: DashboardItemTypes[] = [
  {
    id: 1,
    icon: AiAgentsIcon,
    iconProps: { color: "#FF0DC7" },        // dynamic color!
    title: "total ai agents",
    count: 1200,
  },
  {
    id: 2,
    icon: AiAgentsIcon,
    iconProps: { color: "#00E5FF" },
    title: "total crawlers",
    count: 1450,
  },
  {
    id: 3,
    icon: AiAgentsIcon,
    iconProps: { color: "#8B5CF6" },
    title: "total files",
    count: 8900,
  },
  {
    id: 4,
    icon: AiAgentsIcon,
    iconProps: { color: "#10B981" },
    title: "messages last 30 days",
    count: 34200,
  },
];

export const chartData: Record<SortOption, { categories: string[]; values: number[] }> = {
  daily: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    values: [45, 52, 38, 65, 49, 70, 91],
  },
  weekly: {
    categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    values: [180, 220, 195, 280],
  },
  monthly: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    values: [300, 420, 380, 510, 490, 620, 700, 910],
  },
};

export const chartCardConfigs: ChartCardConfig[] = [
  {
    id: 'messages-interactive',
    title: 'Daily Messages',
    defaultSort: 'daily',
    isInteractive: true,
  },
  {
    id: 'messages-static',
    title: 'Daily Messages',
    defaultSort: 'daily',
    isInteractive: false,
    // staticImageSrc: '/assets/images/chart-card-1.png',
  },
  {
    id: 'sales-interactive',
    title: 'Sales Overview',
    defaultSort: 'weekly',
    isInteractive: true,
  },
  {
    id: 'revenue-static',
    title: 'Revenue Trend',
    defaultSort: 'monthly',
    isInteractive: false,
    // staticImageSrc: '/assets/images/chart-card-2.png',
  },
  // Add more cards here easily
];