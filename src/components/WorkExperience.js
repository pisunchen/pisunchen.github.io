import React from 'react';
import './WorkExperience.css';

const WorkExperience = () => {
  const workHistory = [
    {
      id: 1,
      logo: '/assets/alida.png',
      company: 'Alida',
      role: 'Software Developer Co-op',
      location: 'Vancouver, BC',
      dates: 'Sep 2022 - Aug 2023',
      fallback: 'A',
      url: 'https://www.alida.com',
      bullets: [
        'Developed 20+ React components with respective REST APIs for Dashboards and Analytics, improving data visualization and feature usability for over 1,100 tenants.',
        'Owned planning and development of a user-permission feature requested by Amazon Music, enhancing functionality for five user roles via multiple backend endpoints.',
        'Redesigned the shared date range picker, optimizing react-query calls and caching to achieve significant performance improvements when sharing dashboards.',
        'Delivered dashboard duplication functionality, enabling replication of infographics and calculations while maintaining accurate synchronization to PostgreSQL.'
      ],
      tags: ['TypeScript', 'React', 'Node', 'MaterialUI', 'PostgreSQL', 'Postman', 'Sinon', 'Koa', 'Jest', 'Looker']
    },
    {
      id: 2,
      logo: '/assets/trulioo.jpg',
      company: 'Trulioo',
      role: 'Software Engineer in Test Co-op',
      location: 'Vancouver, BC',
      dates: 'Jan 2022 - Aug 2022',
      fallback: 'T',
      url: 'https://www.trulioo.com',
      bullets: [
        'Designed and created 200+ automated test scripts for document verification using Jest, reducing regression testing time and enabling reliable biweekly releases.',
        'Led automation testing for internationalized document verification, implementing localization test coverage across 12 regions and reducing manual testing effort.',
        'Manually tested document verification across platforms and devices, executing comprehensive test cases to ensure functionality, usability, and user experience.',
        'Developed automated test suites for a web-based SaaS platform, improving the internal test framework adopted by multiple teams and ensuring robust code quality.',
        'Performed regression testing on biweekly production releases to maintain software quality standards.'
      ],
      tags: ['TypeScript', 'C#', 'Node', 'Jest', 'Postman', 'Kibana', 'Selenium WebDriver', 'Mocha', 'Chai']
    }
  ];

  const renderLogo = (job) => {
    return (
      <a href={job.url} target="_blank" rel="noopener noreferrer" className="work-logo-link" aria-label={`${job.company} website`} title={job.company}>
        <div className="work-icon">
          <img 
            src={job.logo} 
            alt={`${job.company} logo`} 
            className="company-logo"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="company-fallback" style={{ display: 'none' }}>
            {job.fallback}
          </div>
        </div>
      </a>
    );
  };

  return (
    <section className="work">
      <div className="work-card">
        <div className="work-header">
          <h2 className="section-title">Work Experience</h2>
        </div>
        <div className="work-items">
          {workHistory.map((job) => (
            <div key={job.id} className="work-item">
              {renderLogo(job)}
              <div className="work-details">
                <h3 className="job-title">{job.role} <span className="at">@</span> {job.company}</h3>
                <p className="job-meta">{job.location}, {job.dates}</p>
                {job.bullets && job.bullets.length > 0 && (
                  <ul className="work-bullets">
                    {job.bullets.map((line, idx) => (
                      <li key={idx} className="work-bullet">{line}</li>
                    ))}
                  </ul>
                )}
                {job.tags && job.tags.length > 0 && (
                  <div className="work-tech-stack">
                    {job.tags.map((tag, idx) => (
                      <span key={idx} className="work-tech-bubble">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
