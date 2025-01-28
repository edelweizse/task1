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
    <div className="max-w-4xl mx-auto p-4 text-green-600">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold text-green-600">
          <TypingText text="Linux Klub Cicada3301" speed={75}/>
        </h1>
      </header>
      <section className="rounded-2xl shadow-lg mb-8 border border-green-600">
        <div className="flex flex-col items-center justify-center text-green-600 p-5">
          <h2 className="text-2xl font-semibold text-center">
            <TypingText text="Look beyond the visible"/>
          </h2>
          <div className="w-full max-w-[500px] mt-4">
          <a 
            href="/Untitled.jpg" 
            download="Untitled.jpg"
            className="block w-full max-w-[500px] cursor-pointer"
          >
            <div 
              className="quiz_image w-full aspect-[5/2] rounded-lg border border-green-600 bg-green-700 hover:bg-green-800 transition-colors duration-300"
              role="img"
              aria-label="Downloadable quiz image"
            />
          </a>
          </div>        
          </div>
      </section>
      <section>
        <p className="text-green-400 mb-4">
          Rules:
        </p>
        <p className="text-green-400">
          Brought to you by <span className="font-bold">Linux Klub</span>, a community for tech enthusiasts. Dive in and see how many you can get right!
        </p>
    </section>

    </div>
  );
}
