import React from 'react';

const Partners = () => {
  const partners = [
    { name: "Partner 1", img: "/path-to-partner-logo.jpg" },
    { name: "Partner 2", img: "/path-to-partner-logo.jpg" },
  ];

  return (
    <section className="partners">
      <h2>Our Partners</h2>
      <div className="partner-logos">
        {partners.map((partner, index) => (
          <img key={index} src={partner.img} alt={partner.name} />
        ))}
      </div>
    </section>
  );
}

export default Partners;
