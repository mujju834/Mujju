import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
  // Example data array
  const educationData = [
    {
      id: 1,
      institution: 'Florida Atlantic University',
      degree: 'Masters in AIT (Advanced Information Technology)',
      date: 'Jan 2023 - May 2024',
      CGPA: '4/4',
      description: (
        <div>
          <p>I completed my masters at FAU and learned a plethora of exceptional concepts in various advanced courses. Some of the key courses included:</p>
          <ul className="list-disc list-inside">
            <li>CAP 5768: Intro to Data Science (A)</li>
            <li>CEN 5035: Software Engineering (A)</li>
            <li>ISM 6136: Data Mining/Predctve Analytics (A)</li>
            <li>CAP 6619: Deep Learning (A)</li>
            <li>ISM 6405: Advanced Business Analytics (A)</li>
            <li>CAP 5625: Computational Foundations AI (A)</li>
            <li>CNT 6167: Internet of Things (A)</li>
            <li>ISM 6026: Mgmt Info Systems & Tech (-A)</li>
            <li>COP 6731: Thry/Implmntl Database Systms (B)</li>
            <li>COT 5930: Digital Image Processing (A)</li>
          </ul>
          <p>Through these courses, I gained a deep understanding of data science, software engineering, predictive analytics, and AI foundations, which significantly contributed to my technical and analytical skills.</p>
        </div>
      ),
      imageUrl: '/images/fau.png' // Replace with the path to your image
    },
    {
      id: 2,
      institution: 'ISL Engineering College, Hyderabad',
      degree: 'Bachelor of Engineering - BE, Electrical Engineering and Technology',
      date: 'July 2018 - Aug 2021',
      grade: '8.0 CGPA',
      description: `I completed my Bachelor's degree in Electrical-Engineering&Technology at ISL Engineering College, Hyderabad. I have completed 6 semesters and got a CGPA of 7.5. 
      I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks,Power Systems, Digital Electronics, Electrical Circuits among others.`,
      imageUrl: '/images/isl.jpg' // Replace with the path to your image
    },
    {
      id: 3,
      institution: 'Govt Polytechnic',
      degree: 'Diploma - Electrical Engineering and Computers',
      date: 'June 2015 -May 2018',
      grade: '75%',
      description: 'I completed my Diploma in Electrical Engineering and Computers. I have taken courses in C Programming, Java Programming, Operating Systems, and Computer Networks,Basic Electrical Engineering, Power Systems, Digital Electronics, Electrical Circuits among others.',
      imageUrl: '/images/dip.jpg' // Replace with the path to your image
    }
  ];

  return (
    <div id='education' className="target-section bg-gray-900 text-white p-10">
      <h2 className="text-3xl font-bold text-center mb-6">Education</h2>
      <p className="text-center mb-10">
        My education has been a journey of self-discovery and growth. My educational details are as follows.
      </p>
      <div className="space-y-6">
        {educationData.map((edu) => (
          <div key={edu.id} className="education-entry bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-purple-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
              <div className="flex-shrink-0 w-24 h-24 relative mb-4 lg:mb-0">
                <Image
                  src={edu.imageUrl}
                  alt={`${edu.institution} logo`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
              <div className="flex-grow ml-4">
                <h3 className="text-xl font-bold">{edu.institution}</h3>
                <p className="text-purple-400">{edu.degree}</p>
                <p className="text-gray-400">{edu.date}</p>
                <div className="text-sm mt-2">{edu.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        #education {
          scroll-margin-top: 50px; /* Adjust this value as needed */
        }
        .education-entry:hover {
          box-shadow: 0 10px 30px -5px rgba(153, 102, 255, 0.5); /* Purple glow */
          border-color: #7e22ce; /* Darker purple border */
        }
      `}</style>
    </div>
  );
};

export default Education;
