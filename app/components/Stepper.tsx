// components/Stepper.tsx
'use client';

import React from 'react';
import { LuCheck, LuChevronRight } from 'react-icons/lu';
import { AppStep } from '@/utils/types';

interface StepperProps {
  currentStep: AppStep;
}

const steps = [
  { number: AppStep.Configuration, label: 'Configuration' },
  { number: AppStep.UploadFile, label: 'Upload file' },
  { number: AppStep.CreateAgent, label: 'Create your AI Agent' },
  { number: AppStep.Playground, label: 'Playground' },
];

export function Stepper({ currentStep }: StepperProps) {
  return (
    <>
      {/* Mobile & Tablet: Vertical + Clean Connecting Line */}
      <div className="relative flex flex-col space-y-5 px-0 pb-8 md:hidden font-grandis">
        {/* Connecting Lines (drawn behind) */}
        <div className="absolute left-5 top-6 bottom-0 w-0.5">
          {steps.slice(0, -1).map((_, i) => (
            <div
              key={i}
              className={`absolute w-full transition-all duration-500
                ${currentStep > i + 1
                  ? 'bg-gradient-to-b from-[#f55823] to-[#ff9f00]'
                  : 'bg-gray-300'
                }`}
              style={{
                top: `${i * 60}px`,
                height: '60px',
              }}
            />
          ))}
        </div>

        {/* Steps */}
        {steps.map((step) => (
          <div key={step.number} className="relative flex items-center">
            {/* Circle */}
            <div
              className={`z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-md transition-all
                ${currentStep >= step.number
                  ? 'bg-gradient-to-r from-[#f55823] to-[#ff9f00] text-white'
                  : 'border border-gray-400 text-gray-500 bg-white'
                }`}
            >
              {currentStep > step.number ? <LuCheck className="w-5 h-5" /> : step.number}
            </div>

            {/* Label */}
            <div
              className={`ml-4 text-sm font-bold transition-colors
                ${currentStep >= step.number ? 'text-black' : 'text-gray-400'}
              `}
            >
              {step.label}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: Your Original Horizontal Design (100% Unchanged) */}
      <div className="hidden md:flex items-center justify-center py-10 font-grandis">
        {steps.map((step, i) => (
          <React.Fragment key={step.number}>
            <div className="flex items-center">
              <div
                className={`lg:w-11 lg:h-11 w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all lg:text-lg text-xs
                  ${currentStep >= step.number
                    ? 'bg-gradient-to-r from-[#f55823] to-[#ff9f00] text-white'
                    : 'border border-gray-400 text-gray-500'
                  }`}
              >
                {step.number}
              </div>
              <div
                className={`ml-3 xl:text-lg lg:text-sm text-sm font-bold
                  ${currentStep >= step.number ? 'text-black' : 'text-gray-400'}
                `}
              >
                {step.label}
              </div>
            </div>

            {/* Chevron preserved on desktop */}
            {i < steps.length - 1 && (
              <LuChevronRight className="text-xl lg:mx-6 mx-3 text-gray-400" />
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}