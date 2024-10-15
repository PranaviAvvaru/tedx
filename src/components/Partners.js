import React from 'react';

const Partners = () => {
  const partners = [
    { name: "Partner 1", img: "/path-to-partner-logo.jpg" },
    { name: "Partner 2", img: "/path-to-partner-logo.jpg" },
    // Add more partners here as needed
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
                alt={partner.name}
                className="w-32 h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
