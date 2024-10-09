import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBars, faTimes, faLink, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Main = () => {
  const titles = useMemo(() => ['Entrepreneur','Blockchain Developer', 'Full Stack Maestro', 'Cloud Architect', 'DevOps Specialist', 'Networking Enthusiast'], []);
  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const [fade, setFade] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const [adVisible, setAdVisible] = useState(false); // State to control ad visibility
  const [clickCount, setClickCount] = useState(0); // State to track number of times "X" is clicked

  const closeMenu = () => setIsOpen(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to scroll to About section on page load
  useEffect(() => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []); // Empty dependency array ensures this runs only once on component mount

  // Smooth scroll for the nav links
  useEffect(() => {
    const handleSmoothScroll = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      if (target.matches('.scroll-target')) {
        event.preventDefault();
        
        const targetId = target.getAttribute('href');
        
        // Check if targetId is not null
        if (targetId) {
          const targetSection = document.querySelector(targetId);
          
          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }
      }
    };
  
    document.addEventListener('click', handleSmoothScroll);
  
    // Cleanup the event listener when component is unmounted
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);
  
  

  useEffect(() => {
    // Check if 10 minutes have passed since the last "X" click
    const lastClosed = localStorage.getItem('lastClosedAd');
    if (lastClosed) {
      const timePassed = Date.now() - parseInt(lastClosed, 10);
      const tenMinutes = 10 * 60 * 1000;
      if (timePassed < tenMinutes) {
        return; // Do not show the ad if 10 minutes haven't passed
      }
    }

    // Toggle ad banner every 10 seconds if the user hasn't clicked "X" twice
    const toggleAdInterval = setInterval(() => {
      setAdVisible((prevVisible) => !prevVisible); // Toggle the visibility
    }, 10000); // Every 10 seconds

    // Clean up interval on component unmount
    return () => {
      clearInterval(toggleAdInterval);
    };
  }, [clickCount]);

  const handleCloseAd = () => {
    setClickCount((prevCount) => prevCount + 1); // Increment click count
    setAdVisible(false);

    // If the user clicks "X" twice, hide the ad for 10 minutes
    if (clickCount + 1 >= 2) {
      localStorage.setItem('lastClosedAd', Date.now().toString());
    }
  };

  return (
    <>
      <Head>
        <title>Mohammad Mujahid&apos;s Portfolio</title>
        <meta name="description" content="Mohammad Mujahid - A Content Creator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* new navbar with mobile responsiveness */}
      <header className="fixed top-0 w-full z-30 bg-gray-900 text-white p-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faBriefcase} className="text-white" />
            <a href="#about-section" className="scroll-target text-white font-bold">
              Portfolio
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
          </div>

          <nav
            className={`fixed inset-0 flex flex-col items-center justify-center transform ${
              isOpen ? 'translate-y-0' : '-translate-y-full'
            } transition-transform duration-300 ease-linear z-50 md:relative md:transform-none md:transition-none bg-gray-900 md:bg-transparent p-8 md:p-0 md:block`}
          >
            <ul className="space-y-6 md:space-y-0 md:flex md:space-x-6 items-center justify-center w-full h-full md:h-auto">
              <li className="md:hidden w-full text-right">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </li>
              <li>
                <a href="#about-section" className="scroll-target nav-item text-white hover:text-gray-300 px-1 md:px-4 relative" onClick={closeMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="scroll-target nav-item text-white hover:text-gray-300 px-1 md:px-4 relative" onClick={closeMenu}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="scroll-target nav-item text-white hover:text-gray-300 px-1 md:px-4 relative" onClick={closeMenu}>
                  Professional experience
                </a>
              </li>
              <li>
                <a href="#projects" className="scroll-target nav-item text-white hover:text-gray-300 px-1 md:px-4 relative" onClick={closeMenu}>
                  Projects
                </a>
              </li>
              <li>
                <a href="/blog" className="nav-item text-white hover:text-gray-300 px-1 md:px-4 relative" onClick={closeMenu}>
                  My-Blogs-on-Tech
                </a>
              </li>
              <li>
                <a href="#education" className="scroll-target nav-item text-white hover:text-gray-300 px-1 md:px-4 relative" onClick={closeMenu}>
                  Education
                </a>
              </li>
              <li>
                <a href="#contact" className="scroll-target nav-item text-white hover:text-gray-300 px-1 md:px-4 relative" onClick={closeMenu}>
                  Contact
                </a>
              </li>
              <li>
                <a href="https://github.com/mujju834" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded md:mt-0 mt-4">
                  GitHub Profile
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Ad Banner */}
      {adVisible && (
        <div
          id="ad-banner"
          className="fixed top-0 w-full bg-white p-4 shadow-lg flex justify-between items-center z-40 cursor-pointer"
          onClick={() => window.open('https://www.mastnovtech.com', '_blank')}
        >
          <div className="flex items-center">
            <img src="/images/ad.jpg" alt="Ad" className="h-12 w-12 mr-4" />
            <span className="text-black font-bold">Check out our latest services!</span>
          </div>
          <button
            id="close-ad"
            className="text-red-500 text-xl font-bold"
            onClick={(e) => {
              e.stopPropagation(); // Prevents the anchor link from being triggered
              handleCloseAd(); // Handle the close ad functionality
            }}
          >
            X
          </button>
        </div>
      )}

      <main className="pt-24 bg-gray-900 text-white">
        <section className="flex items-center justify-center p-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-purple-600">
              <Image src="/images/My-img.jpeg" alt="Profile Picture" layout="fill" objectFit="cover" objectPosition="68% center" />
            </div>

            <div id="about-section" className="scroll-section text-center md:text-left md:pl-6 -mt-20">
              <h1 className="text-6xl font-bold">
                Hi, I am <br /> Mohammad Mujahid
              </h1>
              <p className={`text-purple-500 text-3xl font-light mt-4 ${fade ? 'fade-enter-active' : 'fade-exit-active'}`}>{currentTitle}</p>
              <p className="mt-4 max-w-2xl">
                As a full-stack maestro, I blend front-end elegance with robust back-end functionalities, creating cohesive and dynamic applications. My blockchain
                expertise fortifies platforms with decentralization, infusing trust and security into every transaction. In the DevOps arena, I streamline workflows,
                ensuring seamless integration and deployment that accelerate the software development lifecycle. My ventures in cloud computing architect scalable
                solutions, harnessing distributed power for peak performance. Through a deep understanding of networking, I construct infrastructures that are both
                resilient and efficient. Each layer of technology is a strategic move in my quest to redefine the digital landscape of businesses.
                <br />
                <i>
                  As an entrepreneur, I&apos;ve harnessed my technical acumen to launch and lead innovative ventures. These businesses are not just a testament to my
                  passion for technology but also a reflection of my strategic vision to redefine the digital landscape of businesses globally.
                </i>
                <br />
                <span className="md:mt-5 font-bold">
                  My-Company:{' '}
                  <a href="https://www.mastnovtech.com/" target="_blank" className="text-blue-500 hover:underline">
                    Visit our site <FontAwesomeIcon icon={faExternalLinkAlt} className="text-blue-500" />
                  </a>
                  <a
                    href="/Resume/Mujju-Resume.pdf"
                    download="Mohammad-Mujahid_Resume.pdf"
                    className="mt-4 md:mt-3 ml-5 inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
                  >
                    My Resume
                  </a>
                </span>
              </p>
            </div>
          </div>

          <style jsx>{`
            .scroll-section::before {
              content: '';
              display: block;
              height: 90px;
              visibility: hidden;
            }

            html {
              scroll-behavior: smooth;
            }

            .fade-enter {
              opacity: 0;
            }
            .fade-enter-active {
              opacity: 1;
              transition: opacity 500ms;
            }
            .fade-exit {
              opacity: 1;
            }
            .fade-exit-active {
              opacity: 0;
              transition: opacity 500ms;
            }
            @keyframes fadeInOut {
              0%,
              100% {
                opacity: 0;
              }
              50% {
                opacity: 1;
              }
            }
            .fade-enter-active {
              animation: fadeInOut 3s ease-in-out infinite;
            }
            .fade-exit-active {
              animation: fadeInOut 3s ease-in-out infinite;
            }

            .nav-item::before {
              content: '';
              position: absolute;
              bottom: -5px;
              left: 0;
              width: 100%;
              height: 2px;
              background-color: transparent;
              transition: background-color 0.3s ease-in-out;
            }
            .nav-item:hover::before {
              background-color: blue;
            }
          `}</style>
        </section>
      </main>
    </>
  );
};

export default Main;
