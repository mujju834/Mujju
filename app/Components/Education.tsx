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
        description: 'I completed my masters in FAU and learned a lot of things.',
        imageUrl: '/images/fau.png' // Replace with the path to your image
      },
      
      {
      id: 2,
      institution: 'ISL Engineering College, Hyderabad',
      degree: 'Bachelor of Engineering - BE, Electrical Engineering and Computers',
      date: 'July 2018 - Aug 2021',
      grade: '8.0 CGPA',
      description: 'I completed my Bachelor\'s degree in Information Technology at ISL Engineering College, Hyderabad. I have completed 6 semesters and got a CGPA of 8.0.  I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.',
      imageUrl: '/images/isl.jpg' // Replace with the path to your image
    },
    {
        id: 3,
        institution: 'Govt Polytechnic',
        degree: 'Diploma - Electrical Engineering and Computers',
        date: 'June 2015 -May 2018',
        grade: '75%',
        description: 'I completed my Diploma in Electrical Engineering and Computers',
        imageUrl: '/images/dip.jpg' // Replace with the path to your image
      }
   
    // Add more education entries as needed
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
                <p className="text-sm mt-2">{edu.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <style jsx>{`
      #education{
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