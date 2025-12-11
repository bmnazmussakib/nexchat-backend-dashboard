'use client';

import DashboardCardItems from "./components/DashboardCardItems";
import DashboardHero from "./components/DashboardHero";
import MessagesChartCard from "./components/ui/cards/MessagesChartCard";
import UserInquiryCard from "./components/ui/cards/UserInquiryCard";

export default function Home() {
  return (
    <>
      <DashboardHero />
      <DashboardCardItems />
      <div className="grid md:grid-cols-2 gap-4 section-padding">
        {/* Messages Chart Card */}
        <MessagesChartCard />

        {/* User Inquiry Card */}
        <UserInquiryCard />
      </div>
    </>
  );
}