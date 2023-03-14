
import './App.css';
import { useEffect, useRef, useState } from "react";
import Header from './containers/Header/Header'
import Portfolio from './containers/Portfolio/Portfolio';


function App() {

  return (
    <div className="App">
      <div className='main-container'>
        <Header />
        <Portfolio />
        <div className='bottom'></div>
      </div>
    </div>
  );
}

export default App;
