import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
      
      if (!backendUrl) {
        console.error('Backend URL is not defined');
        return;
      }

      try {
        const response = await axios.get(backendUrl); // Use the environment variable
        setVisitorCount(response.data.count);
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 animate-pulse">
            Number of Visitors: {visitorCount}
          </p>
          <h2 className="text-2xl font-bold">Mohammad Mujahid</h2>
          <nav className="flex justify-center my-4">
            <a href="#about" className="mx-2">About</a>
            <a href="#skills" className="mx-2">Skills</a>
            <a href="#projects" className="mx-2">Projects</a>
            <a href="#education" className="mx-2">Education</a>
          </nav>
          <div className="flex justify-center gap-4">
            <a href="https://twitter.com/mujahidmohamma4" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://www.linkedin.com/in/mujjumazeme/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
            <a href="https://www.instagram.com/mujju___maze_me" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            {/* Add more social media icons here */}
          </div>
        </div>
        <p className="text-sm">&copy;2024 Mohammad Mujahid. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
