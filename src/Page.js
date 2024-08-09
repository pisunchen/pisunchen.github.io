import React from 'react';
import Landing from './Landing'
import About from './About';
import Experience from './Experience';
import Contact from './Contact'
import Projects from './Projects'
import ProjectCard from './ProjectCard';

function Page() {
  return (
    <div>
      <Landing></Landing>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default Page;
