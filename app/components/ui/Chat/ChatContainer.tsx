'use client'
import React, { useState } from 'react';
import ChatWidget from './ChatWidgets';
import { ChatBubbleIcon, CloseIcon } from './Icons';
import ChatBox from './ChatBox';

const ChatToggleButton: React.FC<{ isOpen: boolean; toggle: () => void }> = ({ isOpen, toggle }) => (
  <button
    onClick={toggle}
    className="fixed bottom-5 right-5 w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200 z-50"
    aria-label={isOpen ? 'Close chat' : 'Open chat'}
  >
    {isOpen ? <CloseIcon className="w-8 h-8" /> : <ChatBubbleIcon className="w-8 h-8" />}
  </button>
);

const ChatContainer: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(prev => !prev);
  };

  return (
    <>
      <ChatToggleButton isOpen={isChatOpen} toggle={toggleChat} />
      {isChatOpen && <ChatWidget />}
      {/* {isChatOpen && <ChatBox />} */}
    </>
  );
};

export default ChatContainer;