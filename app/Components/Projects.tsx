// Projects.tsx
const projectsData = [
   
  {
    name: 'Mujjus Ecommerce store',
    description: 'At MERN Store, we pride ourselves on offering an exceptional online shopping experience, bringing you a wide range of high-quality products right to your doorstep. Whether youre looking for the latest electronics, trendy fashion, or everyday essentials, we have something for everyone.',
    tech: ['React Js', 'Redux','Redux-thunk', 'SCSS', 'Tailwind CSS', 'Nodejs', 'Expressjs', 'Mongodb'],
    image: '/images/Ecommerce1.png',
    liveUrl: 'https://mujju-ecommerce-front.onrender.com/',
    codeUrl: 'https://github.com/mujju834/MUJJU-ECOMMERCE.git',
  },
    {
      name: 'Child-Care Management',
      description: 'Created a child care management website which has many functionalites vist viewcode to understand my project',
      tech: ['React Js', 'Redux', 'SCSS', 'Tailwind CSS', 'Nodejs', 'Expressjs', 'Mongodb'],
      image: '/images/pr-2.png',
      liveUrl: 'https://main--childd.netlify.app',
      codeUrl: 'https://github.com/mujju834/FullstackMern',
    },
    {
      name: 'Pet-Care Management',
      description: 'Created a Pet-Care Management website which has many functionalites vist viewcode to understand my project',
      tech: ['React Js', 'Redux', 'Tailwind CSS', 'Nodejs', 'Expressjs', 'Mongodb'],
      image: '/images/Petcare.png',
      liveUrl: 'https://se-petcare.netlify.app',
      codeUrl: 'https://github.com/mujju834/Petcare-frontend',
    },
    {
      name: 'MUJJUS-GPT',
      description:'MUJJUS-GPT is an innovative, personalized ChatGPT-like platform tailored for streamlined interactions and functionality. Designed using React JS, the front-end delivers a responsive and intuitive user interface, enabling users to engage effortlessly with the system',
      tech: ['React Js',  'CSS', 'Nodejs', 'Expressjs', 'API'],
      image: '/images/GPT.png',
      liveUrl: 'https://gpt-frontend-wtr1.onrender.com/',
      codeUrl: 'https://github.com/mujju834/gpt-frontend.git',
    },
    {
      name: 'MUJJUS-COFFEE BUSINESS',
      description:'MUJJUS is a web application designed for coffee shops, aiming to streamline operations through a series of interconnected services that manage different aspects of the business. The application utilizes microservices architecture to ensure scalability and maintainability, with each service handling a specific part of the business logic.',
      tech: ['React Js',  'CSS', 'Nodejs', 'Expressjs', 'API', 'gRPC', 'Microservices'],
      image: '/images/MUJJUS-COFFEE.png',
      liveUrl: 'https://coffee-web-vjew.onrender.com/',
      codeUrl: 'https://github.com/mujju834/coffee-web',
    }
    // ... Add other projects here
  ];
  
  const Projects: React.FC = () => {
    return (
      <div id='projects' className="target-section bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
          <p className="text-center mb-12">
            I have worked on this Full-Stack projects. Here are some of my projects.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <img src={project.image} alt={project.name} className="rounded-lg mb-4" />
                <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="bg-purple-700 text-sm rounded px-2 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Project
                  </a>
                  <a
                    href={project.codeUrl}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
        #projects{
          scroll-margin-top: 34px; /* Adjust this value as needed */
        }

        `}</style>
      </div>


      
    );
  };
  
  export default Projects;
  
  