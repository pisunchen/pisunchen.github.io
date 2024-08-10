import React, { useEffect } from 'react';
import './navigation.css';
import resume from './resume/Pisun_Chen_Lai_Resume.pdf';

function Landing() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.nav');
      if (window.scrollY > 0) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <div className="nav">
        <div className="nav-title">
          <a href="#landing">Pisun Chen Lai</a>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href={resume} target="_blank" className="resume-link">Resume</a>
        </div>
    </div>
  );
}

export default Landing;
