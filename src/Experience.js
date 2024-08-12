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
        <>
          Developed new <strong>React components</strong>, implemented micro-services and <strong>backend endpoints</strong>, performed continuous unit and integration testing
        </>,
        <>
          Spearheaded planning, breakdown, and analysis meeting for a user permission epic, defining <strong>functional requirements</strong> for a feature request from Amazon Music, resulting in enhanced user roles
        </>,
        <>
          Refactored and integrated new shared date range picker component with <strong>MaterialUI</strong> and its endpoints, improving the outdated date picker’s performance by <strong>100% with optimized API calls</strong>
        </>,
        <>
          Enhanced customer experience by creating new endpoints leveraging <strong>LookML</strong> for dashboard duplication and retaining previous Looker infographics and calculations, improving usability and customer satisfaction
        </>,
        <>
          Collaborated with <strong>UX</strong> and <strong>product teams</strong> on product behavior considering technical edge cases, and contributed to Scrum <strong>sprint planning</strong> to maintain clear acceptance criteria and prevent scope creep
        </>,
      ],
      tags: ['TypeScript','React.js', 'Node.js', 'Koa.js', 'PostgreSQL', 'Web Development', 'MaterialUI'],
      logo: alidaLogo,
    },
    {
      company: 'Trulioo',
      title: 'Software Engineer in Test Co-op @ Trulioo',
      location: 'Vancouver, BC, Jan 2022 - Aug 2022',
      details: [
        <>
          Contributed to automating tests for a web-based SaaS product by capturing requirements and enhancing the <strong>test automation framework</strong>
        </>,
        <>
          Led the automation testing for internationalized hosted document verification, enabling <strong>localization verification</strong> for 12 languages, validating results to display correct information
        </>,
        <>
          Documented project details, testing methodologies, and environment setups on <strong>Confluence</strong> and bug findings on <strong>JIRA</strong>, ensuring clear references to team members, improving work transparency and timely resolution of issues
        </>,
        <>
          Engaged in <strong>regression testing</strong> on biweekly software releases, ensuring software met quality standards
        </>,
      ],
      tags: ['TypeScript', 'C#', 'Jest', 'Mocha', 'Chai'],
      logo: truliooLogo
    },
  ];

  return (
    <div className='container-experience' id="experience">
      <div className="heading">
        <span className="highlight">Experience</span>
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
