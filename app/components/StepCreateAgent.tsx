'use client';
import { AgentConfig } from '@/utils/types';
import React from 'react';
import { LuChevronLeft } from 'react-icons/lu';

interface Props {
  config: AgentConfig;
  updateConfig: (updates: Partial<AgentConfig>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function StepCreateAgent({ config, updateConfig, onNext, onBack }: Props) {
  return (
    <div className="max-full">
      <div className="bg-white rounded-3xl md:p-16 p-10">
        <h2 className="md:text-3xl text-2xl font-grandis font-bold bg-gradient-to-r from-[#f55823] to-[#ff9f00] bg-clip-text text-transparent mb-8">
          Create new AI Agent
        </h2>

        <div className="space-y-8">
          <div>
            <label className="block text-sm font-bold text-black mb-2">Display Name</label>
            <input
              type="text"
              value={config.displayName}
              onChange={(e) => updateConfig({ displayName: e.target.value })}
              placeholder="Enter your display name here"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-black mb-2">Welcome message</label>
            <input
              type="text"
              value={config.welcomeMessage}
              onChange={(e) => updateConfig({ welcomeMessage: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-black mb-2">Default prompt</label>
            <textarea
              rows={5}
              value={config.systemInstruction}
              onChange={(e) => updateConfig({ systemInstruction: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-sm resize-none"
            />
            <p className="text-xs text-gray-400 mt-2">
              The prompt that will be sent to OpenAI for every message.
            </p>
          </div>

          <div>
            <label className="block text-sm font-bold text-black mb-2">Choose your file for retrieval</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-xl h-12">
              <option>{config.fileName || 'No file uploaded'}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-black mb-2">OpenAI Model</label>
            <select
              value={config.model}
              onChange={(e) => updateConfig({ model: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl h-12"
            >
              <option value="gpt-4o">gpt-4o</option>
              <option value="gpt-4-turbo">gpt-4-turbo</option>
              <option value="gpt-3.5-turbo">gpt-3.5-turbo</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-black mb-2">OpenAI API Key</label>
            <input
              type="password"
              value={config.apiKey}
              readOnly
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-black mb-2">Chatbot Error Message</label>
            <textarea
              rows={4}
              value={config.errorMessage}
              onChange={(e) => updateConfig({ errorMessage: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-sm resize-none"
            />
            <p className="text-xs text-gray-400 mt-2">
              The message displayed when the chatbot encounters an error.
            </p>
          </div>

          <div className="flex sm:flex-row  gap-4 justify-between mt-10 ">
            <button onClick={onBack} className="w-full sm:max-w-[350px] px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition text-sm md:text-base flex items-center justify-center gap-2">
              {/* <LuChevronLeft className="w-5 h-5" /> */}
              Back
            </button>
            <button
              onClick={onNext}
              disabled={!config.displayName.trim()}
              className="w-full sm:max-w-[350px] px-6 py-3 md:text-base text-sm bg-gradient-to-r from-[#f55823] to-[#ff9f00] text-white rounded-full hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}