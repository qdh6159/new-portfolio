import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyNav from './components/Nav'
import MainBox from './components/MainBox'
import ProjectCard from './components/ProjectCard'
import Question from '../src/components/Icon'
import AltNav from './components/AltNav'

function App() {
  return (
    <div className="App">
      {/* <MyNav /> */}
      <AltNav />
      <MainBox />
      <section  id="bazinga" class="projectBox">
        <div class="innerProjectBox">
          
            <ProjectCard  />
            
       
        </div>
        
      </section>
      <h6>About</h6>
      <Question/>

    </div>
  );
}

export default App;
