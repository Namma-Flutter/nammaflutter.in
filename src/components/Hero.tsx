"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Navbar from "./Navbar";
import eventsData from "../../data/events.json";

const Hero = () => {
  const events = eventsData.events;
  const bannerEvent = events.find(
    (event: { type: string; showInBanner: boolean }) =>
      event.type === "upcoming" && event.showInBanner
  );

  return (
    <section className="min-h-[130vh] sm:min-h-[96vh] md:min-h-screen flex flex-col relative overflow-hidden">
      <Navbar />

      {/* Event Banner */}
      {bannerEvent && (
        <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 text-white px-4 py-5 sm:px-6 animate-fadeIn">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center max-w-5xl mx-auto">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="bg-yellow-300 text-blue-900 px-3 py-1 rounded-full text-xs font-bold">
                  UPCOMING
                </span>
                <Image
                  src="/flutter-logo.svg"
                  alt="Flutter"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">{bannerEvent.title}</h3>
              <div className="flex items-center text-sm text-blue-100">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                {bannerEvent.time}
              </div>
            </div>

            <a
              href={bannerEvent.registration_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 mt-2 sm:mt-0 px-5 py-2 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 text-sm shadow-md"
            >
              Register Now →
            </a>
          </div>
        </div>
      )}

      {/* Main Hero Content */}
      <div className="flex-1 px-4 sm:px-6 py-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Text Block */}
        <div className="md:w-1/2">
          <span className="text-[#42A5F5] text-xs font-bold uppercase mb-3 block">
            Flutter Community Event
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            <div className="h-28 sm:h-32 flex items-center">
              <TypeAnimation
                sequence={[
                  'Namma Flutter | Flutter Chennai🚀',
                  1800,
                  'Workshops, Talks & Networking💙',
                  1800,
                  'Grow Your Flutter Skills🛠️',
                  1800,
                  'Connect with the Community🌏',
                  1800,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                deletionSpeed={80}
                style={{ display: "inline-block" }}
              />
            </div>
          </h1>

          <p className="text-gray-700 text-base sm:text-lg mb-6">
            Join us for Flutter learning, hands-on workshops, and community networking. Whether you’re a beginner or an expert, there’s something for everyone!
          </p>

          <a
            href={bannerEvent ? bannerEvent.registration_url : "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#02569B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#039BE5] transition duration-300 shadow-md">
              Join the Event
            </button>
          </a>

          {/* Stats */}
          <div className="flex gap-6 mt-8">
            <div>
              <h3 className="text-xl font-bold text-[#02569B]">4000+</h3>
              <p className="text-gray-600 text-sm">Community Members</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#02569B]">30+</h3>
              <p className="text-gray-600 text-sm">Speakers</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#02569B]">12+</h3>
              <p className="text-gray-600 text-sm">Workshops</p>
            </div>
          </div>
        </div>

        {/* Right Image Block */}
        <div className="relative  md:w-1/2 w-full max-w-md mx-auto">
          <div className="relative aspect-square rounded-full overflow-hidden border-4 border-[#42A5F5] shadow-xl bg-[#E3F2FD]">
            <Image
              src="/logos/bird.png"
              width={400}
              height={400}
              alt="Flutter Event"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Labels */}
          <div className="absolute top-4 left-4 bg-white py-1 px-3 rounded-full border border-[#42A5F5] shadow-md text-sm text-[#02569B] flex items-center gap-1">
            🤝 Networking
          </div>
          <div className="absolute top-1/2 left-full transform -translate-x-1/2 -translate-y-1/2 bg-white py-1 px-3 rounded-full border border-[#42A5F5] shadow-md text-sm text-[#02569B] flex items-center gap-1">
            🎤 Talks
          </div>
          <div className="absolute bottom-4 right-4 bg-white py-1 px-3 rounded-full border border-[#42A5F5] shadow-md text-sm text-[#02569B] flex items-center gap-1">
            🛠️ Workshops
          </div>
          <div className="absolute -left-3 bottom-1/3 rotate-[-15deg]">
            <div className="bg-[#42A5F5] text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
              COMMUNITY
            </div>
          </div>

          {/* Floating Icons */}
          <div className="absolute inset-0 pointer-events-none select-none z-10">
            <Image src="/logos/lighthouse.png" alt="Chennai Lighthouse" width={20} height={20}
              className="absolute -left-4 top-6 w-5 animate-bounce" />
            <Image src="/logos/lic.png" alt="LIC Building" width={20} height={20}
              className="absolute -right-5 top-12 w-6 animate-float" />
            <Image src="/logos/temple.png" alt="Chennai Temple" width={20} height={20}
              className="absolute -left-4 bottom-8 w-5 animate-float" />
            <Image src="/logos/bird.png" alt="Flutter Mascot" width={20} height={20}
              className="absolute -right-4 bottom-6 w-5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
