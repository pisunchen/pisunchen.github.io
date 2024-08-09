import React from 'react';
import ProjectCard from './ProjectCard';
import analytics from './images/analytics.png'; // Example images
import fastTypingImg from './images/typing.png';
import er_diagram from './images/er_diagram.png';
import imagoImg from './images/profile.png';

const Projects = () => {
    const projects = [
        {
            title: 'Alida Hacks 2023',
            description: '2nd place in company Hackathon',
            technologies: ['JavaScript', 'React', 'Node.js', 'SQL', 'OpenAI API', 'WhisperAPI'],
            image: analytics,
        },
        {
            title: 'Fast Fingers',
            description: 'Side Project | Typing Speed Test Web App',
            technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
            image: fastTypingImg,
        },
        {
            title: 'onStorage',
            description: 'Side Project | Storage Company Database',
            technologies: ['SQL', 'Java', 'Oracle DBMS', 'Swing'],
            image: er_diagram,
        },
    ];

    return (
        <div className='container-projects-outer'>
            <div className="heading">
                <span className="titles">Projects</span>
            </div>
            <div className="container-projects">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        image={project.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
