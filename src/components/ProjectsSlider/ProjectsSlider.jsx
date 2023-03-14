import React from 'react'
import {imports} from './imports';
import './ProjectsSlider.css'

const ProjectsSlider = ({ currentProject, setCurrentProject}) => {
  return (   
    <div className='projects-slider-container'>
        <h3>Other Projects</h3>
        <div className='projects-slider-main-container'>
        {imports.map((item, index) => {
                    return (
                      <div className='projects-grid-item'>
                        <div className='projects-grid-item-image-container'>
                            <img src={item.image} alt='image' onClick={() => setCurrentProject(index)}/>
                        </div>
                      </div>
                    )})}
        </div>
        
    </div>
  )
}

export default ProjectsSlider