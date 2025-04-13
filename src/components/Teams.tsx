import React from 'react';
import teamData from '../../data/teams.json';

const Teams = () => {

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-secondary">{teamData.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.members.map((member, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-accent-light bg-opacity-10 rounded-lg shadow-sm hover:shadow-md transition duration-300 hover:bg-accent-light hover:bg-opacity-20">
              <img
                src={member.image}
                alt={`${member.name}'s profile`}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-secondary">{member.name}</h3>
              <p className="text-accent mb-4">{member.role}</p>
              <div className="flex space-x-4">
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500"
                >
                  Twitter
                </a>
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gray-900"
                >
                  GitHub
                </a>
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;