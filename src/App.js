
import './App.css';
import { useEffect, useRef, useState } from "react";
import Header from './components/Header/Header';
import MySites from './components/MySites/MySites';
import MyGits from './components/MyGits/MyGits';
import MyEducation from './components/MyEducation/MyEducation';
import Contact from './components/Contact/Contact';

function App() {

  return (
    <div className="App">
      
      

      <div className='main-container'>
        <Header />
        <MySites />
       
        <MyEducation />
         <MyGits/>
        <Contact />
        </div>
      </div>
  );
}

export default App;
