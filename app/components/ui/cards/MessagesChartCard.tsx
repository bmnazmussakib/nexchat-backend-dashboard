'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface MessagesChartCardProps {}

const MessagesChartCard: React.FC<MessagesChartCardProps> = () => {
  const [sortBy, setSortBy] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  const data = {
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

  const currentData = data[sortBy];

  const options = {
    chart: {
      id: 'spline-area',
      toolbar: { show: true },
    },
    colors: ['#F87017'],
    stroke: {
      curve: 'smooth' as const,
      width: 3,
      dashArray: 6,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.5,
        opacityFrom: 0.8,
        opacityTo: 0.2,
        stops: [0, 100],
        colorStops: [
          { offset: 0, color: '#FDD6B7', opacity: 0.8 },
          { offset: 100, color: '#FFFEFD', opacity: 0.2 },
        ],
      },
    },
    xaxis: { categories: currentData.categories },
    tooltip: { x: { format: 'dd MMM' } },
    dataLabels: { enabled: false },
    grid: { borderColor: '#f1f1f1' },
  };

  const series = [{ name: 'Messages', data: currentData.values }];

  return (
    <div className="card bg-white shadow-sm rounded-3xl overflow-hidden">
      <div className="card-header w-full flex justify-between items-center p-6 bg-white">
        <h4 className="font-grandis font-medium lg:text-xl md:text-lg text-base">
          Daily Messages
        </h4>
        <div className="flex items-center font-grandis md:text-base text-sm">
          <span className="block w-16 font-normal">Sort by</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'daily' | 'weekly' | 'monthly')}
            className="select select-ghost font-medium w-24 outline-0 font-grandis"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
      </div>
      <div className="card-body p-6">
        <div className="h-72">
          <Chart
            options={options}
            series={series}
            type="area"
            height="100%"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default MessagesChartCard;