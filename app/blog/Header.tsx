import { useState } from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { ClipLoader } from 'react-spinners';

type Blog = {
  title: string;
  description: string;
  date: string;
  image: string;
  filePath: string;
};

const devopsBlogs: Blog[] = [
    {
      title: 'Automating Image Processing with AWS Lambda and S3: A Detailed Guide',
      description: 'This comprehensive guide walks you through setting up an automated image processing pipeline using AWS Lambda and S3, including troubleshooting common issues.',
      date: 'July 5, 2024',
      image: '/images/Devops-1.png', // Adjust the image path as needed
      filePath: './blogs/devops-beginners.docx', // Use relative path to the document
    },
    // ... Add other DevOps blogs here
  ];
  

const cloudBlogs: Blog[] = [
  {
    title: 'Cloud Computing Basics',
    description: 'An introduction to cloud computing and its benefits for businesses of all sizes.',
    date: 'April 10, 2024',
    image: '/images/fau.png',
    filePath: './blogs/cloud-computing-basics.docx', // Use relative path to the document
  },
  // ... Add other Cloud blogs here
];

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>('devops'); // Default to 'devops'
  const [docContent, setDocContent] = useState<string>('');
  const [isReading, setIsReading] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleReadMore = async (filePath: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL_File}convert?filePath=${encodeURIComponent(filePath)}`);
      const data = await response.json();
      setDocContent(data.html);
      setIsReading(true); // Show the document content
    } catch (error) {
      console.error('Error fetching document contents:', error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const handleBackClick = () => {
    setIsReading(false); // Show the blog list
    setDocContent(''); // Clear the document content
  };

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    setIsReading(false); // Show the blog list
    setDocContent(''); // Clear the document content
  };

  return (
    <>
      <Head>
        <title>My Blogs - Mohammad Mujahid</title>
        <meta name="description" content="Read my latest blogs on technology and development." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed top-0 w-full z-30 bg-gray-900 text-white p-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faBriefcase} className="text-white" />
            <a href="/" className="text-white font-bold">
              Portfolio
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <a 
              href="#devops-section" 
              className="scroll-target nav-item text-white hover:text-gray-300 px-1 md:px-4 relative"
              onClick={() => handleSectionClick('devops')}
            >
              DevOps Blogs
            </a>
            <a 
              href="#cloud-section" 
              className="scroll-target nav-item text-white hover:text-gray-300 px-1 md:px-4 relative"
              onClick={() => handleSectionClick('cloud')}
            >
              Cloud Blogs
            </a>
          </div>

          <div className="hidden md:block">
            <a href="https://github.com/mujju834" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">GitHub Profile</a>
          </div>
        </div>
      </header>

      <main className="pt-20 bg-gray-900 text-white min-h-screen">
        <section className="py-4">
          <div className="container mx-auto px-4">
            {!isReading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activeSection === 'devops' && devopsBlogs.map((blog, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
                      <p className="text-gray-400 mb-2">{blog.date}</p>
                      <p className="mb-4">{blog.description}</p>
                      <button
                        onClick={() => handleReadMore(blog.filePath)}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
                {activeSection === 'cloud' && cloudBlogs.map((blog, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
                      <p className="text-gray-400 mb-2">{blog.date}</p>
                      <p className="mb-4">{blog.description}</p>
                      <button
                        onClick={() => handleReadMore(blog.filePath)}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <button
                  onClick={handleBackClick}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 mb-4"
                >
                  Back
                </button>
                {isLoading ? (
                  <div className="flex justify-center items-center h-96">
                    <ClipLoader color="#ffffff" loading={isLoading} size={50} />
                  </div>
                ) : (
                  <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">Document Content</h2>
                    <div dangerouslySetInnerHTML={{ __html: docContent }} />
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </main>

      <style jsx global>{`
        html, body {
          height: 100%;
          margin: 0;
          background-color: #1a202c; /* Use a darker background color */
        }

        .h-96 {
          height: 24rem;
        }
      `}</style>
    </>
  );
};

export default Header;
