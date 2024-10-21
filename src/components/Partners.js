import React, { useEffect, useRef } from "react";
import randomImage1 from "../assets/images/random.jpg";
import randomImage2 from "../assets/images/random.jpg";
import randomImage3 from "../assets/images/random.jpg";
import randomImage4 from "../assets/images/random.jpg";

const Partners = () => {
  const scrollingRef = useRef(null);

  useEffect(() => {
    const scrollingDiv = scrollingRef.current;
    let scrollAmount = 0;

    const scrollImages = () => {
      scrollAmount += 1;
      if (scrollAmount >= scrollingDiv.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollingDiv.style.transform = `translateX(${-scrollAmount}px)`;
    };

    const intervalId = setInterval(scrollImages, 20);

    return () => clearInterval(intervalId);
  }, []);

  const partners = [
    { name: "Partner 1", img: randomImage1 },
    { name: "Partner 2", img: randomImage2 },
    { name: "Partner 3", img: randomImage3 },
    { name: "Partner 4", img: randomImage4 },
    { name: "Partner 5", img: randomImage1 },
    { name: "Partner 6", img: randomImage2 },
    { name: "Partner 7", img: randomImage3 },
    { name: "Partner 8", img: randomImage4 },
  ];

  return (
    <section className="bg-gray-100 py-12 overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-black">Our Partners</h2>
        <div
          ref={scrollingRef}
          style={{
            display: "flex",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {partners.map((partner, index) => (
            <div key={index} style={{ flexShrink: 0, margin: "0 20px" }}>
              <img
                src={partner.img}
                alt={`Logo of ${partner.name}`}
                style={{
                  width: "150px",
                  height: "auto",
                  objectFit: "contain",
                  transition: "transform 0.3s",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
