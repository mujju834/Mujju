import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'; // Using faBriefcase for professional experience

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      company: 'Tata Consultancy Services (TCS), Hyderabad. India',
      role: 'Full Stack Developer',
      date: 'December 2020 – November 2022',
      description: 'Engaged in developing robust, full-stack applications, focusing on both the client and server sides to deliver comprehensive business solutions. Collaborated closely with project managers, UX/UI designers, and engineers to create scalable and efficient systems.',
      imageUrl: '/images/TCS.png', // Ensure you have this image in your public/images directory or replace with an appropriate path
      contributions: [
        'Spearheaded the development of a dynamic e-commerce application designed for high-volume transactions, involving extensive backend reengineering and frontend redesign.',
        'Contributed significantly to the overhaul of a legacy ERP system, employing modern development practices to enhance functionality and user engagement.',
        'Developed microservices for automating business operations, streamlining workflows, and reducing human error across various business processes.'
      ],
      tasks: [
        'Interpreted complex requirements to create detailed technical specifications for each project.',
        'Developed resilient web services and responsive user interfaces across multiple projects.',
        'Implemented comprehensive automated testing strategies to ensure robustness and reliability of software solutions.',
        'Managed backend integrations and database management using contemporary frameworks and technologies.'
      ],
      achievements: [
        'Successfully launched an e-commerce platform that enhanced the client\'s online presence and sales capabilities, leading to a 30% increase in online revenue.',
        'Recognized with the “Innovator of the Year” award for exceptional problem-solving and innovative solutions in enterprise applications.',
        'Led a team that delivered a revamped ERP system on time, increasing business efficiency by 35%.'
      ],
      technologies: 'React, Angular, HTML5, CSS3, Bootstrap, TypeScript, Node.js, Express, Golang, PHP, MongoDB, MySQL, Sequelize, Jenkins, Docker, Kubernetes, AWS, Git, Bitbucket, JIRA, Webpack, npm'
    },
    {
        id: 2,
        company: 'Future Vision LLC, Ft.Lauderdale. Florida USA',
        role: 'DevOps Engineer',
        date: 'January 5th - May 5th 2024',
        description: 'Focused on automating and optimizing operational processes to streamline deployment cycles and enhance infrastructure resilience using a combination of cloud technologies and automation tools.',
        imageUrl: '/images/future.png', // Placeholder - Replace with actual image path
        contributions: [
          'Developed and maintained CI/CD pipelines to automate the software release process.',
          'Implemented Infrastructure as Code (IaC) using tools like Terraform and Ansible.',
          'Set up comprehensive monitoring and logging using Prometheus and Grafana.'
        ],
        tasks: [
          'Automated various build and deployment tasks reducing deployment time by 50%.',
          'Integrated security practices into the CI/CD pipeline to ensure secure deployments.',
          'Optimized performance tuning of live production environments.'
        ],
        achievements: [
          'Enhanced system reliability and scalability, leading to a significant reduction in downtime and operational costs.'
        ],
        technologies: 'Terraform, Ansible, Prometheus, Grafana, Docker, Kubernetes, AWS, Git, Jenkins'
      },
      {
        id: 1,
        company: 'Freelance Blockchain Developer on Fiverr, Remote',
        role: 'Blockchain Developer',
        date: '2018 – 2022',
        description: 'Specialized in designing and implementing secure and efficient blockchain-based solutions for a diverse range of international clients. Developed smart contracts, decentralized applications (dApps), and contributed to blockchain protocol developments.',
        imageUrl: '/images/fiverr.png', // Placeholder - Replace with actual image path
        contributions: [
          'Designed and developed secure smart contracts using Solidity for Ethereum-based applications.',
          'Built and deployed decentralized applications (dApps) on various blockchain platforms including Ethereum, Binance Smart Chain, and Polygon.',
          'Enhanced features and optimized performance of open-source blockchain protocols.'
        ],
        tasks: [
          'Conducted code audits to identify and rectify security vulnerabilities.',
          'Developed APIs for blockchain interactions to enable third-party service integrations.',
          'Provided expert consultation to clients on blockchain adoption and architected custom solutions.'
        ],
        achievements: [
          'Maintained a 5-star rating on Fiverr across multiple years due to exceptional client service and successful project outcomes.',
          'Recognized by clients for innovative solutions that significantly enhanced operational efficiency and reduced costs.',
          'Recognized for active participation and contributions to various blockchain development forums and communities.'
        ],
        technologies: 'Solidity, JavaScript, Python, Truffle, Hardhat, Ganache, Metamask, Web3.js, IPFS, Docker, Kubernetes, GitHub Actions'
      }
  ];

  return (
    <div id='experience' className="target-section bg-gray-900 text-white p-10">
      <h2 className="text-3xl font-bold text-center mb-6">Professional Experience</h2>
      <p className="text-center mb-10">
        Below is a summary of my professional experience, highlighting my roles and contributions to each organization.
      </p>
      <div className="space-y-6">
        {experienceData.map((exp) => (
          <div key={exp.id} className="experience-entry bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
              <div className="flex-shrink-0 w-24 h-24 relative mb-4 lg:mb-0">
                <Image
                  src={exp.imageUrl}
                  alt={`${exp.company} logo`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
              <div className="flex-grow ml-4">
                <h3 className="text-xl font-bold">{exp.company}</h3>
                <p className="text-purple-400">{exp.role}</p>
                <p className="text-gray-400">{exp.date}</p>
                <p className="text-sm mt-2">{exp.description}</p>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-blue-400">Contributions:</h4>
                  <ul className="list-disc ml-5 text-sm text-gray-300">
                    {exp.contributions.map((contribution, index) => (
                      <li key={index}>{contribution}</li>
                    ))}
                  </ul>
                  <h4 className="text-lg font-semibold text-green-400 mt-3">Tasks:</h4>
                  <ul className="list-disc ml-5 text-sm text-gray-300">
                    {exp.tasks.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                  <h4 className="text-lg font-semibold text-red-400 mt-3">Achievements:</h4>
                  <ul className="list-disc ml-5 text-sm text-gray-300">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                  <p className="mt-2 text-orange-400"><strong>Technologies Used:</strong> {exp.technologies}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <style jsx>{`
      #experience {
        scroll-margin-top: 50px; /* Adjust this value as needed */
      }
      .experience-entry:hover {
        box-shadow: 0 10px 30px -5px rgba(153, 102, 255, 0.5); /* Purple glow */
        border-color: #7e22ce; /* Darker purple border */
      }
      `}</style>
    </div>
  );
};

export default Experience;
