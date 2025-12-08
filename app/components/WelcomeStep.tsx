'use client';
import React, { useState } from 'react';

interface Props {
    onNext: (name: string) => void;
}

export function WelcomeStep({ onNext }: Props) {
    const [name, setName] = useState('');

    return (
        <div className="w-full">
            <div className="bg-white rounded-3xl md:p-16 p-10">
                <h2 className="md:text-3xl text-2xl font-grandis font-bold bg-linear-to-r from-[#f55823] to-[#ff9f00] bg-clip-text text-transparent mb-6">
                    Welcome! Let's get your account setup
                </h2>

                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-black mb-2">Your name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="enter your name here"
                            className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition"
                        />
                    </div>

                    <div className="flex sm:flex-row flex-col gap-4 justify-center mt-10">
                        <button
                            onClick={() => onNext(name)}
                            disabled={!name.trim()}
                            className="w-full px-8 py-3 bg-linear-to-r from-[#f55823] to-[#ff9f00] text-white rounded-full hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm md:text-base"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
