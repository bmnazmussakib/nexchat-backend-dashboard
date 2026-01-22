'use client';
import { AgentConfig } from '@/utils/types';
import React from 'react';
import { LuChevronRight } from 'react-icons/lu';
import ChatWidget from './ui/Chat/ChatWidgets';

interface Props {
  config: AgentConfig;
}

export function StepPlayground({ config }: Props) {
  return (
    <div className="w-full space-y-10">
      <div className="bg-white rounded-3xl md:p-16 p-10 ">
        <h2 className="md:text-3xl text-2xl font-grandis font-bold bg-gradient-to-r from-[#f55823] to-[#ff9f00] bg-clip-text text-transparent mb-6">
          Congratulations
        </h2>
        <p className="text-black md:text-base text-sm mb-10 max-w-2xl ">
          Now that your first chatbot is created, you can now chat with him. There is still one more step if you want to embed the chatbot in your website.
        </p>
        <button className="w-full md:max-w-[400px] font-semibold px-4 py-3 md:text-base text-sm bg-gradient-to-r from-[#f55823] to-[#ff9f00] text-white rounded-full hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
          See how to embed chatbot on your website
        </button>
      </div>

      <ChatWidget />
    </div>
  );
}