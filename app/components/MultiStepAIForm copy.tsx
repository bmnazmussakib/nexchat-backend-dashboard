'use client';

import React, { useState } from 'react';
import { LuCheck, LuChevronLeft, LuChevronRight, LuUpload } from 'react-icons/lu';
// import { LuChevronRight , LuChevronLeft , Upload, Check, Copy } from 'lucide-react';

type Step = 1 | 2 | 3 | 4 | 5;

export default function MultiStepAIForm() {
    const [step, setStep] = useState<Step>(1);

    // Form state
    const [apiKey, setApiKey] = useState('');
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [agentName, setAgentName] = useState('');
    const [welcomeMessage, setWelcomeMessage] = useState('Hello, how can I help you?');
    const [defaultPrompt, setDefaultPrompt] = useState('You are an assistant who helps users that visit our website, keep it short, always refer to the documentation provided and never ask for more information.');
    const [errorMessage, setErrorMessage] = useState('Oops! An error has occurred. If the issue persists, feel free to reach out to our support team for assistance. We"re here to help!"');
    const [selectedFileId, setSelectedFileId] = useState<string>('');
    const [openAiModel, setOpenAiModel] = useState('gpt-4o');

    const nextStep = () => setStep(prev => prev < 5 ? (prev + 1) as Step : prev);
    const prevStep = () => setStep(prev => prev > 1 ? (prev - 1) as Step : prev);

    const steps = [
        { number: 1, label: 'Configuration', completed: step > 1 },
        { number: 2, label: 'Upload file', completed: step > 2 },
        { number: 3, label: 'Create your AI Agent', completed: step > 3 },
        { number: 4, label: 'Playground', completed: step > 4 },
    ];

    return (
        <>
            <div className="min-h-screen ">
                <div className="">
                    {/* Progress Steps */}
                    <div className="flex items-center justify-center mb-7 font-grandis ">
                        {steps.map((s, i) => (
                            <React.Fragment key={s.number}>
                                <div className="flex items-center">
                                    <div
                                        className={`lg:w-11 lg:h-11 w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all lg:text-lg text-xs 
                                            ${s.completed ? 'bg-gradient-to-r from-[#f55823] to-[#ff9f00] text-white'
                                                : step === s.number
                                                    ? 'bg-gradient-to-r from-[#f55823] to-[#ff9f00] text-white'
                                                    : 'border-1 border-gray-400 text-gray-500'
                                            }`}
                                    >
                                        {/* {s.completed ? <LuCheck className="w-6 h-6" /> : s.number} */}
                                        {s.number}
                                    </div>
                                    <div className={`ml-3 lg:text-lg text-xs font-bold 
                                        ${s.completed ? ' text-black'
                                            : step === s.number
                                                ? ' text-black'
                                                : ' text-gray-400'
                                        }
                                        `}>
                                        {s.label}
                                    </div>
                                </div>
                                {i < steps.length - 1 && (
                                    <LuChevronRight className="w-6 h-6 lg:mx-4 text-gray-400" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Step Content */}
                    <div className="">
                        {/* Step 1: Configuration (API Key) */}
                        {step === 1 && (
                            <div className='bg-white rounded-3xl md:p-16 p-10'>
                                <h2 className="md:text-3xl text-2xl font-grandis font-bold bg-gradient-to-r from-[#f55823] to-[#ff9f00] bg-clip-text text-transparent mb-6">
                                    Let's Configure (B.Y.O.) API Key
                                </h2>
                                <p className="text-[#696969] md:text-base text-sm mb-8">
                                    Your OpenAI API key will used as your configuration key. It’s essential to set this up before start creating an AI Agent.
                                </p>
                                <p className="text-[#696969] md:text-base text-sm mb-8">
                                    <span className='font-bold'>Hint:</span> A payment method for your OpenAI account is recommended to increase rate limits, even if you plan on using their free credits.
                                </p>
                                <hr className="border-gray-200 mb-8" />
                                <div className="space-y-6 ">
                                    <div>
                                        <label className="block text-sm font-bold text-black mb-2">
                                            OpenAI API Key
                                        </label>
                                        <input
                                            type="password"
                                            value={apiKey}
                                            onChange={(e) => setApiKey(e.target.value)}
                                            placeholder="Paste your API key here..."
                                            className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        />
                                        <p className="text-xs text-gray-400 mt-2">
                                            You can assign a Free key to get started with your first AI Agent (conditions apply).
                                        </p>
                                    </div>

                                    <div className="flex sm:flex-row flex-col gap-4 justify-center">
                                        <button className="w-full px-6 py-3 md:text-base text-sm bg-gray-800 text-white rounded-full hover:bg-gray-900 transition">
                                            Reset
                                        </button>
                                        <button className="w-full px-6 py-3 md:text-base text-sm bg-gray-800 text-white rounded-full hover:bg-gray-900 transition">
                                            Assign Free Key
                                        </button>
                                        <button
                                            onClick={nextStep}
                                            disabled={!apiKey}
                                            className="w-full px-8 py-3 md:text-base text-sm bg-gradient-to-r from-[#f55823] to-[#ff9f00] text-white rounded-full hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                                        >
                                            Save
                                            {/* <LuChevronRight className="w-5 h-5" /> */}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Upload File */}
                        {step === 2 && (
                            <div className='bg-white rounded-3xl md:p-16 p-10'>
                                <h2 className="md:text-3xl text-2xl font-grandis font-bold bg-gradient-to-r from-[#f55823] to-[#ff9f00] bg-clip-text text-transparent mb-6">Upload File</h2>
                                <p className="text-gray-600 mb-8">
                                    Upload a file to be used for training.
                                </p>
                                <hr className="border-gray-200 mb-8" />
                                <div className="mb-8">
                                    <label className="block text-sm font-bold text-gray-800 mb-2">File</label>

                                    <div className="flex w-full items-center border border-gray-300 rounded-lg overflow-hidden h-12 p-1">
                                        <label
                                            htmlFor="file-upload"
                                            className="bg-gray-100 hover:bg-gray-200 text-gray-500 px-6 h-full font-bold text-base text-sm transition-colors cursor-pointer flex items-center rounded-sm"
                                        >
                                            Choose file
                                        </label>

                                        <span className="px-4 text-gray-400 truncate">
                                            {uploadedFile ? uploadedFile.name : 'No file chosen'}
                                        </span>

                                        <input
                                            type="file"
                                            id="file-upload"
                                            onChange={(e) => e.target.files?.[0] && setUploadedFile(e.target.files[0])}
                                            className="hidden"
                                            accept=".txt,.md,.json,.csv"
                                        />
                                    </div>

                                    <p className="text-xs text-gray-400 mt-2">
                                        The file to be used for training.
                                    </p>

                                    {/* Upload button (only visible when a file is selected) */}
                                    {uploadedFile && (
                                        <button
                                            onClick={nextStep}
                                            className="mt-4 lg:w-1/3 sm:w-1/2 w-full px-6 py-3 md:text-base text-sm bg-gradient-to-r from-[#f55823] to-[#ff9f00] text-white rounded-full hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {/* <LuUpload className="w-5 h-5" /> */}
                                            Upload
                                        </button>
                                    )}


                                </div>



                                <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hidden">
                                    <input
                                        type="file"
                                        onChange={(e) => e.target.files?.[0] && setUploadedFile(e.target.files[0])}
                                        className="hidden"
                                        id="file-upload"
                                    />
                                    <label
                                        htmlFor="file-upload"
                                        className="cursor-pointer block"
                                    >
                                        <div className="text-gray-500 mb-4">
                                            {uploadedFile ? uploadedFile.name : 'No file chosen'}
                                        </div>
                                        <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                                            Choose file
                                        </button>
                                    </label>

                                    {uploadedFile && (
                                        <button
                                            onClick={nextStep}
                                            className="mt-8 px-12 py-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition flex items-center gap-2 mx-auto"
                                        >
                                            <LuUpload className="w-5 h-5" />
                                            Upload
                                        </button>
                                    )}
                                </div>

                                <div className="mt-8 flex justify-between">
                                    <button onClick={prevStep} className="text-gray-600 hover:text-gray-800 flex items-center gap-2">
                                        <LuChevronLeft /> Back
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Create AI Agent */}
                        {step === 3 && (
                            <div className='bg-white rounded-3xl md:p-16 p-10'>
                                <h2 className="md:text-3xl text-2xl font-grandis font-bold bg-gradient-to-r from-[#f55823] to-[#ff9f00] bg-clip-text text-transparent mb-6">Create new AI Agent</h2>

                                <div className="space-y-8">
                                    <div>
                                        <label className="block text-sm font-bold text-black mb-2">Display Name</label>
                                        <input
                                            type="text"
                                            value={agentName}
                                            onChange={(e) => setAgentName(e.target.value)}
                                            placeholder="Enter your display name here"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-black mb-2">Welcome message</label>
                                        <input
                                            type="text"
                                            value={welcomeMessage}
                                            onChange={(e) => setWelcomeMessage(e.target.value)}
                                            placeholder="Enter welcome message here"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-black mb-2">Default prompt</label>
                                        <textarea
                                            value={defaultPrompt}
                                            onChange={(e) => setDefaultPrompt(e.target.value)}
                                            // rows={4}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 text-sm"
                                        />
                                        <p className="text-xs text-gray-400 mt-2">
                                            The prompt that will be sent to OpenAl for every messages, here's and example: "You are an assistant you help users that visit our website, keep it short, always refer to the documentation provided and never ask for more information."
                                        </p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-black mb-2">Choose your file for retrieval</label>
                                        <select defaultValue="Select file" className="select w-full px-4 h-12 border border-gray-300 rounded-xl">
                                            <option>Select file</option>
                                            {uploadedFile && <option>{uploadedFile.name}</option>}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-black mb-2">OpenAI Model</label>
                                        <select
                                            value={openAiModel}
                                            onChange={(e) => setOpenAiModel(e.target.value)}
                                            className="select w-full px-4 h-12 border border-gray-300 rounded-xl"
                                        >
                                            <option>gpt-4o</option>
                                            <option>gpt-4-turbo</option>
                                            <option>gpt-3.5-turbo</option>
                                        </select>
                                    </div>



                                    <div>
                                        <label className="block text-sm font-bold text-black mb-2">
                                            OpenAI API Key
                                        </label>
                                        <input
                                            type="password"
                                            value={apiKey}
                                            onChange={(e) => setApiKey(e.target.value)}
                                            placeholder="Paste your API key here..."
                                            className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        />
                                        <p className="text-xs text-gray-400 mt-2">
                                            You can assign a Free key to get started with your first AI Agent (conditions apply).
                                        </p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-black mb-2">Chatbot Error Message</label>
                                        <textarea
                                            value={errorMessage}
                                            onChange={(e) => setErrorMessage(e.target.value)}
                                            // rows={4}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 text-sm"
                                        />
                                        <p className="text-xs text-gray-400 mt-2">
                                            The message that will be displayed when the chatbot encounters an error and can't reply to a user.
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <button onClick={prevStep} className="text-gray-600 hover:text-gray-800 flex items-center gap-2">
                                            <LuChevronLeft /> Back
                                        </button>
                                        <button
                                            onClick={nextStep}
                                            disabled={!agentName}
                                            className="mt-4 lg:w-1/3 sm:w-1/2 w-full px-6 py-3 md:text-base text-sm bg-gradient-to-r from-[#f55823] to-[#ff9f00] text-white rounded-full hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            Create
                                        </button>
                                    </div>

                                </div>
                            </div>
                        )}

                        {/* Step 4: Success + Playground */}
                        {step === 4 && (
                            <>
                                <div className='bg-white rounded-3xl md:p-16 p-10'>
                                    <div className="">
                                        <h2 className="md:text-3xl text-2xl font-grandis font-bold bg-gradient-to-r from-[#f55823] to-[#ff9f00] bg-clip-text text-transparent mb-6">Congratulations</h2>
                                        <p className="text-[#696969] md:text-base text-sm mb-8 max-w-2xl ">
                                            Now that your first chatbot is created, your now chat with him.
                                            There is still one more step if you want to embed the chatbot in your website like we did for this website you are currently in.
                                        </p>

                                        <button
                                            className="mt-4 lg:w-1/3 sm:w-1/2 w-full px-6 py-3 md:text-base text-sm bg-gradient-to-r from-[#f55823] to-[#ff9f00] text-white rounded-full hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            See how to embed chatbot on your website
                                        </button>

                                    </div>
                                </div>
                                {/* Mini Chat Preview */}
                                <div className="max-w-2xl mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                                    <div className="bg-gray-800 px-6 py-4 flex justify-between items-center">
                                        <h3 className="text-white font-semibold">NexChat</h3>
                                        <button className="text-gray-400">⋯</button>
                                    </div>

                                    <div className="bg-white p-6 min-h-96">
                                        <div className="text-left">
                                            <div className="inline-block bg-gray-100 rounded-lg px-4 py-3 mb-4">
                                                <p className="font-medium text-orange-600">NexChat AI Agent</p>
                                                <p>Hello, I am NexChat AI. How can I help you?</p>
                                            </div>
                                        </div>

                                        <div className="mt-8 text-right space-y-3">
                                            <div className="inline-block bg-orange-100 rounded-lg px-4 py-3">
                                                What is JoinBeta?
                                            </div>
                                            <div className="inline-block bg-orange-100 rounded-lg px-4 py-3">
                                                How do I create and manage a chatbot on JoinBeta?
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-100 px-6 py-4 flex gap-3">
                                        <input
                                            type="text"
                                            placeholder="Type a message"
                                            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        />
                                        <button className="bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition">
                                            <LuChevronRight className="w-6 h-6" />
                                        </button>
                                    </div>
                                    <div className="text-center text-xs text-gray-500 py-2">
                                        Powered by NexChat
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}