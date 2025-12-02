import { dashboardItems } from '@/utils/data'
import React from 'react'
import DashboardItemCard from './ui/DashboardItemCard'

type Props = {}

function DashboardCardItems({ }: Props) {
    return (
        <>
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
    )
}

export default DashboardCardItems