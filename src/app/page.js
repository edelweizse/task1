"use client"
import React, { useState, useEffect } from 'react';

const TypingText = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        if (prevIndex < text.length) {
          setDisplayedText(text.slice(0, prevIndex + 1));
          return prevIndex + 1;
        }
        clearInterval(interval);
        return prevIndex;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-4 text-gr">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold text-gr">
          <TypingText text="[Linux Klub]" speed={75}/>
        </h1>
      </header>
      <section className="shadow-lg mb-8 border-2 border-gr ">
        <div className="flex flex-col items-center justify-center text-gr p-5">
          <h2 className="text-2xl font-semibold text-center">
            <TypingText text="Task 1: Look beyond the visible" speed={50}/>
          </h2>
          <div className="w-full max-w-[500px] mt-4">
          <a 
            href="/Untitled.jpg" 
            download="Untitled.jpg"
            className="block w-full max-w-[500px] cursor-pointer"
          >
            <div 
              className="quiz_image w-full aspect-[5/2] border border-green-600 bg-green-700 hover:bg-green-800 transition-colors duration-300"
              role="img"
              aria-label="Downloadable quiz image"
            />
          </a>
          </div>        
          </div>
      </section>
      <section>
        <p className="text-gr mb-2">
          Rules:
        </p>
        <ul>
          <li>Rule 1:</li>
          <li>Rule 2:</li>
          <li>Rule 3:</li>
        </ul>
        <p className="text-gr mt-4">
          Brought to you by <span className="font-bold">Linux Klub</span>, a community for tech enthusiasts. Dive in and see how many you can get right!
        </p>
    </section>
    <p className="hidden">
      3301
    </p>
    </div>
  );
}
