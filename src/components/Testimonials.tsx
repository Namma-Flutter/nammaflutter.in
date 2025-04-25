"use client"

import React from 'react';
import Marquee from 'react-fast-marquee';
import testimonialData from '../../data/testimonials.json';

const Testimonials = () => {

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Flutter pattern background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <img src="/flutter-pattern.svg" className="w-full h-full object-cover" alt="Flutter pattern background" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-8">
          <img src="/flutter-logo.svg" alt="Flutter Logo" className="w-14 h-14 mb-2 drop-shadow" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-[#02569B] drop-shadow">{testimonialData.title}</h2>
        </div>
        <Marquee gradient={false} speed={40} pauseOnHover={true} className="py-2">
          <div className="flex gap-4 sm:gap-6 md:gap-8">
            {testimonialData.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 sm:w-80 p-4 sm:p-7 bg-white/90 rounded-2xl shadow-lg border border-[#B3E5FC] hover:shadow-blue-200 transition-all duration-300 hover:scale-105 mx-2 sm:mx-4 relative group min-w-0"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#42A5F5] to-[#00C6FB] flex items-center justify-center text-xl sm:text-2xl text-white font-bold shadow-md">
                    <span role="img" aria-label="User">👤</span>
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-[#02569B] text-xs sm:text-base">{testimonial.name}</p>
                    <p className="text-[#039BE5] text-[10px] sm:text-xs font-medium">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-700 mb-2 italic">“{testimonial.text}”</p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;