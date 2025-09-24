import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 0,
      name: 'AnalyticsAI',
      title: 'AnalyticsAI',
      subtitle: 'AI-powered analytics platform for data visualization and business intelligence',
      description: 'A comprehensive analytics platform that leverages artificial intelligence to provide real-time data visualization and business intelligence insights. The platform processes large datasets and presents actionable insights through interactive dashboards.',
      techStack: ['JavaScript', 'React', 'Node.js', 'SQL', 'OpenAI API', 'WhisperAPI'],
      images: ['/assets/analytics.png'],
      link: 'https://www.youtube.com/watch?v=ineS6dOIyhg'
    },
    {
      id: 1,
      name: 'onStorage',
      title: 'onStorage',
      subtitle: 'Warehouse storage database with 3NF design and rental management',
      description: 'Built a warehouse storage database with teammate collaboration, supporting space rentals and member identification. Designed the schema, wrote creation/management scripts, and normalized to 3NF to reduce data anomalies.',
      techStack: ['SQL', 'Java', 'Oracle DBMS', 'Swing'],
      images: ['/assets/er_diagram.png'],
      link: 'https://github.com/pisunchen/Storage-Company---Database-APP'
    },
    {
      id: 2,
      name: 'Image Classifier',
      title: 'Image Classifier',
      subtitle: 'Image recognition project using visual features and a simple classifier',
      description: 'Built an image recognition project that learns visual patterns from photos and categorizes different scene types. Created a compact visual vocabulary and trained a lightweight model to make clear, consistent predictions.',
      techStack: ['Python', 'scikit-learn', 'NumPy', 'Matplotlib'],
      images: ['/assets/classifier.png'],
      link: 'https://github.com/your-username/image-classifier'
    },
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        {/* Left Sidebar */}
        <div className="projects-sidebar">
          <h2 className="sidebar-title">Projects</h2>
          <div className="project-list">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`project-item ${selectedProject === project.id ? 'active' : ''}`}
                onClick={() => setSelectedProject(project.id)}
              >
                {project.name}
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="project-content">
          {projects[selectedProject] && (
            <div className="project-details">
              <h1 className="project-title">{projects[selectedProject].title}</h1>
              <h2 className="project-subtitle">{projects[selectedProject].subtitle}</h2>
              
              <div className="project-info">
                <div className="project-text">
                  <p className="project-description">{projects[selectedProject].description}</p>
                  <div className="tech-stack">
                    {projects[selectedProject].techStack.map((tech, index) => (
                      <span key={index} className="tech-bubble">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={projects[selectedProject].link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                  >
                    View Project →
                  </a>
                </div>
                
                <div className="project-images">
                  {(() => {
                    const firstImage = projects[selectedProject].images && projects[selectedProject].images[0];
                    return (
                      <div className="project-image-container">
                        {firstImage ? (
                          <img 
                            src={firstImage} 
                            alt={`${projects[selectedProject].title} screenshot`}
                            className="project-image"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div className="image-placeholder" style={{ display: firstImage ? 'none' : 'flex' }}>
                          <span>Image</span>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
