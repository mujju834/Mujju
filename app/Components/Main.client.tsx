import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase,faBars,faTimes,faLink, faExternalLinkAlt  } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Main = () => {
  const titles = useMemo(() => ['Blockchain Developer', 'Full Stack Maestro', 'Cloud Architect', 'DevOps Specialist', 'Networking Enthusiast'], []);
  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const [fade, setFade] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Title cycle effect
    const cycleTitles = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTitle((prevTitle) => {
          const currentIndex = titles.indexOf(prevTitle);
          const nextIndex = (currentIndex + 1) % titles.length;
          return titles[nextIndex];
        });
        setFade(true);
      }, 500);
    }, 3000);

    // Scroll to about-section on initial load
    const targetElement = document.getElementById('about-section');
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }

    // Smooth scroll effect for navigation
    const handleSmoothScroll = (event :any) => {
      if (event.target.matches('.scroll-target')) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    // Clean up
    return () => {
      clearInterval(cycleTitles);
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, [titles]); // Depend on titles to prevent multiple intervals





  return (
    <>
      <Head>
        <title>Mohammad Mujahid&apos;s Portfolio</title>
        <meta name="description" content="Mohammad Mujahid - A Content Creator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


{/* new navbar with mobile response */}
 {/* <header className="fixed top-0 w-full z-30 bg-gray-900 text-white p-8">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faBriefcase} className="text-white" />
                    <a href="#about-section" className="text-white font-bold">Portfolio</a>
                </div>

              
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                    </button>
                </div>

                <nav className={`${isOpen ? 'block' : 'hidden'} md:block`}>
                    <ul className="flex flex-col md:flex-row justify-end space-x-0 md:space-x-3 items-center md:items-center">
                        <li><a href="#about-section" className="scroll-target nav-item text-white hover:text-gray-300 px-1 md:px-4 relative">About</a></li>
                        <li><a href="#skills" className="scroll-target nav-item text-white hover:text-gray-300 px-1 md:px-4 relative">Skills</a></li>
                        <li><a href="#experience" className="scroll-target nav-item text-white hover:text-gray-300 px-1 md:px-4 relative">Professional experience</a></li>
                        <li><a href="#projects" className="scroll-target nav-item text-white hover:text-gray-300 px-1 md:px-4 relative">Projects</a></li>
                        <li><a href="/blog" className="nav-item text-white hover:text-gray-300 px-1 md:px-4 relative">My-Blogs-on-Tech</a></li>
                        <li><a href="#education" className="scroll-target nav-item text-white hover:text-gray-300 px-1 md:px-4 relative">Education</a></li>
                        <li><a href="#contact" className="scroll-target nav-item text-white hover:text-gray-300 px-1 md:px-4 relative">Contact</a></li>
                    </ul>
                </nav>

                <div className="hidden md:block">
                    <a href="https://github.com/mujju834" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">GitHub Profile</a>
                </div>
            </div>
        </header> */}


             {/* new navbar with mobile responsiveness */}
             <header className="fixed top-0 w-full z-30 bg-gray-900 text-white p-8">
    <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faBriefcase} className="text-white" />
            <a href="#about-section" className="scroll-target text-white font-bold">Portfolio</a>
        </div>

        <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
        </div>

        <nav className={`fixed inset-0 flex flex-col items-center justify-center transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-linear z-50 md:relative md:transform-none md:transition-none bg-gray-900 md:bg-transparent p-8 md:p-0 md:block`}>
            <ul className="space-y-6 md:space-y-0 md:flex md:space-x-6 items-center justify-center w-full h-full md:h-auto">
                <li className="md:hidden w-full text-right">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </li>
                <li><a href="#about-section" className="scroll-target nav-item text-white hover:text-gray-300 px-1 md:px-4 relative" onClick={closeMenu}>About</a></li>
                <li><a href="#skills" className="scroll-target nav-item text-white hover:text-gray-300 px-1 md:px-4 relative" onClick={closeMenu}>Skills</a></li>
                <li><a href="#experience" className="scroll-target nav-item text-white hover:text-gray-300 px-1 md:px-4 relative" onClick={closeMenu}>Professional experience</a></li>
                <li><a href="#projects" className="scroll-target nav-item text-white hover:text-gray-300 px-1 md:px-4 relative" onClick={closeMenu}>Projects</a></li>
                <li><a href="/blog" className="nav-item text-white hover:text-gray-300 px-1 md:px-4 relative" onClick={closeMenu}>My-Blogs-on-Tech</a></li>
                <li><a href="#education" className="scroll-target nav-item text-white hover:text-gray-300 px-1 md:px-4 relative" onClick={closeMenu}>Education</a></li>
                <li><a href="#contact" className="scroll-target nav-item text-white hover:text-gray-300 px-1 md:px-4 relative" onClick={closeMenu}>Contact</a></li>
                <li><a href="https://github.com/mujju834" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded md:mt-0 mt-4">GitHub Profile</a></li>
            </ul>
        </nav>
    </div>
</header>







      <main className="pt-24 bg-gray-900 text-white">
        <section className="flex items-center justify-center p-20">
          <div className="flex flex-col md:flex-row items-center">
          <div className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-purple-600">
  <Image
    src="/images/My-img.jpeg" 
    alt="Profile Picture"
    layout="fill"
    objectFit="cover"
    objectPosition="68% center"
  />
</div>


<div id="about-section" className="scroll-section text-center md:text-left md:pl-6 -mt-20">
              <h1 className="text-6xl font-bold">Hi, I am <br/> Mohammad Mujahid</h1>
              <p className={`text-purple-500 text-3xl font-light mt-4 ${fade ? 'fade-enter-active' : 'fade-exit-active'}`}>
                {currentTitle}
              </p>
              <p className="mt-4 max-w-2xl">
                
              As a full-stack maestro, I blend front-end elegance with robust back-end functionalities, creating cohesive and 
              dynamic applications. My blockchain expertise fortifies platforms with decentralization, infusing trust and 
              security into every transaction. In the DevOps arena, I streamline workflows, ensuring seamless integration 
              and deployment that accelerate the software development lifecycle. My ventures in cloud computing architect 
              scalable solutions, harnessing distributed power for peak performance. Through a deep understanding of networking,
               I construct infrastructures that are both resilient and efficient. Each layer of technology is a strategic 
               move in my quest to redefine the digital landscape of businesses.
               <br />
               <span className="font-bold">
  My-Company: <a href="https://mastnov-tech.vercel.app/" target="_blank" className="text-blue-500 hover:underline">
    Visit our site <FontAwesomeIcon icon={faExternalLinkAlt} className="text-blue-500" />
  </a>
</span>

  </p>
     
              <a href="/Resume/Mujju--Resume.pdf" download="Mohammad-Mujahid_Resume.pdf" className="mt-5 inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">My Resume</a>
            </div>
          </div>

          <style jsx>{`

.scroll-section::before {
  content: '';
  display: block;
  height: 120px; 
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
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
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
          bottom: -5px; // Adjusted to appear at the bottom
          left: 0;
          width: 100%; // Span the full width of the nav item
          height: 2px; // Thickness of the blue line
          background-color: transparent;
          transition: background-color 0.3s ease-in-out;
        }
        .nav-item:hover::before {
          background-color: blue; // Blue line appears on hover
        }



      `}</style>
        </section>
      </main>
    </>
  );
};

export default Main;
