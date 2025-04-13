import React from 'react';
import sponsorsData from '../../data/sponsors.json';

const Sponsors = () => {
  const { sponsors, becomeASponsorLink } = sponsorsData;

  return (
    <section className="py-16 bg-accent-light bg-opacity-5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-secondary">Our Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <a
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="flex items-center justify-center p-4 bg-primary rounded-lg shadow-sm hover:shadow-md transition duration-300 hover:bg-accent-light"
            >
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                className="h-12 w-auto object-contain"
              />
            </a>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href={becomeASponsorLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-primary hover:bg-accent-light hover:text-secondary px-6 py-2 rounded-full font-medium transition duration-300"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;