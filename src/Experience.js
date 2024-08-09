import React, { useState } from 'react';
import './experience.css'
import truliooLogo from './images/trulioo.jpg'
import alidaLogo from './images/alida.png'

const data = [
  {
    name: 'Alida',
    title: 'Software Developer Co-op',
    details: [
      'Developed new React components, implemented micro-services and backend endpoints',
      'Enhanced customer experience by creating new endpoints leveraging LookML for dashboard duplication and retaining previous Looker infographics and calculations, improving usability and customer satisfaction',
      'Collaborated with UX and product teams on product behavior considering technical edge cases, and contributed to Scrum sprint planning to maintain clear acceptance criteria and prevent scope creep'
    ],
    location: '📍 Vancouver, BC, May 2023 - Dec 2023',
    logo: alidaLogo,
  },
  {
    name: 'Trulioo',
    title: 'Software Engineer in Test Co-op',
    details: [
      'Contributed to automating tests for a web-based SaaS product by capturing requirements and enhancing the test automation framework',
      'Documented project details, testing methodologies, and environment setups on Confluence and bug findings on JIRA, ensuring clear references to team members, improving work transparency and timely resolution of issues',
      'Engaged in regression testing on biweekly software releases, ensuring software met quality standards',
    ],
    location: '📍 Vancouver, BC, May 2023 - Dec 2023',
    logo: truliooLogo,
  }
];

function Experience() {
    const [selectedItem, setSelectedItem] = useState(data[0]);
  
    return (
      <div className="container" id="experience">
        <div className="sidebar">
          <div className="heading">
            <span className="titles">Experience</span>
          </div>
          {data.map((item, index) => (
            <div
              key={index}
              className={`sidebar-item ${item === selectedItem ? 'active' : ''}`}
              onClick={() => setSelectedItem(item)}
            >
              <img className="logo-image" src={item.logo} alt="Company Logo" />
              {item.title + ' @ ' +item.name}
            </div>
          ))}
        </div>
        <div className="content">
          <h2>{selectedItem.location}</h2>
          <ul className="details-list">
            {selectedItem.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

export default Experience;
