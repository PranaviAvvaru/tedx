import React from 'react';

const Speakers = () => {
  const speakers = [
    { name: "Speaker 1", bio: "Speaker Bio", img: "/path-to-speaker-image.jpg" },
    { name: "Speaker 2", bio: "Speaker Bio", img: "/path-to-speaker-image.jpg" },
  ];

  return (
    <section className="speakers">
      <h2>Meet Our Speakers</h2>
      <div className="speaker-grid">
        {speakers.map((speaker, index) => (
          <div key={index} className="speaker-card">
            <img src={speaker.img} alt={speaker.name} />
            <h3>{speaker.name}</h3>
            <p>{speaker.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Speakers;
