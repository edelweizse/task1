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
          <h2 className="text-2xl font-semibold">Color-Coded Answers</h2>
          <p className="text-center mt-2">Explore hints embedded in the image!</p>
          <a href=" https://placehold.in/500x200@1x.png/dark " download className="quiz_image mt-4 bg-green-700 hover:bg-green-700 text-black px-4 py-2 rounded-lg border border-green-600 w-[500px] h-[200px]">

          </a>
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
