import React from 'react'
import './Portfolio.css'
import GeishaMain from '../../images/mysites/geisha-main.png';
import ProjectsSlider from '../../components/ProjectsSelector/ProjectsSelector';
import { useEffect, useRef, useState } from "react";
import {projectImports} from '../Project/projectImports';
import reveal from '../../transitions/reveal'

const Portfolio  = ({ currentProject, setCurrentProject, showProject, setShowProject}) =>{


  return (
    <div className='portfolio-container'>
        <div className='portfolio-content-container reveal'>
          <div className='portfolio-top'>
              <h4>My Portfolio</h4>
              <h1>Creative Meets Technology</h1>
          </div>
          <div className='portfolio-main-container'>
              <div className='portfolio-main-left'>
                  <h2>{projectImports[currentProject]?.name}</h2>
                  <p>{projectImports[currentProject]?.description}</p>
                  <button onClick={() => setShowProject(currentProject)}>View Project</button>
              </div>
              <div className='portfolio-main-right'>
                  <div className='portfolio-main-right-image-container'>
                    <img src={projectImports[currentProject]?.image} alt='main-img'/>
                  </div>
            </div>
        </div>
        
        <ProjectsSlider 
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
        />

        </div>
        <div className='portfolio-background-container'>
          <img src={projectImports[currentProject]?.image} alt='dots'/>
        </div>
    </div>
  )
}

export default Portfolio