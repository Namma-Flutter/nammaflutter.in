"use client";

import React from 'react';
import aboutData from '../../data/about.json';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section className="relative overflow-hidden">
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

          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-[#02569B] drop-shadow">{aboutData.tagline}</h2>

          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">{aboutData.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mb-16">

            {aboutData.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.2 }}
                whileHover={{ scale: 1.07 }}
                className="p-6 sm:p-8 bg-white/90 rounded-2xl shadow-xl hover:shadow-blue-100 transition-all border border-[#B3E5FC] flex flex-col items-center min-w-0 w-full max-w-md mx-auto"
              >
                <div className="text-4xl sm:text-5xl mb-4 drop-shadow-lg">{feature.icon}</div>
                <h3 className="text-lg sm:text-2xl font-extrabold mb-3 text-[#02569B]">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      
      </div>
    </section>
  );
};

export default AboutUs;