import AiAgentsIcon from "@/app/components/ui/icons/AiAgentsIcon";
import { DashboardItemTypes } from "./types";


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