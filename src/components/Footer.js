import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Social Media Links */}
        <div className="social-media flex space-x-6 mb-6 md:mb-0">
          <a href="#" className="hover:text-red-500">
            <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-red-500">
            <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-red-500">
            <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
          </a>
        </div>

        {/* Copyright Section */}
        <p className="text-center md:text-left text-sm">
          &copy; 2024 TEDx SV University. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
