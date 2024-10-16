import React from 'react';
import { motion } from 'framer-motion';
import randomImage1 from '../assets/images/random.jpg'; // Import image
import randomImage2 from '../assets/images/random.jpg'; // Import another image
import randomImage3 from '../assets/images/random.jpg'; // Import image
import randomImage4 from '../assets/images/random.jpg'; // Import another image
import randomImage5 from '../assets/images/random.jpg'; // Import image
import randomImage6 from '../assets/images/random.jpg'; // Import another image

const Speakers = () => {
  const speakers = [
    { name: "Speaker 1", bio: "An expert in innovative ideas.", img: randomImage1 },
    { name: "Speaker 2", bio: "A leader in global tech solutions.", img: randomImage2 },
    { name: "Speaker 3", bio: "Innovator in the field of AI.", img: randomImage3 },
    { name: "Speaker 4", bio: "Pioneer of sustainable technology.", img: randomImage4 },
    { name: "Speaker 5", bio: "Expert in data science.", img: randomImage5 },
    { name: "Speaker 6", bio: "Leader in cybersecurity.", img: randomImage6 },
  ];

  return (
    <section className="bg-black text-white py-12 p-3">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Meet Our Speakers</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, translateY: 20 }} // Initial state for animation
              animate={{ opacity: 1, translateY: 0 }} // Animation state
              transition={{ duration: 0.5, delay: index * 0.1 }} // Delay based on index for staggered effect
            >
              <img 
                src={speaker.img} 
                alt={speaker.name} 
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{speaker.name}</h3>
              <p className="text-gray-400">{speaker.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
