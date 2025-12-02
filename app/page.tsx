import Image from "next/image";
import { highlightTextWithGradient } from "./components/ui/highlightTextWithGradient";
import { dashboardItems } from "@/utils/data";
import DashboardItemCard from "./components/ui/DashboardItemCard";
import React from "react";

export default function Home() {
  console.log({ dashboardItems })
  return (
    <>
      <div className="card bg-gradient-to-l from-[#FFDEC1] from-[0%] to-[#FBD7FF] to-[100%] w-full shadow-sm rounded-3xl">
        <div className="card-body lg:p-10 md:p-8 p-6">
          <h2 className="card-title text-black md:text-[32px] sm:text-2xl text-lg font-grandis">
            {
              highlightTextWithGradient('Welcome to NexChat AI🎉 ', 'NexChat AI')
            }
          </h2>
          <p className="font-grandis md:text-lg text-sm">You are probably new to our platform.</p>
          <p className="font-grandis md:text-lg text-sm">We recommend starting with our
            <span className="bg-gradient-to-r from-[#f55823] to-[#ff9f00] bg-clip-text text-transparent relative before:absolute before:w-full before:h-[1px] before:left-0 before:-bottom-0.5 before:transition-all before:duration-200 before:bg-[linear-gradient(90deg,#f55823_0%,#ff9f00_100%)]"> onboarding</span> for a step-by-step guide on how to create your first AI Agent.</p>
          <div className="card-actions justify-start mt-7">
            <button className="btn bg-white border-white shadow-none rounded-full capitalize text-black font-grandis md:text-lg text-sm font-medium md:h-12 px-6">open onboarding</button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] gap-6 rounded-lg bg-gray-100 section-padding">
          {
            dashboardItems?.map((item, index) => (
              <React.Fragment key={item?.id}>
                <DashboardItemCard data={item} />
              </React.Fragment>
            ))
          }
        </div>
      </div>
    </>
  );
}
