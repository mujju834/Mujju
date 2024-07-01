
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact, faHtml5, faCss3Alt, faJsSquare, faBootstrap, faNodeJs,
  faGitAlt, faGithub, faAws, faDocker, faPython,
  faFigma, faGit, faJs, faNpm , faGitlab,
  faJenkins,
  faDigitalOcean,
  faVuejs,
  faAngular, faSass,
  faMicrosoft,
  faPhp,
  faBitcoin,
  faEthereum
} from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';

const Skills = () => {
  return (
    <div id='skills' className="target-section bg-gray-900 text-white py-10 px-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-20">
       

{/* Devops skills */}
<div className="skills-container">
          <h3 className="text-2xl font-bold mb-6">Networking</h3>
          <div className="grid grid-cols-3 gap-4">
            
          <div className="skill-icon">
              <img src="/icons/apache.png" alt="TypeScript" style={{ width: '64px', height: '64px' }} />
              <p>Apache</p>
            </div>
             
    
            <div className="skill-icon">
              <img src="/icons/linux.png" alt="TypeScript" style={{ width: '64px', height: '64px' }} />
              <p>Linux</p>
            </div>

            <div className="skill-icon">
              <img src="/icons/tcp.png" alt="TypeScript" style={{ width: '64px', height: '64px' }} />
              <p>TCP/IP</p>
            </div>

            <div className="skill-icon">
              <img src="/icons/firewall.png" alt="TypeScript" style={{ width: '64px', height: '64px' }} />
              <p>FireWall</p>
            </div>

            <div className="skill-icon">
              <img src="/icons/vpn.png" alt="TypeScript" style={{ width: '64px', height: '64px' }} />
              <p>VPN</p>
            </div>

            <div className="skill-icon">
              <img src="/icons/ids.png" alt="TypeScript" style={{ width: '64px', height: '64px' }} />
              <p>IDS/IPS</p>
            </div>

            <div className="skill-icon">
              <img src="/icons/ssh.png" alt="TypeScript" style={{ width: '64px', height: '64px' }} />
              <p>SSH</p>
            </div>

            <div className="skill-icon">
              <img src="/icons/dhcp.png" alt="TypeScript" style={{ width: '64px', height: '64px' }} />
              <p>DHCP</p>
            </div>

            <div className="skill-icon">
              <img src="/icons/routing.png" alt="TypeScript" style={{ width: '64px', height: '64px' }} />
              <p>Routing-Protocols</p>
            </div>

            <div className="skill-icon">
              <img src="/icons/switching.png" alt="TypeScript" style={{ width: '64px', height: '64px' }} />
              <p>Switching</p>
            </div>

            <div className="skill-icon">
              <img src="/icons/powershell.png" alt="TypeScript" style={{ width: '64px', height: '64px' }} />
              <p>PowerShell</p>
            </div>

            <div className="skill-icon">
              <img src="/icons/Nagios.png" alt="TypeScript" style={{ width: '64px', height: '64px' }} />
              <p>Nagios</p>
            </div>

            <div className="skill-icon">
              <img src="/icons/wireshark.png" alt="TypeScript" style={{ width: '64px', height: '64px' }} />
              <p>WireShark</p>
            </div>

            
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
          // color: #2563EB;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.2s;
        }
        .skill-icon p {
          margin-top: 0.5rem;
          color: #ffffff;
          font-size: 0.875rem; /* Tailwind's text-sm */
        }
        .skill-icon:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default Skills;