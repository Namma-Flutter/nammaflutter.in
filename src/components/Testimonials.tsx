"use client"

import React from 'react';
import Marquee from 'react-fast-marquee';
import testimonialData from '../../data/testimonials.json';

const Testimonials = () => {


  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{testimonialData.title}</h2>
        <Marquee gradient={false} speed={40}>
          <div className="flex gap-8">
            {testimonialData.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 p-6 bg-gray-800 rounded-lg mx-4"
              >
                <p className="text-lg mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-blue-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;