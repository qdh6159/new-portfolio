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
      <h5><span class="introAbout">About Me</span></h5>
            <div class="intro-p-width">
            <p><span class="introAbout2">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. 
            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
              <a href="#bazinga2" > Read more </a> </span></p>
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
