"use client"

import React from 'react';
import gameData from '../../data/game.json';

const GameSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">{gameData.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gameData.games.map((game, index) => (
            <a
              key={index}
              href={game.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                <p className="text-gray-600">{game.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameSection;