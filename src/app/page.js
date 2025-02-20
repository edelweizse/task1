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
    <div className="max-w-4xl mx-auto p-4 text-white">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold text-white">
          <TypingText text="[Linux Klub]" speed={75}/>
        </h1>
      </header>
      <section className="shadow-lg mb-8 border-2 border-white ">
        <div className="flex flex-col items-center justify-center text-white p-5">
          <h2 className="text-2xl font-semibold text-center">
            <TypingText text="Task 1: Look beyond the visible" speed={50}/>
          </h2>
          <div className="w-full max-w-[500px] mt-4">
          <a 
            href="/task.jpg" 
            download="task.jpg"
            className="block w-full max-w-[500px] cursor-pointer"
          >
            <div 
              className="quiz_image w-full aspect-[5/2] bg-white-700 hover:bg-white-800 transition-colors duration-300"
              role="img"
              aria-label="Downloadable quiz image"
            />
          </a>
          </div>        
          </div>
      </section>
      <section>
        <p className="text-white mb-2">
          Rules:
        </p>
        <ul>
          <li>
            <p>
            1. Compete solo or in pairs.
              6 prizes total.
              Pair wins = 2 prizes (1 per person).
              Individual wins = 1 prize.
              Prizes awarded until all 6 are distributed.
            </p>
          </li>
          <li>2. QRs: do not tear, do not move from place to place and do not take them with you. You may only take pictures, but no more.</li>
          <li>3. Be courteous to each other and don't interfere with others learning/going through the same game.</li>
        </ul>
    </section>
    <section>
      <p className="hidden">
        A9:b6/67gIOB
      </p>
    </section>
    </div>
  );
}
