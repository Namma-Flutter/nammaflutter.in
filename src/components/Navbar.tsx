import React from 'react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  // { name: 'Sponsors', href: '#sponsors' },
  // { name: 'About', href: '#about' },
  { name: 'Family', href: '#teams' },
  // { name: 'Testimonials', href: '#testimonials' },
  { name: 'Events', href: '#events' },
  // { name: 'Games', href: '#games' },
  // { name: 'Blogs', href: '/our-blogs' },
  // { name: 'Projects', href: '/our-projects' },
  // { name: 'Story', href: '/our-story' },
  // { name: 'Contact', href: '#footer' },
];

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center relative top-18 sm:top-16 left-0 z-30">
      <ul className="hidden sm:flex bg-gradient-to-r from-[#E3F2FD]/70 via-[#FFFDE7]/60 to-[#B3E5FC]/70 backdrop-blur-md rounded-full shadow-lg border border-gray-200 px-6 py-2 gap-3 md:gap-6 text-sm md:text-base font-semibold text-gray-700 max-w-[98vw] sm:max-w-fit overflow-x-auto">
        {NAV_LINKS.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="hover:text-[#02569B] transition-colors px-2 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-[#42A5F5] whitespace-nowrap"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
