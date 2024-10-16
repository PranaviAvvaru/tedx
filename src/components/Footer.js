import React from 'react';
import { FaInstagram, FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
          
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <p className="text-sm flex justify-center md:justify-start items-center">
                <FaPhoneAlt className="mr-2" />
                <span>Phone: </span>
                <a href="tel:+916300187268" className="hover:underline ml-2">+91 6300187268</a>, 
                <a href="tel:+917093135378" className="hover:underline ml-2">+91 7093135378</a>
              </p>
              <p className="text-sm flex justify-center md:justify-start items-center">
                <FaEnvelope className="mr-2" />
                <span>Email: </span>
                <a href="mailto:tedxsvu10@gmail.com" className="hover:underline ml-2">tedxsvu10@gmail.com</a>
              </p>
              <p className="text-sm flex justify-center md:justify-start items-center">
                <FaGlobe className="mr-2" />
                <span>Website: </span>
                <a href="https://tedxsrivenkateswarau.com" className="hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                  tedxsrivenkateswarau.com
                </a>
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <a
              href="https://instagram.com/tedxsvu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 transition duration-300"
            >
              <FaInstagram size={40} className="inline-block mb-2" />
            </a>
          </div>

        </div>

        {/* Footer Bottom Text */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>&copy; 2024 TEDxSriVenkateswaraUniversity. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
