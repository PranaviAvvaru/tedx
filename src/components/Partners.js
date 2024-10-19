import React from 'react';
import randomImage1 from '../assets/images/random.jpg'; // Import unique images
import randomImage2 from '../assets/images/random.jpg'; // Import unique images
import randomImage3 from '../assets/images/random.jpg'; // Import another image
import randomImage4 from '../assets/images/random.jpg'; // Import another image

const Partners = () => {
  const partners = [
    { name: "Partner 0", img: randomImage1 },
    { name: "Partner 2", img: randomImage2 },
    { name: "Partner 3", img: randomImage3 },
    { name: "Partner 4", img: randomImage4 },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-black">Our Partners</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo flex justify-center">
              <img
                src={partner.img}
                alt={`Logo of ${partner.name}`}
                className="w-32 h-auto object-contain transition-transform duration-300 transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
