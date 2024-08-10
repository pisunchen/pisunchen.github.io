import React, { useState } from 'react';
import './experience.css'
import truliooLogo from './images/trulioo.jpg'
import alidaLogo from './images/alida.png'

const ExperienceAccordion = () => {
  const experiences = [
    {
      company: 'Alida',
      title: 'Software Developer @ Alida',
      location: 'Vancouver, BC, Sep 2022 - Aug 2023',
      details: [
        'Developed new React components, implemented micro-services and backend endpoints',
        'Enhanced customer experience by creating new endpoints leveraging LookML for dashboard duplication and retaining previous Looker infographics and calculations, improving usability and customer satisfaction',
        'Collaborated with UX and product teams on product behavior considering technical edge cases, and contributed to Scrum sprint planning to maintain clear acceptance criteria and prevent scope creep',
      ],
      tags: ['TypeScript','React', 'Node', 'Web Development', 'MaterialUI'],
      logo: alidaLogo,
    },
    {
      company: 'Trulioo',
      title: 'Software Engineer in Test Co-op @ Trulioo',
      location: 'Vancouver, BC, Jan 2022 - Aug 2022',
      details: [
        'Contributed to automating tests for a web-based SaaS product by capturing requirements and enhancing the test automation framework',
        'Documented project details, testing methodologies, and environment setups on Confluence and bug findings on JIRA, ensuring clear references to team members, improving work transparency and timely resolution of issues',
        'Engaged in regression testing on biweekly software releases, ensuring software met quality standards',
      ],
      tags: ['TypeScript','Jest', 'Mocha', 'TestRail'],
      logo: truliooLogo
    },
  ];

  return (
    <div className='container-experience' id="experience">
      <div className="heading">
        <span className="titles">Experience</span>
      </div>
      <div className="experience-accordion">
        {experiences.map((experience, index) => (
          <AccordionItem key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
};

const AccordionItem = ({ experience }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={toggleOpen}>
        <img src={experience.logo} alt={`${experience.company} logo`} className="logo-image" />
        <div className="accordion-title">{experience.title}</div>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p className="location">{experience.location}</p>
          <ul className="details">
            {experience.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
            <div className="tags">
              {experience.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExperienceAccordion;
