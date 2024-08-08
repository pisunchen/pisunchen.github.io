import React, { useState } from 'react';
import './experience.css'

const data = [
  {
    name: 'Alida',
    title: 'Software Developer Co-op',
    details: [
      'Developed new React components, implemented micro-services and backend endpoints using Node.js along Koa.js, performed continuous unit and integration testing to ensure code correctness and validate user experience',
      'Spearheaded planning, breakdown, and analysis meeting for a user permission epic, defining functional requirements for a feature request from Amazon Music, resulting in enhanced user roles functionality',
      'Refactored and integrated new shared date range picker component with MaterialUI and its endpoints, improving the outdated date picker’s performance by 100% with optimized API calls, enabling seamless dashboard sharing',
      'Enhanced customer experience by creating new endpoints leveraging LookML for dashboard duplication and retaining previous Looker infographics and calculations, improving usability and customer satisfaction',
      'Collaborated with UX and product teams on product behavior considering technical edge cases, and contributed to Scrum sprint planning to maintain clear acceptance criteria and prevent scope creep'
    ]
  },
  {
    name: 'Trulioo',
    title: 'Software Engineer in Test Co-op',
    details: [
      'Contributed to automating tests for a web-based SaaS product by capturing requirements and enhancing the test automation framework',
      'Tested changes from developers, documenting test cases covering happy paths and edge cases, writing detailed notes on bugs that could be replicated, ensuring thorough testing and communication with the development team',
      'Led the automation testing for internationalized hosted document verification, enabling localization verification for 12 languages by passing locales to the client and validating results to display correct information',
      'Documented project details, testing methodologies, and environment setups on Confluence and bug findings on JIRA, ensuring clear references to team members, improving work transparency and timely resolution of issues',
      'Engaged in regression testing on biweekly software releases, ensuring software met quality standards',
    ]
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
              {item.name}
            </div>
          ))}
        </div>
        <div className="content">
          <h2>{selectedItem.title} @ {selectedItem.name}</h2>
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
