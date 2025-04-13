"use client"

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  // Import events data
  const events = require('../../data/events.json').events;
  
  // Find event to show in banner
  const bannerEvent = events.find((event: { type: string; showInBanner: boolean }) => event.type === 'upcoming' && event.showInBanner);

  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-r from-[#FFF5F1] to-[#FFEFEF] relative overflow-hidden">
      {bannerEvent && (
        <div className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-2 px-6 relative overflow-hidden animate-fadeIn">
          <div className="absolute inset-0 opacity-10">
            <img src="/flutter-pattern.svg" className="w-full h-full object-cover" alt="Flutter pattern" />
          </div>
          <div className="container mx-auto flex items-center justify-between gap-4 relative z-10">
            <div className="flex items-center space-x-4">
              <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                TOMORROW
              </span>
              <div className="flex items-center space-x-3">
                <h3 className="font-bold text-lg text-white">{bannerEvent.title}</h3>
                <div className="flex items-center space-x-2 text-blue-100">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{bannerEvent.time}</span>
                </div>
              </div>
            </div>
            <a href={bannerEvent.registration_url} target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-6 py-1.5 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2">
              <span>Register Now</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      )}
      <div className="flex-1 flex items-center justify-center">

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <div className="w-full md:w-1/2">
          <span className="text-[#FF6B50] text-sm font-medium mb-4 inline-block">#flutterfashion</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 pt-2">
            <div className="h-[120px] md:h-[150px] flex items-center justify-center">
              <TypeAnimation
                sequence={[
                  'Join Flutter Chennai Meetup 2024 🎯',
                  1500,
                  'Learn State Management & Best Practices 💡',
                  1500,
                  'Network with Flutter Experts 🤝',
                  1500,
                  'Build Your First Flutter App 🚀',
                  1500
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                deletionSpeed={80}
                style={{ display: 'inline-block' }}
              />
            </div>
          </h1>
          <p className="text-gray-600 mb-8 max-w-lg">
            It's time to express the way you want to dress, because at the end, you're deserve to be cool.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-300">
            Explore More
          </button>

          <div className="flex gap-12 mt-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">200k+</h3>
              <p className="text-gray-600">Sales Weekly</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">150k+</h3>
              <p className="text-gray-600">Members</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">300k+</h3>
              <p className="text-gray-600">Item Deliver</p>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-12 left-12">
          <span className="text-[#FF6B50] text-4xl">✧</span>
        </div>
        <div className="absolute bottom-12 right-1/4">
          <span className="text-[#FF6B50] text-4xl">✦</span>
        </div>

        {/* Curved Arrow */}
        <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-24 h-24 md:block hidden">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <path d="M20 50C20 50 40 30 50 50C60 70 80 50 80 50" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
            <path d="M75 45L80 50L75 55" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Right Content - Circular Image */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative aspect-square max-w-[500px] mx-auto">
            {/* Circular Background */}
            <div className="absolute inset-0 rounded-full bg-[#FFE4E4] overflow-hidden">
              <img
                src="/hero-image.jpg"
                alt="Fashion Models"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-4 right-12 bg-white py-2 px-4 rounded-full shadow-lg flex items-center gap-2">
              <span>💳</span>
              <span className="font-medium">Cod Payment</span>
            </div>

            <div className="absolute -bottom-4 right-16 bg-white py-2 px-4 rounded-full shadow-lg flex items-center gap-2">
              <span>✨</span>
              <span className="font-medium">Quality</span>
            </div>

            {/* NEW! Tag */}
            <div className="absolute left-0 bottom-1/3 transform -translate-x-1/2 rotate-[-15deg]">
              <div className="bg-black text-white px-4 py-1 rounded-full text-sm font-bold">
                NEW!
              </div>
            </div>

            {/* Guarantee Badge */}
            <div className="absolute top-8 left-8 bg-white py-2 px-4 rounded-full shadow-lg flex items-center gap-2">
              <span>🎯</span>
              <span className="font-medium">Guarantee</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;