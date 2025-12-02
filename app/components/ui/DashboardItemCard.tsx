import { DashboardItemTypes } from '@/utils/types'
import React from 'react'

interface Props {
    data: DashboardItemTypes
}

function DashboardItemCard({ data }: Props) {
    console.log(data?.title, 'data')
    const Icon = data.icon;


    {/* {dashboardItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <Icon {...item.iconProps} className="w-14 h-14" />
                <p className="text-3xl font-bold mt-4">{item.count.toLocaleString()}</p>
                <p className="text-gray-600 capitalize">{item.title}</p>
              </div>
            );
          })} */}

    return (
        <>
            <div className="card card-border bg-white border-0 rounded-3xl">
                <div className="card-body md:p-6 p-5">
                    <div className="icon">
                        <Icon {...data?.iconProps} className="w-14 h-14" />
                    </div>
                    <h2 className="card-title capitalize md:text-xl text-lg font-medium font-grandis text-neutral-800 ">{data?.title}</h2>
                </div>
                <div className="card-footer md:p-6 p-5">
                    <h1 className="card-title capitalize md:text-4xl text-2xl font-bold font-grandis text-neutral-800 ">{data?.count}</h1>

                </div>
            </div>
        </>
    )
}

export default DashboardItemCard