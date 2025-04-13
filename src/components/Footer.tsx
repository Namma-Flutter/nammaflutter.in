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
      { name: 'Twitter', href: 'https://twitter.com/nammaflutter', icon: '𝕏' },
      { name: 'GitHub', href: 'https://github.com/nammaflutter', icon: '🐙' },
      { name: 'LinkedIn', href: 'https://linkedin.com/company/nammaflutter', icon: '💼' },
      { name: 'Discord', href: 'https://discord.gg/nammaflutter', icon: '💬' }
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
    <footer className="bg-secondary text-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Namma Flutter</h3>
            <p className="text-accent-light">
              Chennai's premier Flutter community, building the future of mobile development.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              {links.community.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-accent-light hover:text-accent transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Connect With Us</h4>
            <div className="flex space-x-4">
              {links.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-accent-light hover:text-accent transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-2xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-accent/20 pt-8">
          <div className="flex flex-wrap justify-between items-center">
            <div className="text-sm text-accent-light">
              © {new Date().getFullYear()} Namma Flutter. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-2 text-sm">
              {links.tech.map((tech, index) => (
                <span key={index} className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded">
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