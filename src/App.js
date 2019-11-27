import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyNav from './components/Nav'
import MainBox from './components/MainBox'
// import Question from '../src/components/Icon'

function App() {
  return (
    <div className="App">
      {/* <MyNav /> */}
      <MyNav />
      <MainBox />
      <section  id="bazinga" class="projectBox">
        {/* <Question/> */}
      </section>

    </div>
  );
}

export default App;
