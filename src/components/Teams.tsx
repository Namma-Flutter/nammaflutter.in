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
          <span className="text-[#42A5F5] font-semibold uppercase tracking-wider text-sm mb-2">Meet Our Team</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-[#02569B] drop-shadow">{teamData.title}</h2>
          <div className="w-40 h-2 mx-auto bg-gradient-to-r from-[#42A5F5] via-[#00C6FB] to-[#FFD600] rounded-full mb-4 animate-gradient-x"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {teamData.members[0].map((member, index) => (
            <div
              key={index}
              className="flutter-animated-border p-[2px] rounded-[1.5rem] group relative hover:scale-105 transition-transform duration-300 min-w-0 w-full"
            >
              <div className="flex flex-col items-center p-6 sm:p-8 bg-white/90 rounded-[1.5rem] shadow-lg group-hover:shadow-flutter-glow border border-[#B3E5FC] w-full">
                <div className="relative mb-4">
                  <Image
                    src={member.image && member.image.trim() !== "" ? member.image : "https://via.placeholder.com/150"}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
