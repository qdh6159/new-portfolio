import React from 'react';
import { Button } from 'reactstrap';
import CardTable from './CardTable'
import CardTable2 from './Profile'
import Question from './Icon'


function MainBox() {
    return (
      <div class="mainBox">
          <div class="intro">
            <h1><span class="introOne">Full Stack Software Engineer</span></h1>
            <p><span class="introTwo">Coding to change the world in a positive way.</span></p>
            
            <a class="introThree" href="#bazinga">
                <span>View Portfolio</span>
                <Question/>
            </a>
            

            
          </div>
       

      </div>
    );
  }
  
  export default MainBox;