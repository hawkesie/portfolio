
import './App.css';
import { useEffect, useRef, useState } from "react";
import Header from './containers/Header/Header'
import Portfolio from './containers/Portfolio/Portfolio';
import Project from './containers/Project/Project';
import Navbar from './components/Navbar/Navbar';

function App() {

  
  const [currentProject, setCurrentProject] = useState(0);
  const [showProject, setShowProject] = useState(4);

  return (
    <div className="App">
      <div className='main-container'>
        <Navbar currentProject={currentProject}
          setCurrentProject={setCurrentProject}
          showProject={showProject}
          setShowProject={setShowProject}/>
        {showProject === 4 &&
        <>
        <Header />
        <Portfolio currentProject={currentProject}
          setCurrentProject={setCurrentProject}
          showProject={showProject}
          setShowProject={setShowProject}
          />
          </>
        }
        {showProject !== 4 &&
        <Project currentProject={currentProject}
          setCurrentProject={setCurrentProject}
          showProject={showProject}
          setShowProject={setShowProject}
          />
        }
        {/* <div className='bottom'></div> */}
      </div>
    </div>
  );
}

export default App;
