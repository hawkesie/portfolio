
import './App.css';
import { useEffect, useRef, useState } from "react";
import Header from './containers/Header/Header'
import Portfolio from './containers/Portfolio/Portfolio';
import Project from './containers/Project/Project';

function App() {

  
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {

  },[currentProject] );


  return (
    <div className="App">
      <div className='main-container'>
        <Header />
        <Portfolio currentProject={currentProject}
          setCurrentProject={setCurrentProject}/>
        <Project currentProject={currentProject}
          setCurrentProject={setCurrentProject}/>
        <div className='bottom'></div>
      </div>
    </div>
  );
}

export default App;
