'use client'
import React, { useState } from 'react';
import { DotsIcon, TabChatIcon, HelpdeskIcon, HistoryIcon, QuestionIcon, SendIcon, DismissIcon } from './Icons';
import ChatBox from './ChatBox';
import { FaQuestion } from 'react-icons/fa';
import { AiOutlineQuestion } from 'react-icons/ai';
import { RxQuestionMark } from 'react-icons/rx';
import { LuHistory } from 'react-icons/lu';

type Tab = 'Chat' | 'Helpdesk' | 'History';

const ChatHeader: React.FC = () => (
    <div className="bg-[#000421] text-white p-7 rounded-t-2xl flex justify-between items-center">
        <img src="/assets/images/logo-white-x.png" alt="" />
        <button className="text-gray-400 hover:text-white dropdown dropdown-bottom dropdown-end">
            <DotsIcon className="w-6 h-6" />
            <ul tabIndex={0} className="dropdown-content menu bg-white text-black rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a className='bg-white hover:bg-gradient-to-br from-orange-500 to-yellow-400 hover:text-white'>Item 1</a></li>
                <li><a className='bg-white hover:bg-gradient-to-br from-orange-500 to-yellow-400 hover:text-white'>Item 1</a></li>
                <li><a className='bg-white hover:bg-gradient-to-br from-orange-500 to-yellow-400 hover:text-white'>Item 1</a></li>
            </ul>
        </button>
    </div>
);

const ChatTabs: React.FC<{ activeTab: Tab; setActiveTab: (tab: Tab) => void }> = ({ activeTab, setActiveTab }) => {
    const tabs: { name: Tab; icon: React.ReactNode }[] = [
        { name: 'Chat', icon: <TabChatIcon className="w-5 h-5 mr-2" /> },
        { name: 'Helpdesk', icon: <HelpdeskIcon className="w-5 h-5 mr-2" /> },
        { name: 'History', icon: <HistoryIcon className="w-5 h-5 mr-2" /> },
    ];

    return (
        <div className="p-1.5 bg-gray-100 rounded-2xl">
            <div className="tabs tabs-boxed bg-transparent justify-center">
                {tabs.map(tab => (
                    <a
                        key={tab.name}
                        className={`tab flex-1  transition-all duration-300 md:text-base sm:text-sm text-xs ${activeTab === tab.name ? 'bg-white rounded-xl text-gray-800! shadow-md' : 'text-gray-800!'}`}
                        onClick={() => setActiveTab(tab.name)}
                    >
                        {tab.icon} {tab.name}
                    </a>
                ))}
            </div>
        </div>
    );
};


const HelpdeskView: React.FC = () => {
    const faqs = [
        "What is NexChat and how can it help my business?",
        "How do I create and manage a chatbot on NexChat?",
        "What features does NexChat offer?",
        "How secure is the NexChat platform?",
        "How can I contact NexChat for support?",
    ];
    const dummyAnswer = "NexChat is a platform that helps you build and manage chatbots for your business. It can help you automate customer support, generate leads, and engage with your customers 24/7.";

    return (
        <div className="space-y-3">
            {faqs.map((faq, index) => (
                <div key={index} className="collapse collapse-arrow bg-white rounded-xl shadow-sm">
                    <input type="radio" name="helpdesk-accordion" defaultChecked={index === 0} />
                    <div className="collapse-title flex items-center text-[#696969] text-xs md:text-sm lg:text-base font-normal">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#F55823] to-[#FF9F00] flex-shrink-0 flex items-center justify-center mr-3 text-white text-sm">
                            <RxQuestionMark />
                        </div>
                        {faq}
                    </div>
                    <div className="collapse-content">
                        <p className="text-gray-500 text-sm pl-8">{dummyAnswer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

const HistoryView: React.FC<{ hasHistory: boolean, onStartChat: () => void }> = ({ hasHistory, onStartChat }) => {
    const chatHistory = [
        "Chat title 1", "Chat title 2", "Chat title 3", "Chat title 4", "Chat title 5"
    ];

    if (!hasHistory) {
        return (
            <div className="bg-[#F4F4F5] rounded-xl p-14 shadow text-center flex flex-col items-center justify-center min-h-[300px]">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 font-grandis">No chat history</h3>
                <p className="text-gray-500 text-sm mb-4">Start chatting to create a chat history.</p>
                <button
                    onClick={onStartChat}
                    className="w-full px-8 py-3 inline-flex items-center justify-center bg-gradient-to-br from-orange-500 to-yellow-400 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-200">
                    Start a chat
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-3">
            {chatHistory.map((title, index) => (
                <div key={index} className="bg-white rounded-xl px-5 py-3 shadow-sm flex items-center cursor-pointer hover:bg-gray-50">
                    <div className="w-5 h-5 text-sm rounded-full text-black flex-shrink-0 flex items-center justify-center mr-3">
                        <LuHistory />
                    </div>
                    <span className="text-[#696969] text-xs md:text-sm lg:text-base font-normal">{title}</span>
                </div>
            ))}
        </div>
    );
};

const ChatView: React.FC = () => {
    return (
        <div className="h-full">
            <ChatBox />
        </div>
    );
};


const ChatWidget: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('Chat');
    const [hasHistory] = useState(false); // To demonstrate both states of history tab

    const renderContent = () => {
        switch (activeTab) {
            case 'Chat':
                return <ChatView />;
            case 'Helpdesk':
                return <HelpdeskView />;
            case 'History':
                return <HistoryView hasHistory={hasHistory} onStartChat={() => setActiveTab('Chat')} />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className="w-full sm:h-[80vh] h-[85vh] bg-gray-50 rounded-2xl shadow-2xl flex flex-col font-sans overflow-hidden transition-all duration-300">
                <ChatHeader />
                <div className="p-4 flex flex-col flex-grow bg-white min-h-0">
                    <h2 className="md:text-3xl text-xl font-bold text-center text-[#1F1F1F] font-grandis mb-4">Chat With Us</h2>
                    <ChatTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                    <div className="mt-6 flex-grow overflow-y-auto pr-2">
                        {renderContent()}
                    </div>
                </div>
                <div className="text-center text-gray-400 text-xs py-3 bg-white">
                    Powered by <span className="font-semibold text-gray-500">NexChat</span>
                </div>
            </div>

        </>
    );
};



export default ChatWidget;