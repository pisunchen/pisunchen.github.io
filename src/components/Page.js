import React from 'react';
import Landing from './Landing'
import About from './About';
import Experience from './Experience';
import Navigation from './Navigation';
// import Contact from './Contact'
import Projects from './Projects'

const Page = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Landing></Landing>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      {/* <Contact></Contact> */}
    </div >
  );
}

export default Page;
