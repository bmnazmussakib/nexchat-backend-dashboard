'use client';
import React, { useState, useEffect, useRef } from 'react';
import { SendIcon } from './Icons';
import Link from 'next/link';
import { IoMdClose } from 'react-icons/io';

// --- TYPES ---
type Sender = 'user' | 'bot';

interface ChatMessage {
    id: number;
    text: string;
    sender: Sender;
}

// --- UI SUB-COMPONENTS ---

const BotAvatar: React.FC = () => (
    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F55823] to-[#FF9F00] flex-shrink-0"></div>
);

const UserAvatar: React.FC = () => (
    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold text-sm flex-shrink-0">
        U
    </div>
);

interface MessageProps {
    message: ChatMessage;
}

const Message: React.FC<MessageProps> = ({ message }) => {
    const isUser = message.sender === 'user';

    return (
        <div className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
            {isUser ? <UserAvatar /> : <BotAvatar />}
            <div
                className={`px-4 lg:py-3 py-2 lg:text-base md:text-sm text-xs lg:rounded-2xl rounded-xl max-w-sm md:max-w-md break-words ${isUser
                    ? 'bg-gray-200 text-gray-800 lg:rounded-br-none rounded-br-none'
                    : 'bg-[#F4F4F5] text-gray-800 shadow-sm lg:rounded-bl-none rounded-bl-none border border-gray-100'
                    }`}
            >
                {
                    !isUser && <h5 className='font-bold text-black text-base mb-3'>NexChat AI Agent</h5>
                }
                {message.text}
            </div>
        </div>
    );
};

interface QuickChatProps {
    suggestions: string[];
    onSuggestionClick: (suggestion: string) => void;
}

const QuickChat: React.FC<QuickChatProps> = ({ suggestions, onSuggestionClick }) => (
    <div className="px-4 pt-2 pb-4">
        {/* <p className="text-sm text-gray-500 mb-3 text-center">Or you can choose from the following options</p> */}
        <div className="flex flex-col items-end gap-2">
            {suggestions.map((suggestion, index) => (
                <button
                    key={index}
                    onClick={() => onSuggestionClick(suggestion)}
                    className="px-4 py-2 bg-white border border-gray-200 text-[#696969] text-end rounded-full text-xs hover:bg-gray-100 transition cursor-pointer"
                >
                    {suggestion}
                </button>
            ))}
        </div>
    </div>
);


// --- MAIN CHATBOX COMPONENT ---

const ChatBox: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        { id: 1, text: "Welcome to Nexchat! How can I assist you today?", sender: 'bot' },
    ]);
    const [input, setInput] = useState('');
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = () => {
        if (!input.trim()) return;

        const newUserMessage: ChatMessage = {
            id: messages.length + 1,
            text: input,
            sender: 'user',
        };

        // Simulate a bot response
        const botResponse: ChatMessage = {
            id: messages.length + 2,
            text: "This is a simulated response to test scrolling. This message is intentionally long to demonstrate how the chat container handles overflow. More and more text can be added here to see the effect.",
            sender: 'bot'
        }

        setMessages(prev => [...prev, newUserMessage, botResponse]);
        setInput('');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSendMessage();
    };

    const handleQuickSuggestion = (suggestion: string) => {
        const newUserMessage: ChatMessage = {
            id: messages.length + 1,
            text: suggestion,
            sender: 'user',
        };

        // Simulate a bot response
        const botResponse: ChatMessage = {
            id: messages.length + 2,
            text: `You asked about: "${suggestion}". Here is a simulated response.`,
            sender: 'bot'
        }

        setMessages(prev => [...prev, newUserMessage, botResponse]);
    };

    const quickChatSuggestions = [
        "What is JoinbizAI and how can it help my business?",
        "How do I create and manage a chatbot on JoinbizAI?",
        "What features does JoinbizAI offer?",
        "How secure is the JoinbizAI platform?",
        "How can I contact JoinbizAI for support?",
    ];

    const hasUserMessages = messages.some(msg => msg.sender === 'user');

    return (
        <div className="flex flex-col h-full">
            {/* Chat Body */}
            <div ref={scrollRef} className="flex-grow lg:p-4 space-y-4 overflow-y-auto custom-scrollbar">
                {messages.map((msg) => (
                    <Message key={msg.id} message={msg} />
                ))}
                {!hasUserMessages &&
                    <QuickChat
                        suggestions={quickChatSuggestions}
                        onSuggestionClick={handleQuickSuggestion}
                    />
                }
            </div>

            {/* Chat Input */}
            <div className="p-1 bg-[#F4F4F5] rounded-2xl">
                <div className='my-5 text-xs flex items-center justify-between mx-3'>
                    <p className='text-[#5f5f5f]'>By chatting, you agree to our <Link href={'#'} className='underline'>privacy policy</Link>.</p>
                    <button className="btn bg-transparent text-black border-0 p-0 shadow-none h-0"><IoMdClose /></button>
                </div>
                <form onSubmit={handleSubmit} className="flex items-center space-x-3 bg-white rounded-[14px]">
                    <div className='flex items-center w-full lg:py-5 py-3 pl-6 pr-4  focus:outline-none focus:ring-2 focus:ring-[#F55823] transition duration-200'>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your message..."
                            className="basis-[90%] outline-0 text-[#5f5f5f]"
                            autoFocus
                        />
                        <button
                            type="submit"
                            disabled={!input.trim()}
                            aria-label="Send message"
                            className='basis-[10%]'
                        >
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_0_40" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                    <rect width="24" height="24" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_0_40)">
                                    <path d="M3 20V14L11 12L3 10V4L22 12L3 20Z" fill="url(#paint0_linear_0_40)" />
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_0_40" x1="3" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#F55823" />
                                        <stop offset="1" stop-color="#FF9F00" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChatBox;