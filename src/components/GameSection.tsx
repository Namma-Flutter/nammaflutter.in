"use client"

import React from 'react';
import gameData from '../../data/game.json';

const GameSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#E3F2FD] via-[#FFFDE7] to-[#B3E5FC] relative overflow-hidden">
      {/* Flutter pattern background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <img src="/flutter-pattern.svg" className="w-full h-full object-cover" alt="Flutter pattern background" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-8">
          <img src="/flutter-logo.svg" alt="Flutter Logo" className="w-14 h-14 mb-2 drop-shadow" />
          <span className="text-[#42A5F5] font-semibold uppercase tracking-wider text-sm mb-2">Fun & Games</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#42A5F5] via-[#039BE5] to-[#00C6FB] drop-shadow-lg">{gameData.title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {gameData.games.map((game, index) => (
            <a
              key={index}
              href={game.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 rounded-2xl shadow-lg hover:shadow-blue-200 overflow-hidden transform hover:scale-105 transition-all border border-[#B3E5FC] group relative min-w-0 w-full"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-tr from-[#42A5F5]/10 to-[#00C6FB]/20">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-32 sm:h-48 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col items-center">
                <h3 className="text-base sm:text-xl font-bold text-[#02569B] mb-2 text-center">{game.title}</h3>
                <p className="text-gray-700 mb-2 sm:mb-4 text-xs sm:text-base text-center">{game.description}</p>
                <span className="inline-block bg-gradient-to-r from-[#42A5F5] to-[#00C6FB] text-white px-4 sm:px-5 py-2 rounded-full font-semibold shadow hover:shadow-blue-200 transition-all duration-300 text-xs sm:text-base">Play Now</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameSection;