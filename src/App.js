
import './App.css';
import { useEffect, useRef, useState } from "react";
import Header from './containers/Header/Header'


function App() {

  return (
    <div className="App">
      <div className='main-container'>
        <Header />
        <div className='bottom'></div>
      </div>
    </div>
  );
}

export default App;
