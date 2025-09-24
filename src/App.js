import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div className="App">
      <Hero />
      <Projects />
      <WorkExperience />
    </div>
  );
}

export default App;
