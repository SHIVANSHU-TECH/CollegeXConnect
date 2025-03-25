"use client";

import React, { useState, useEffect } from 'react';
import { X, Book, Rocket, MailIcon } from 'lucide-react';
import { set } from 'mongoose';

const WelcomeMessage = ({ expirationHours = 24 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [animationClass, setAnimationClass] = useState('opacity-0 scale-95');
  const [email, setEmail] = useState('');
  const expirationTime = expirationHours * 60 * 60 * 1000;

  useEffect(() => {
    const isModalClosed = localStorage.getItem('ModalClosed');
    const currentTime=Date.now();
    if (!isModalClosed) {
      setIsOpen(true);
    }else{
      const timeDifference = currentTime - parseInt(isModalClosed, 10);
      if (timeDifference > expirationTime) {
        setIsOpen(true);
      }
    }
    document.body.classList.add('overflow-hidden');

    setTimeout(() => setAnimationClass('opacity-100 scale-100'), 100);

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const closeMessage = () => {
    setIsOpen(false);
    localStorage.setItem('ModalClosed',  Date.now().toString());
    setAnimationClass('opacity-0 scale-95');
    setTimeout(() => {
      setIsVisible(false);
      document.body.classList.remove('overflow-hidden');
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    closeMessage();
  };

  if (!isVisible) return null;

  return (

    isOpen &&(<div className="fixed inset-0 bg-slate-900 bg-opacity-95 flex items-start md:items-center justify-center z-50 p-4">
      <div className={`bg-slate-800 text-white rounded-lg shadow-2xl max-w-4xl w-full h-full md:h-auto transition-all duration-300 ease-out transform ${animationClass} overflow-auto`}>
        <div className="relative p-6 md:p-8">
          <button
            onClick={closeMessage}
            className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          <h1 className="text-2xl md:text-4xl font-bold mb-2 text-center bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            Welcome to College X Connect
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-gray-300">
            Learning and Earning Platform for College Students
          </h2>

          <p className="text-base md:text-lg mb-6 text-center text-gray-300">
            <span className="font-bold">College X Connect</span> is your one-stop platform for <span className="font-bold">academic resources</span>, <span className="font-bold">skill-building tools</span>, and the <span className="font-bold">latest opportunity updates</span>. Whether youre looking for study materials or skill courses with clear roadmaps, we`&apos;`ve got you covered.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
            <FeatureSection
              icon={<Book className="text-green-400" size={32} />}
              title="What You Get Now:"
              items={[
                "Academic materials for B.Tech and BCA",
                "Latest opportunity updates relevant to your career"
              ]}
            />
            <FeatureSection
              icon={<Rocket className="text-blue-400" size={32} />}
              title="What's Coming:"
              items={[
                "Skill-building courses",
                "Detailed roadmaps to guide your career path",
                "And much more in future updates!"
              ]}
            />
          </div>

          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">
              Stay Informed – Subscribe Now for Updates:
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-700 text-white px-4 py-2 rounded-md md:rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-400 w-full md:w-64"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-md md:rounded-r-lg w-full md:w-auto transition-all duration-300 ease-in-out"
              >
                <MailIcon size={24} />
              </button>
            </form>
          </div>

          <div className="text-center">
            <button
              onClick={closeMessage}
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Start Exploring
            </button>
          </div>
        </div>
      </div>
    </div>)
  );
};

const FeatureSection = ({ icon, title, items }) => (
  <div className="bg-slate-700 p-4 md:p-6 rounded-lg">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-lg md:text-xl font-semibold ml-2">{title}</h3>
    </div>
    <ul className="list-disc list-inside text-gray-300 space-y-1">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default WelcomeMessage;
