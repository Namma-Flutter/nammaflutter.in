import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const links = {
    community: [
      { name: 'About Us', href: '#about' },
      { name: 'Events', href: '#events' },
      // { name: 'Blog', href: '/blog' },
      // { name: 'Projects', href: '/projects' }
    ],
    social: [
      { name: 'Twitter', href: 'https://twitter.com/nammaflutter', icon: 'twitter' },
      { name: 'GitHub', href: 'https://github.com/nammaflutter', icon: 'github' },
      { name: 'LinkedIn', href: 'https://linkedin.com/company/nammaflutter', icon: 'linkedin' },
      { name: 'Discord', href: 'https://t.me/nammaflutter', icon: 'telegram' }
    ]
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Flutter pattern background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <Image width={100} height={100} src="/flutter-pattern.svg" className="w-full h-full object-cover" alt="Flutter pattern background" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-12 mb-8 items-center md:items-start">
          <div className="flex flex-col items-center md:items-start w-full md:w-auto text-center md:text-left">
            <Image width={100} height={100} src="/logos/NammaFlutterTamilLogo.png" alt="Flutter Logo" className="w-60 sm:w-60 h-12 sm:h-14 mb-2 drop-shadow" />
            {/* <h3 className="text-3xl md:text-4xl font-extrabold mb-2 text-[#02569B] drop-shadow">Namma Flutter</h3> */}
            <p className="text-[#039BE5] max-w-xs text-center md:text-left text-sm sm:text-base">
              Chennais premier Flutter community, building the future of mobile development.
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-col items-center md:items-start">
            <h4 className="text-base sm:text-lg font-bold mb-4 text-[#02569B]">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              {links.community.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#039BE5] hover:text-[#42A5F5] transition-colors duration-300 font-medium text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-auto flex flex-col items-center md:items-start">
            <h4 className="text-base sm:text-lg font-bold mb-4 text-[#02569B]">Connect With Us</h4>
            <div className="flex space-x-3 sm:space-x-4">
              {links.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="hover:scale-110 transition-transform"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon === 'twitter' && (
                    <svg className="w-7 h-7 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                  )}
                  {social.icon === 'github' && (
                    <svg className="w-7 h-7 text-gray-800" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.166 6.84 9.49.5.09.66-.217.66-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.153-1.11-1.46-1.11-1.46-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.528 2.341 1.087 2.91.832.09-.646.35-1.087.636-1.338-2.221-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.104-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.547 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.16.577.67.48C19.13 20.162 22 16.422 22 12c0-5.52-4.48-10-10-10z"/></svg>
                  )}
                  {social.icon === 'linkedin' && (
                    <svg className="w-7 h-7 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm13.5 11.27h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.155 1.459-2.155 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.839-1.563 3.036 0 3.598 2 3.598 4.59v5.606z"/></svg>
                  )}
                  {social.icon === 'telegram' && (
  <svg className="w-7 h-7 text-[#229ED9]" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
    <circle cx="120" cy="120" r="120" fill="#229ED9" />
    <path
      d="M179.4 75.4L157.3 170.2c-1.8 7.8-6.4 9.7-13 6.1l-35.8-26.4-17.3 16.6c-1.9 1.9-3.5 3.5-7.2 3.5l2.6-36.5 66.5-59.9c2.9-2.6-.6-4-4.5-1.5l-82.3 51.8-35.5-11.1c-7.7-2.4-7.8-7.7 1.6-11.4l138.8-53.5c6.4-2.3 12 1.5 9.5 11.2z"
      fill="#fff"
    />
  </svg>
)}

                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[#42A5F5]/20 pt-6 sm:pt-8 mt-6 sm:mt-8">
          <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center gap-2">
            <div className="text-xs sm:text-sm text-[#039BE5] font-medium">
              {new Date().getFullYear()} Namma Flutter. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-1 sm:gap-2 text-xs sm:text-sm py-2">
              <a
                href="https://chennaireact.in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#42A5F5] to-[#00C6FB] text-white px-2 sm:px-3 py-1 rounded-full font-semibold shadow inline-block hover:scale-105 transition-transform"
              >
                Created By Chennai React ❤️
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;