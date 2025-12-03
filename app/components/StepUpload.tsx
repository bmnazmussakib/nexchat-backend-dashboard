'use client';
import { AgentConfig } from '@/utils/types';
import React from 'react';
import { LuUpload, LuChevronLeft } from 'react-icons/lu';

interface Props {
  config: AgentConfig;
  updateConfig: (updates: Partial<AgentConfig>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function StepUpload({ config, updateConfig, onNext, onBack }: Props) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      updateConfig({ file, fileName: file.name });
    }
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-3xl md:p-16 p-10">
        <h2 className="md:text-3xl text-2xl font-grandis font-bold bg-gradient-to-r from-[#f55823] to-[#ff9f00] bg-clip-text text-transparent mb-6">
          Upload File
        </h2>
        <p className="text-[#696969] md:text-base text-sm mb-8">
          Upload a file to be used for training.
        </p>
        <hr className="border-gray-200 mb-8" />

        <div>
          <label className="block text-sm font-bold text-gray-800 mb-2">File</label>
          <div className="flex w-full items-center border border-gray-300 rounded-lg overflow-hidden h-12 p-1">
            <label
              htmlFor="file-upload"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 h-full font-bold text-sm transition-colors cursor-pointer flex items-center rounded"
            >
              Choose file
            </label>
            <span className="px-4 text-gray-500 truncate flex-1">
              {config.fileName || 'No file chosen'}
            </span>
            <input
              type="file"
              id="file-upload"
              onChange={handleFileChange}
              className="hidden"
              accept=".txt,.md,.json,.csv,.pdf"
            />
          </div>
          <p className="text-xs text-gray-400 mt-2">The file to be used for training.</p>

          {/* {config.fileName && (
            <div className="mt-8 ">
              <button
                onClick={onNext}
                className="lg:w-1/3 sm:w-1/2 w-full px-6 py-3 md:text-base text-sm bg-gradient-to-r from-[#f55823] to-[#ff9f00] text-white rounded-full hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                Upload
              </button>
            </div>
          )} */}
          <div className="flex sm:flex-row  gap-4 justify-between mt-10 ">
            <button onClick={onBack} className="w-full sm:max-w-[350px] px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition text-sm md:text-base flex items-center justify-center gap-2">
              {/* <LuChevronLeft className="w-5 h-5" /> */}
              Back
            </button>
            <button
              onClick={onNext}
              className="w-full sm:max-w-[350px] px-6 py-3 md:text-base text-sm bg-gradient-to-r from-[#f55823] to-[#ff9f00] text-white rounded-full hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {/* <LuUpload className="w-5 h-5" /> */}
              Upload
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}