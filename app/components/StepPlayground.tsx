'use client';
import { AgentConfig } from '@/utils/types';
import React from 'react';
import { LuChevronRight } from 'react-icons/lu';

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
        <p className="text-[#696969] md:text-base text-sm mb-10 max-w-2xl ">
          Now that your first chatbot is created, you can now chat with him. There is still one more step if you want to embed the chatbot in your website.
        </p>
        <button className="w-full md:max-w-[400px] px-4 py-3 md:text-base text-sm bg-gradient-to-r from-[#f55823] to-[#ff9f00] text-white rounded-full hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
          See how to embed chatbot on your website
        </button>
      </div>

      <div className="max-w-2xl mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
        <div className="bg-gray-800 px-6 py-4 flex justify-between items-center">
          <h3 className="text-white font-bold">NexChat</h3>
          <span className="text-gray-400 text-2xl">...</span>
        </div>
        <div className="bg-white p-6 min-h-96">
          <div className="text-left">
            <div className="inline-block bg-gray-100 rounded-lg px-5 py-3">
              <p className="font-semibold text-orange-600">{config.displayName}</p>
              <p>{config.welcomeMessage}</p>
            </div>
          </div>
          <div className="mt-10 text-right space-y-4">
            <div className="inline-block bg-orange-100 rounded-lg px-5 py-3">What is this platform?</div>
            <div className="inline-block bg-orange-100 rounded-lg px-5 py-3">How do I create a chatbot?</div>
          </div>
        </div>
        <div className="bg-gray-100 p-4 flex gap-3">
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="w-full sm:max-w-[350px] px-6 py-3 md:text-base text-sm bg-gradient-to-r from-[#f55823] to-[#ff9f00] text-white rounded-full hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2bg-gradient-to-r from-[#f55823] to-[#ff9f00] text-white p-4 rounded-lg hover:opacity-90 transition">
            <LuChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="text-center text-xs text-gray-500 py-2">Powered by NexChat</div>
      </div>
    </div>
  );
}