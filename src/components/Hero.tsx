"use client"

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Image from "next/image";
import Navbar from './Navbar';
import eventsData from '../../data/events.json';

const Hero = () => {
  // Import events data
  const events = eventsData.events;
  
  // Find event to show in banner
  const bannerEvent = events.find((event: { type: string; showInBanner: boolean }) => event.type === 'upcoming' && event.showInBanner);

  return (
    <section className="min-h-[130vh] sm:min-h-[96vh] md:min-h-screen flex flex-col relative overflow-hidden">
      <Navbar />
      {/* Flutter Event Banner */}
      {bannerEvent && (
        <div className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 text-white py-3 px-6 relative overflow-hidden animate-fadeIn">
          <div className="container mx-auto flex items-center justify-between gap-4 relative z-10">
            <div className="flex items-center space-x-4">
              <span className="bg-yellow-300 text-blue-900 px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                UPCOMING
              </span>
              <Image src="/flutter-logo.svg" alt="Flutter Logo" className="w-8 h-8" width={8} height={8}/>
              <div className="flex items-center space-x-3">
                <h3 className="font-bold text-lg text-white">{bannerEvent.title}</h3>
                <div className="flex items-center space-x-2 text-blue-100">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
      <div className="flex flex-col md:flex-1 justify-start md:justify-center">

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">

        <div className="w-full md:w-1/2">
          {/* Main Logo Centered in Hero Section */}
          <span className="text-[#42A5F5] text-sm font-semibold mb-4 inline-block uppercase tracking-wider">Flutter Community Event</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 pt-2">
            <div className="h-[120px] md:h-[150px] flex items-center justify-center">
              <TypeAnimation
                sequence={[
                  'Namma Flutter | Flutter Chennai🚀',
                  1800,
                  'Workshops, Talks & Networking💙',
                  1800,
                  'Grow Your Flutter Skills🛠️',
                  1800,
                  'Connect with the Community🌏',
                  1800
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                deletionSpeed={80}
                style={{ display: 'inline-block' }}
              />
            </div>
          </h1>
          <p className="text-gray-700 mb-8 max-w-lg text-lg">
            Join us for Flutter learning, hands-on workshops, and community networking. Whether you’re a beginner or an expert, there’s something for everyone!
          </p>
          <a href={bannerEvent ? bannerEvent.registration_url : '#'} target="_blank" rel="noopener noreferrer">
            <button className="bg-[#02569B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#039BE5] transition duration-300 shadow-lg flex items-center gap-2">
             
              <span>Join the Event</span>
            </button>
          </a>
          <div className="flex gap-6 md:gap-12 mt-6 md:mt-12">
            <div>
              <h3 className="text-2xl font-bold text-[#02569B]">4000+</h3>
              <p className="text-gray-600">Community Members</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#02569B]">30+</h3>
              <p className="text-gray-600">Speakers</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#02569B]">12+</h3>
              <p className="text-gray-600">Workshops</p>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-12 left-12 animate-bounce hidden xl:block">
          <span className="text-[#42A5F5] text-4xl">✧</span>
        </div>
        <div className="absolute bottom-12 right-1/4 animate-spin-slow hidden xl:block">
          <span className="text-[#42A5F5] text-4xl">✦</span>
        </div>

        {/* Right Content - Circular Image */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative aspect-square max-w-[500px] mx-auto">
            {/* Circular Background */}
            <div className="absolute inset-0 rounded-full bg-[#E3F2FD] overflow-hidden border-4 border-[#42A5F5] shadow-xl">
              <img
                src="/flutter-event-hero.jpg"
                alt="Flutter Community Event"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-4 right-12 bg-white py-2 px-4 rounded-full shadow-lg flex items-center gap-2 border border-[#42A5F5]">
              <span>🎤</span>
              <span className="font-medium text-[#02569B]">Talks</span>
            </div>

            <div className="absolute -bottom-4 right-16 bg-white py-2 px-4 rounded-full shadow-lg flex items-center gap-2 border border-[#42A5F5]">
              <span>🛠️</span>
              <span className="font-medium text-[#02569B]">Workshops</span>
            </div>

            {/* NEW! Tag */}
            <div className="absolute left-1 bottom-[28%] transform -translate-x-1/2 rotate-[-15deg]">
              <div className="bg-[#42A5F5] text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                COMMUNITY
              </div>
            </div>

            {/* Guarantee Badge */}
            <div className="absolute top-8 left-8 bg-white py-2 px-4 rounded-full shadow-lg flex items-center gap-2 border border-[#42A5F5]">
              <span>🤝</span>
              <span className="font-medium text-[#02569B]">Networking</span>
            </div>

            {/* Small Chennai/Flutter icons for extra fancy look - now arranged just outside the circle, larger and visible */}
            <div className="absolute inset-0 pointer-events-none select-none z-20">
              {/* Top left outside circle */}
              <Image src="/logos/lighthouse.png" alt="Chennai Lighthouse" width={18} height={18} priority
                className="absolute left-[-10%] top-[8%] w-4 xs:w-5 sm:w-6 md:w-8 lg:w-10 animate-bounce-slow"
                style={{maxWidth:'100%',maxHeight:'100%'}} />
              {/* Top right outside circle */}
              <Image src="/logos/lic.png" alt="LIC Building" width={20} height={20} priority
                className="absolute right-[-10%] top-[12%] w-5 xs:w-6 sm:w-7 md:w-10 lg:w-12 animate-float-slow"
                style={{maxWidth:'100%',maxHeight:'100%'}} />
              {/* Bottom left outside circle */}
              <Image src="/logos/temple.png" alt="Chennai Temple" width={18} height={18} priority
                className="absolute left-[-8%] bottom-[12%] w-4 xs:w-5 sm:w-6 md:w-8 lg:w-10 animate-float"
                style={{maxWidth:'100%',maxHeight:'100%'}} />
              {/* Bottom right outside circle */}
              <Image src="/logos/bird.png" alt="Flutter Mascot Small" width={18} height={18} priority
                className="absolute right-[-8%] bottom-[10%] w-4 xs:w-5 sm:w-6 md:w-8 lg:w-10 animate-bounce"
                style={{maxWidth:'100%',maxHeight:'100%'}} />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;