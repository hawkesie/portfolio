import React from 'react'
import './Project.css'
import {projectImports} from './projectImports';
import ProjectsSelector from '../../components/ProjectsSelector/ProjectsSelector';
import ProjectSlider from '../../components/ProjectSlider/ProjectSlider';

const Project  = ({ currentProject, setCurrentProject}) => {
  return (
    <div className='project-container'>
        <div className='project-content-container'>
          <div className='project-top'>
              <h4>My Portfolio</h4>
          </div>
          <div className='project-main-container'>
              <div className='project-main-left'>
                  <h1>{projectImports[currentProject].name}</h1>
                  <p>I was hired to build this landing page for a potential NFT Project. I love the art on this page, which is why I haven't...</p>
                  {currentProject !== 2 && <button>View Website</button>}
              </div>
              <div className='project-main-right'>
                  <div className='project-main-right-image-container'>
                    <img src={projectImports[currentProject].image} alt='main-img'/>
                  </div>
              </div>
            </div>
            <ProjectSlider currentProject={currentProject}
                setCurrentProject={setCurrentProject}/>


            <ProjectsSelector
                currentProject={currentProject}
                setCurrentProject={setCurrentProject}
            />

        </div>


    </div>
  )
}

export default Project