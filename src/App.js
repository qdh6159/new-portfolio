import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyNav from './components/Nav'
import MainBox from './components/MainBox'

function App() {
  return (
    <div className="App">
      {/* <MyNav /> */}
      <MyNav />
      <MainBox />
      <section class="projectBox"></section>
      {/* <h1>Hello</h1> */}
    </div>
  );
}

export default App;
