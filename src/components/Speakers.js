import React from 'react';

const Speakers = () => {
  const speakers = [
    { name: "Speaker 1", bio: "An expert in innovative ideas.", img: "/path-to-speaker-image.jpg" },
    { name: "Speaker 2", bio: "A leader in global tech solutions.", img: "/path-to-speaker-image.jpg" },
    // Add more speakers as needed
  ];

  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Meet Our Speakers</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <img 
                src={speaker.img} 
                alt={speaker.name} 
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{speaker.name}</h3>
              <p className="text-gray-400">{speaker.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Speakers;
