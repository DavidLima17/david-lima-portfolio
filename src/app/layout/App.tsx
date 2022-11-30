import React, { Fragment } from 'react';
import Navbar from '../components/navbar';
import SocialLinks from '../components/socialLinks';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Home from './Home';
import Skills from './Skills';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Home/>
      <About />
      <Education />
      <Experience/>
      <Skills/>
      <SocialLinks />
    </Fragment>


  );
}

export default App;
