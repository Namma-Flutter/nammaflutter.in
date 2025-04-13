"use client";

import React from 'react';
import aboutData from '../../data/about.json';
import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';

const AboutUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
            {aboutData.tagline}
          </h2>
          <p className="text-xl text-gray-700 mb-8">{aboutData.description}</p>
          <div className="flex flex-col md:flex-row gap-8 justify-center text-center mb-12">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-medium text-gray-900">Our Mission</h3>
              <p className="mt-2 text-gray-600">{aboutData.mission}</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-medium text-gray-900">Our Vision</h3>
              <p className="mt-2 text-gray-600">{aboutData.vision}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {aboutData.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {aboutData.stats.map((stat, index) => {
            const numericValue = parseInt(stat.number.replace(/\D/g, ''));
            const { count, ref } = useCountUp({ end: numericValue, duration: 2000 });
            return (
              <div key={index} className="text-center" ref={ref}>
                <h4 className="text-3xl md:text-4xl font-bold text-blue-600">{count}+</h4>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;