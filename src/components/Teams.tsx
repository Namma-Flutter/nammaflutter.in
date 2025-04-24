import React from 'react';
import teamData from '../../data/teams.json';
import Image from 'next/image';

const Teams = () => {

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Flutter pattern background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <Image src="/flutter-pattern.svg" className="w-full h-full object-cover" width={8} height={8} alt="Flutter pattern background" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-8 relative">
          <Image src="/flutter-logo.svg" alt="Flutter Logo" width={8} height={8} className="w-14 h-14 mb-2 drop-shadow" />
          {/* Floating Flutter logo accent */}
          {/* <img src="/flutter-logo.svg" alt="Flutter Accent" className="flutter-float-logo hidden md:block" /> */}
          <span className="text-[#42A5F5] font-semibold uppercase tracking-wider text-sm mb-2">Meet Our Team</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-[#02569B] drop-shadow">{teamData.title}</h2>
          <div className="w-40 h-2 mx-auto bg-gradient-to-r from-[#42A5F5] via-[#00C6FB] to-[#FFD600] rounded-full mb-4 animate-gradient-x"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {teamData.members.map((member, index) => (
            <div
              key={index}
              className="flutter-animated-border p-[2px] rounded-[1.5rem] group relative hover:scale-105 transition-transform duration-300 min-w-0 w-full"
            >
              <div className="flex flex-col items-center p-6 sm:p-8 bg-white/90 rounded-[1.5rem] shadow-lg group-hover:shadow-flutter-glow border border-[#B3E5FC] w-full">
                <div className="relative mb-4">
                  <Image
                    src={member.image}
                    alt={`${member.name}'s profile`}
                    width={400} height={400}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-[#42A5F5] shadow-md group-hover:shadow-lg transition-all"
                  />
                </div>
                <div className="flex justify-center mt-2 mb-2 w-full">
                  <span
                    className="bg-gradient-to-r from-[#42A5F5] to-[#00C6FB] text-white px-2 py-1 rounded-full text-xs font-bold shadow max-w-[110px] sm:max-w-[150px] truncate cursor-pointer group/role text-center"
                    title={member.role}
                  >
                    {member.role}
                  </span>
                </div>
                <h3 className="text-base sm:text-xl font-bold text-[#02569B] mb-1 text-center">{member.name}</h3>
                {/* <div className="flex space-x-3 sm:space-x-4 mt-2">
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform hover:drop-shadow-[0_0_8px_#1DA1F2]"
                    aria-label="Twitter"
                  >
                    <svg className="w-6 h-6 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                  </a>
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform hover:drop-shadow-[0_0_8px_#333]"
                    aria-label="GitHub"
                  >
                    <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.166 6.84 9.49.5.09.66-.217.66-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.153-1.11-1.46-1.11-1.46-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.528 2.341 1.087 2.91.832.09-.646.35-1.087.636-1.338-2.221-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.104-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.547 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.16.577.67.48C19.13 20.162 22 16.422 22 12c0-5.52-4.48-10-10-10z"/></svg>
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform hover:drop-shadow-[0_0_8px_#0077B5]"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm13.5 11.27h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.155 1.459-2.155 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.839-1.563 3.036 0 3.598 2 3.598 4.59v5.606z"/></svg>
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;