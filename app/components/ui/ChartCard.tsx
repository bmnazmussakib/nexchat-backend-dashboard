// components/ChartCard.tsx
'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { ChartCardConfig, SortOption } from '@/utils/types';
import { chartData } from '@/utils/data';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface ChartCardProps {
  config: ChartCardConfig;
  sortBy: SortOption;
  onSortChange: (id: string, value: SortOption) => void;
}

const ChartCard: React.FC<ChartCardProps> = ({ config, sortBy, onSortChange }) => {
  const currentData = chartData[sortBy];

  const chartOptions = {
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

  const series = [{ name: config.title.includes('Messages') ? 'Messages' : 'Value', data: currentData.values }];

  return (
    <div className="card bg-white shadow-sm rounded-3xl overflow-hidden">
      <div className="card-header w-full flex justify-between items-center p-6 bg-white">
        <h4 className="font-grandis font-medium lg:text-xl md:text-lg text-base">
          {config.title}
        </h4>
        <div className="flex items-center font-grandis md:text-base text-sm">
          <span className="block w-16 font-normal">Sort by</span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(config.id, e.target.value as SortOption)}
            disabled={!config.isInteractive}
            className="select select-ghost font-medium w-24 outline-0 font-grandis disabled:opacity-60"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
      </div>

      <div className="px-6 pb-6 h-96">
        {config.isInteractive ? (
          <Chart
            options={chartOptions}
            series={series}
            type="area"
            height="100%"
            width="100%"
          />
        ) : (
          <figure className="h-full w-full">
            {/* <img
              src={config.staticImageSrc}
              alt={`${config.title} preview`}
              className="w-full h-full object-cover"
            /> */}
            <div>
                <h4 className='font-grandis font-medium text-lg text-neutral-700 mb-1'>No User Inquiry</h4>
                <p className='font-grandis text-base font-normal leading-5 text-[#b1b1b1]'>No new user inquiries found. By default, user inquiries are turned off. To enable them, navigate to your AI Agent settings.</p>
            </div>
          </figure>
        )}
      </div>
    </div>
  );
};

export default ChartCard;