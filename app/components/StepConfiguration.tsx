'use client';
import { AgentConfig } from '@/utils/types';
import React from 'react';
import { LuChevronRight } from 'react-icons/lu';

interface Props {
  config: AgentConfig;
  updateConfig: (updates: Partial<AgentConfig>) => void;
  onNext: () => void;
}

export function StepConfiguration({ config, updateConfig, onNext }: Props) {
  return (
    <div className="w-full">
      <div className="bg-white rounded-3xl md:p-16 p-10">
        <h2 className="md:text-3xl text-2xl font-grandis font-bold bg-gradient-to-r from-[#f55823] to-[#ff9f00] bg-clip-text text-transparent mb-6">
          Let's Configure (B.Y.O.) API Key
        </h2>
        <p className="text-[#696969] md:text-base text-sm mb-4">
          Your OpenAI API key will be used as your configuration key. It’s essential to set this up before start creating an AI Agent.
        </p>
        <p className="text-[#696969] md:text-base text-sm mb-8">
          <span className="font-bold">Hint:</span> A payment method for your OpenAI account is recommended to increase rate limits, even if you plan on using their free credits.
        </p>
        <hr className="border-gray-200 mb-8" />

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-black mb-2">OpenAI API Key</label>
            <input
              type="password"
              value={config.apiKey}
              onChange={(e) => updateConfig({ apiKey: e.target.value })}
              placeholder="Paste your API key here..."
              className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition"
            />
            <p className="text-xs text-gray-400 mt-2">
              You can assign a Free key to get started with your first AI Agent (conditions apply).
            </p>
          </div>

          <div className="flex sm:flex-row flex-col gap-4 justify-center mt-10">
            <button className="w-full px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition text-sm md:text-base">
              Reset
            </button>
            <button className="w-full px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition text-sm md:text-base">
              Assign Free Key
            </button>
            <button
              onClick={onNext}
              disabled={!config.apiKey.trim()}
              className="w-full px-8 py-3 bg-gradient-to-r from-[#f55823] to-[#ff9f00] text-white rounded-full hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm md:text-base"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}