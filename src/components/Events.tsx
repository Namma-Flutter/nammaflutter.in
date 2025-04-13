'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import EventsJson from '../../data/events.json';
interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'upcoming' | 'past';
  description: string;
}

interface EventsData {
  title: string;
  events: Event[];
}

const Events = () => {
  const [eventsData] = useState<EventsData | null>(EventsJson as EventsData | null);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');


  if (!eventsData) return null;

  const filteredEvents = eventsData.events.filter(event => 
    filter === 'all' ? true : event.type === filter
  );

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-4">{eventsData.title}</h2>
          <p className="text-xl text-gray-600">Join us for exciting Flutter events and workshops</p>
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              All Events
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${filter === 'upcoming' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter('past')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${filter === 'past' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Past Events
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 ${event.type === 'upcoming' ? 'bg-white' : 'bg-gray-50'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="p-8 relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">{event.title}</h3>
                  <span
                    className={`px-4 py-1 rounded-full text-sm font-medium ${event.type === 'upcoming' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white'}`}
                  >
                    {event.type === 'upcoming' ? 'Upcoming' : 'Past'}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-8 line-clamp-2 group-hover:text-gray-100 transition-colors duration-300">{event.description}</p>
                
                <div className="flex flex-wrap gap-6 text-sm text-gray-500 group-hover:text-gray-200 transition-colors duration-300">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.time}
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </span>
                </div>
                
                {event.type === 'upcoming' && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 w-full bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg group-hover:bg-white group-hover:text-blue-500"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Register Now
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;