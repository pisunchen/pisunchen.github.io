import React from 'react';
import ProjectCard from './ProjectCard';
import analytics from '../images/analytics.png'; // Example images
import fastTypingImg from '../images/typing.png';
import er_diagram from '../images/er_diagram.png';
import classifier from '../images/classifier.png'

const Projects = () => {
    const projects = [
        {
            title: 'Alida Hacks 2023',
        description: '2nd place in company Hackathon',
            technologies: ['JavaScript', 'React', 'Node.js', 'SQL', 'OpenAI API', 'WhisperAPI'],
            image: analytics,
            link: 'https://www.youtube.com/watch?v=ineS6dOIyhg'
        },
        {
            title: 'onStorage',
            description: 'Side Project | Storage Company Database',
            technologies: ['SQL', 'Java', 'Oracle DBMS', 'Swing'],
            image: er_diagram,
            link: 'https://github.com/ethanyichen/Storage-Company---Database-APP'
        },
        {
            title: 'Image Classifier',
            description: 'Side Project | Multi-Class Image Classifier',
            technologies: ['Python', 'scikit-learn', 'NumPy', 'Matplotlib'],
            image: classifier,
            // link: 'https://github.com/ethanyichen/Storage-Company---Database-APP'
        },
        {
            title: 'Fast Typers',
            description: 'Side Project | Typing Speed Test Web App',
            technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
            image: fastTypingImg,
            link: 'https://pisunchen.github.io/typing_game/'
        },
    ];

    return (
        <div className='container-projects-outer' id="projects">
            <div className="heading">
                <span className="highlight">Projects</span>
            </div>
            <div className="container-projects">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        image={project.image}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
