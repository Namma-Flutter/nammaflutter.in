import React from 'react';

const Footer = () => {
  const links = {
    community: [
      { name: 'About Us', href: '#about' },
      { name: 'Events', href: '#events' },
      { name: 'Blog', href: '/blog' },
      { name: 'Projects', href: '/projects' }
    ],
    social: [
      { name: 'Twitter', href: 'https://twitter.com/nammaflutter', icon: 'twitter' },
      { name: 'GitHub', href: 'https://github.com/nammaflutter', icon: 'github' },
      { name: 'LinkedIn', href: 'https://linkedin.com/company/nammaflutter', icon: 'linkedin' },
      { name: 'Discord', href: 'https://discord.gg/nammaflutter', icon: 'discord' }
    ],
    tech: [
      'TypeScript',
      'Tailwind',
      'Next.js',
      'React',
      'Flutter'
    ]
  };

  return (
    <footer className="bg-gradient-to-tr from-[#E3F2FD] via-[#FFFDE7] to-[#B3E5FC] text-[#02569B] pt-16 pb-10 relative overflow-hidden border-t-4 border-[#42A5F5]/30">
      {/* Flutter pattern background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <img src="/flutter-pattern.svg" className="w-full h-full object-cover" alt="Flutter pattern background" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-12 mb-8 items-center md:items-start">
          <div className="flex flex-col items-center md:items-start w-full md:w-auto text-center md:text-left">
            <img src="/flutter-logo.svg" alt="Flutter Logo" className="w-12 sm:w-14 h-12 sm:h-14 mb-2 drop-shadow" />
            <h3 className="text-xl sm:text-2xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#42A5F5] via-[#039BE5] to-[#00C6FB]">Namma Flutter</h3>
            <p className="text-[#039BE5] max-w-xs text-center md:text-left text-sm sm:text-base">
              Chennai's premier Flutter community, building the future of mobile development.
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
                  {social.icon === 'discord' && (
                    <svg className="w-7 h-7 text-[#5865F2]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276c-.598.3428-1.2205.6447-1.8733.8923a.0766.0766 0 00-.0406.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1826 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/></svg>
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
            <div className="flex flex-wrap gap-1 sm:gap-2 text-xs sm:text-sm">
              {links.tech.map((tech, index) => (
                <span key={index} className="bg-gradient-to-r from-[#42A5F5] to-[#00C6FB] text-white px-2 sm:px-3 py-1 rounded-full font-semibold shadow">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;