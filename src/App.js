import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyNav from './components/Nav'
import MainBox from './components/MainBox'
import ProjectCard from './components/ProjectCard'
import Question from '../src/components/Icon'
import AltNav from './components/AltNav'
import About from './components/About'

function App() {
  return (
    <div className="App">
      {/* <MyNav /> */}
      <AltNav />
      <section class="black">
      <h5><span class="introAbout">About</span></h5>
            <div class="intro-p-width">
            <p><span class="introAbout2">After parting ways with my job at a local investment firm I completed a six-month, 
            700-hour software engineering program, providing experience with the latest front- and back-end programming languages, tools, and methodologies including: 
             Javascript, jQuery, PostgreSQL, MongoDB, NodeJS, ReactJS, Ruby, Ruby on Rails ...
            <br></br>  <a href="#bazinga2" > Read more </a> </span></p>
            </div>
      </section>
      <MainBox />
      <section  id="bazinga" class="projectBox">
        <div class="innerProjectBox">
          
            <ProjectCard  />
            
       
        </div>
        
      </section>
      <h6></h6>
      
      <section class="box2">
        <div class="about"><About /></div>
        
      </section>
      <footer></footer>

    </div>
  );
}

export default App;
