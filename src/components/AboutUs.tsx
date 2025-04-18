"use client";

import React from 'react';
import aboutData from '../../data/about.json';
import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';

const AboutUs = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#E3F2FD] via-[#FFFDE7] to-[#B3E5FC] relative overflow-hidden">
      {/* Flutter pattern background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <img src="/flutter-pattern.svg" className="w-full h-full object-cover" alt="Flutter pattern background" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="flex flex-col items-center mb-4">
            <img src="/flutter-logo.svg" alt="Flutter Logo" className="w-14 h-14 mb-2 drop-shadow" />
            <span className="text-[#42A5F5] font-semibold uppercase tracking-wider text-sm mb-2">About Our Community</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#42A5F5] via-[#039BE5] to-[#00C6FB] drop-shadow-lg">
            {aboutData.tagline}
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">{aboutData.description}</p>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 justify-center text-center mb-12">
            <div className="p-5 sm:p-7 bg-white/80 rounded-2xl shadow-lg hover:shadow-blue-200 transition-shadow border border-[#B3E5FC] w-full max-w-md mx-auto">
              <h3 className="text-base sm:text-lg font-bold text-[#02569B] flex items-center justify-center gap-2">
                <span className="text-xl sm:text-2xl">🎯</span> Our Mission
              </h3>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">{aboutData.mission}</p>
            </div>
            <div className="p-5 sm:p-7 bg-white/80 rounded-2xl shadow-lg hover:shadow-blue-200 transition-shadow border border-[#B3E5FC] w-full max-w-md mx-auto">
              <h3 className="text-base sm:text-lg font-bold text-[#02569B] flex items-center justify-center gap-2">
                <span className="text-xl sm:text-2xl">🌟</span> Our Vision
              </h3>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">{aboutData.vision}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mb-16">
          {aboutData.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.07 }}
              className="p-6 sm:p-8 bg-gradient-to-br from-white via-[#E3F2FD] to-[#B3E5FC] rounded-2xl shadow-xl hover:shadow-blue-100 transition-all border border-[#B3E5FC] flex flex-col items-center min-w-0 w-full max-w-md mx-auto"
            >
              <div className="text-4xl sm:text-5xl mb-4 drop-shadow-lg">{feature.icon}</div>
              <h3 className="text-lg sm:text-2xl font-extrabold mb-3 text-[#02569B]">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 max-w-3xl mx-auto"
        >
          {aboutData.stats.map((stat, index) => {
            const numericValue = parseInt(stat.number.replace(/\D/g, ''));
            const { count, ref } = useCountUp({ end: numericValue, duration: 2000 });
            return (
              <div key={index} className="text-center p-4 sm:p-6 rounded-xl bg-white/80 shadow-lg border border-[#B3E5FC] w-full max-w-xs mx-auto">
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#42A5F5] via-[#039BE5] to-[#00C6FB] mb-2 animate-gradient-move">{count}+</h4>
                <p className="text-gray-700 mt-2 font-medium text-xs sm:text-sm md:text-base">{stat.label}</p>
              </div>
            );
          })}
        </motion.div>

        <div className="mt-16 flex justify-center">
          <a
            href="/community"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#42A5F5] via-[#039BE5] to-[#00C6FB] text-white px-9 py-3 rounded-full font-semibold shadow-xl hover:shadow-blue-200 hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#42A5F5] group relative overflow-hidden"
            style={{ boxShadow: '0 4px 24px 0 rgba(66,165,245,0.25)' }}
          >
            <span className="absolute -inset-px rounded-full animate-gradient-move bg-gradient-to-r from-[#42A5F5] via-[#039BE5] to-[#00C6FB] opacity-40 group-hover:opacity-60 blur-sm z-0" aria-hidden="true"></span>
            <span className="relative z-10 flex items-center">
              <svg className="w-7 h-7 mr-2 animate-bounce-slow drop-shadow-md" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="aboutGradient" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="#FFF" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#42A5F5" stopOpacity="0.8" />
                  </radialGradient>
                </defs>
                <circle cx="16" cy="16" r="14" fill="url(#aboutGradient)" />
                <path d="M10 18.5L16 24L22 18.5" stroke="#02569B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 8V24" stroke="#039BE5" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 14L16 18L20 14" stroke="#42A5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-base font-bold tracking-wide bg-gradient-to-r from-white via-[#B3E5FC] to-white bg-clip-text text-transparent">Join Our Community</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;