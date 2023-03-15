import React from 'react'
import './Portfolio.css'
import GeishaMain from '../../images/mysites/geisha-main.png';
import ProjectsSlider from '../../components/ProjectsSelector/ProjectsSelector';
import { useEffect, useRef, useState } from "react";
import {imports} from '../../components/ProjectsSelector/imports';

const Portfolio  = ({ currentProject, setCurrentProject}) =>{


  return (
    <div className='portfolio-container'>
        

        <div className='portfolio-content-container'>
          <div className='portfolio-top'>
              <h4>My Portfolio</h4>
              <h1>Creative Meets Technology</h1>
          </div>
          <div className='portfolio-main-container'>
              <div className='portfolio-main-left'>
                  <h2>{imports[currentProject].name}</h2>
                  <p>I was hired to build this landing page for a potential NFT Project. I love the art on this page, which is why I haven't...</p>
                  <button>View Website</button>
              </div>
              <div className='portfolio-main-right'>
                  <div className='portfolio-main-right-image-container'>
                    <img src={imports[currentProject].image} alt='main-img'/>
                  </div>
            </div>
        </div>
        
        <ProjectsSlider 
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
        />

        </div>
        <div className='portfolio-background-container'>
          <img src={imports[currentProject].image} alt='dots'/>
        </div>
    </div>
  )
}

export default Portfolio