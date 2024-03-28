import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact, faHtml5, faCss3Alt, faJsSquare, faBootstrap, faNodeJs,
  faGitAlt, faGithub, faAws, faDocker, faPython,
  faFigma, faGit, faJs, faNpm
} from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';


const Skills = () => {
 



  return (
    <div id='skills' className="target-section bg-gray-900 text-white py-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-20">
        <div className="skills-container">
          <h3 className="text-2xl font-bold mb-6">Frontend</h3>
          <div className="grid grid-cols-3 gap-4">
            {/* Add FontAwesome icons for frontend skills */}
            <FontAwesomeIcon icon={faReact} size="4x" className="skill-icon" />
            <FontAwesomeIcon icon={faHtml5} size="4x" className="skill-icon" />
            <FontAwesomeIcon icon={faCss3Alt} size="4x" className="skill-icon" />
            <FontAwesomeIcon icon={faJs} size="4x" className="skill-icon" />
            <FontAwesomeIcon icon={faBootstrap} size="4x" className="skill-icon" />
            <FontAwesomeIcon icon={faFigma} size="4x" className="skill-icon" />
            {/* Add more icons */}
          </div>
        </div>

        <div className="skills-container">
          <h3 className="text-2xl font-bold mb-6">Backend</h3>
          <div className="grid grid-cols-3 gap-4">
            {/* Add FontAwesome icons for other skills */}
            <FontAwesomeIcon icon={faNodeJs} size="4x" className="skill-icon" />
            <FontAwesomeIcon icon={faGitAlt} size="4x" className="skill-icon" />
            <FontAwesomeIcon icon={faGithub} size="4x" className="skill-icon" />
            <FontAwesomeIcon icon={faAws} size="4x" className="skill-icon" />
            <FontAwesomeIcon icon={faDocker} size="4x" className="skill-icon" />
            <FontAwesomeIcon icon={faPython} size="4x" className="skill-icon" />
            <FontAwesomeIcon icon={faGit} size="4x" className="skill-icon" />
            <FontAwesomeIcon icon={faNpm} size="4x" className="skill-icon" />
            {/* Add more icons */}
          </div>
        </div>
      </div>

      <style jsx>{`

#skills{
  scroll-margin-top: 78px; /* Adjust this value as needed */
}
        .skills-container {
          width: 100%;
          max-width: 400px;
          background: #111827;
          border: 2px solid #2563EB;
          border-radius: 8px;
          padding: 2rem;
          box-shadow: 0 0 15px #2563EB;
        }
        .skill-icon {
          color: #2563EB;
          transition: transform 0.2s;
        }
        .skill-icon:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default Skills;
