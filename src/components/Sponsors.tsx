"use client"
import React from 'react';
import sponsorsData from '../../data/sponsors.json';
import Image from 'next/image';
import toast from 'react-hot-toast';

const Sponsors = () => {
  const { sponsors } = sponsorsData;

  // Group sponsors by type
  const groupedSponsors = sponsors.reduce((acc, sponsor) => {
    const type = sponsor.type || 'Others';
    if (!acc[type]) acc[type] = [];
    acc[type].push(sponsor);
    return acc;
  }, {});

  const sponsorOrder = ['Ultra Dash', 'Dashling', 'Others'];

  const becomeASponsorLink = () => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-sm w-full bg-blue-50 text-blue-900 shadow-md rounded-xl pointer-events-auto flex items-center ring-1 ring-blue-300 ring-opacity-70 px-4 py-3`}
      >
        <div className="flex-1 flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1"  width="24" height="24" viewBox="0 0 24 24"><path fill="#629CFFFF" d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" /></svg>
          <p className="text-sm font-semibold">
            Reach out to us on <span className="underline">LinkedIn</span> 🩵
          </p>
        </div>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="ml-4 text-blue-600 hover:text-blue-800 font-medium text-sm"
        >
          Close
        </button>
      </div>
    ));
  };

  return (
    <section className="py-16 mb-96 relative overflow-hidden">
      {/* Flutter pattern background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <Image
          width={800}
          height={800}
          src="/flutter-pattern.svg"
          className="w-full h-full object-cover"
          alt="Flutter pattern background"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-8">
          <Image
            width={800}
            height={800}
            src="/flutter-logo.svg"
            alt="Flutter Logo"
            className="w-12 h-12 mb-2"
          />
          <span className="text-[#42A5F5] font-semibold uppercase tracking-wider text-sm mb-2">
            Supported By
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-[#02569B] drop-shadow">
            Our Sponsors
          </h2>
        </div>

        {/* Grouped sponsors */}
        
        {sponsorOrder.map((type) => {
  const sponsorsList = groupedSponsors[type] || [];
  if (sponsorsList.length === 0) return null;

  return (
    <div key={type} className="mb-16 text-center">
  <h3 className="text-2xl font-bold text-[#02569B] mb-6">{type}</h3>
  <div className="flex flex-wrap justify-center gap-y-10 gap-x-20">
    {sponsorsList.map((sponsor, index) => (
      <a
        href={sponsor.link}
        target="_blank"
        rel="noopener noreferrer"
        key={`${type}-${index}`}
        className="flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 bg-white/80 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#B3E5FC] hover:scale-105 group w-[45%] sm:w-[30%] md:w-[22%] min-w-[150px]"
      >
        <Image
          width={800}
          height={800}
          src={sponsor.logo}
          alt={`${sponsor.name} logo`}
          className="h-32 sm:h-40 md:h-48 w-auto object-contain mb-2 group-hover:scale-110 transition-transform duration-300 max-w-full"
        />
        <span className="text-[#42A5F5] font-medium text-xs sm:text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center break-words max-w-[90px] sm:max-w-[110px] md:max-w-[130px]">
          {sponsor.name}
        </span>
      </a>
    ))}
  </div>
</div>


  );
})}


        <div className="text-center mt-12">
          <a
            onClick={becomeASponsorLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#02569B] text-white px-9 py-3 rounded-full font-semibold shadow-xl hover:bg-[#039BE5] hover:shadow-blue-200 hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#42A5F5] group relative overflow-hidden"
            style={{ boxShadow: '0 4px 24px 0 rgba(66,165,245,0.25)' }}
          >
            <span className="relative z-10 flex items-center">
              <span className="text-base font-bold tracking-wide text-white">Become a Sponsor</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
