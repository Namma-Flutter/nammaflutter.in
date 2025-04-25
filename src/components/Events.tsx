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
  registration_url: string;
}

interface EventsData {
  title: string;
  events: Event[];
}

const Events = () => {
  const [eventsData] = useState<EventsData | null>(EventsJson as EventsData | null);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');

  // State to ensure the code only runs on the client side
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true when mounted on the client side
  }, []);

  if (!eventsData || !isClient) return null;

  const filteredEvents = eventsData.events.filter(event => 
    filter === 'all' ? true : event.type === filter
  );

  const handleClick = (url: string) => {
    if (url && typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Flutter pattern background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <img src="/flutter-pattern.svg" className="w-full h-full object-cover" alt="Flutter pattern background" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-8">
          <img src="/flutter-logo.svg" alt="Flutter Logo" className="w-14 h-14 mb-2 drop-shadow" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-[#02569B] drop-shadow">{eventsData.title}</h2>
          <p className="text-md text-gray-700 mb-6">Join us for exciting Flutter events and workshops</p>
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full transition-all duration-300 font-semibold ${filter === 'all' ? 'bg-gradient-to-r from-[#42A5F5] to-[#00C6FB] text-white shadow-md' : 'bg-white text-[#02569B] border border-[#B3E5FC] hover:bg-[#E3F2FD]'}`}
            >
              All Events
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-6 py-2 rounded-full transition-all duration-300 font-semibold ${filter === 'upcoming' ? 'bg-gradient-to-r from-[#42A5F5] to-[#00C6FB] text-white shadow-md' : 'bg-white text-[#02569B] border border-[#B3E5FC] hover:bg-[#E3F2FD]'}`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter('past')}
              className={`px-6 py-2 rounded-full transition-all duration-300 font-semibold ${filter === 'past' ? 'bg-gradient-to-r from-[#42A5F5] to-[#00C6FB] text-white shadow-md' : 'bg-white text-[#02569B] border border-[#B3E5FC] hover:bg-[#E3F2FD]'}`}
            >
              Past Events
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 border-2 border-[#B3E5FC] ${event.type === 'upcoming' ? 'bg-white/90' : 'bg-white/70'} min-w-0 w-full h-full min-h-[430px] flex flex-col`}
            >
              <div className="p-6 sm:p-8 relative z-10 flex flex-col flex-1">
                <div className="flex flex-col sm:flex-row justify-between items-start mb-4 sm:mb-6 gap-2">
                  <h3 className="text-lg sm:text-2xl font-bold text-[#02569B] group-hover:text-[#039BE5] transition-colors duration-300">{event.title}</h3>
                  <span
                    className={`px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold shadow ${event.type === 'upcoming' ? 'bg-gradient-to-r from-[#42A5F5] to-[#00C6FB] text-white' : 'bg-gray-400 text-white'}`}
                  >
                    {event.type === 'upcoming' ? 'Upcoming' : 'Past'}
                  </span>
                </div>
                <p className="text-gray-700 mb-4 sm:mb-8 line-clamp-2 group-hover:text-[#02569B] transition-colors duration-300 text-sm sm:text-base">{event.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="flex items-center gap-1 sm:gap-2 bg-white/90 border border-[#B3E5FC] text-[#02569B] px-3 py-1 rounded-full font-medium text-xs sm:text-sm shadow-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1 sm:gap-2 bg-white/90 border border-[#B3E5FC] text-[#02569B] px-3 py-1 rounded-full font-medium text-xs sm:text-sm shadow-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1 sm:gap-2 bg-white/90 border border-[#B3E5FC] text-[#02569B] px-3 py-1 rounded-full font-medium text-xs sm:text-sm shadow-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </span>
                </div>
                <div className="flex-1" />
                {event.type === 'upcoming' && (
                  <motion.button
                    onClick={() => handleClick(event.registration_url)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-6 sm:mt-8 w-full bg-[#02569B] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold shadow-lg hover:bg-[#039BE5] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#039BE5] focus:ring-offset-2 transition-all duration-200 flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg tracking-wide group cursor-pointer"
                  >
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
