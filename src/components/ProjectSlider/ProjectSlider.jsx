import React from 'react'
import './ProjectSlider.css'
import {projectImports} from '../../containers/Project/projectImports';
import LeftArrow from '../../images/Icons/left-arrow.png';
import RightArrow from '../../images/Icons/right-arrow.png';
import { useEffect, useRef, useState } from "react";
import slideright from '../../transitions/slideright'

const ProjectSlider = ({ currentProject, setCurrentProject}) => {

    const [currentSlide, setCurrentSlide] = useState(1);
    const [numSlides, setNumSlides] = useState(projectImports[currentProject].images.length);

    useEffect(() => {
        setNumSlides(projectImports[currentProject].images.length);
        setCurrentSlide(1);
    },[currentProject] );

    useEffect(() => {
        slideright();
    },[currentSlide] );


  return (
    <div className='project-slider-container'>
        <div className='project-slider'>
            <div className='project-slider-button-container'>
                {currentSlide >= 1 && <img src={LeftArrow} onClick={() => setCurrentSlide(currentSlide-1)}/>}
            </div>
            <div className='project-slider-side-image slide-right'>
            {currentSlide >= 1 && <img src={projectImports[currentProject].images[currentSlide-1]} alt='slide' onClick={() => setCurrentSlide(currentSlide-1)} />}
            </div>
            <div className='project-slider-center-image slide-right'>
                <img src={projectImports[currentProject].images[currentSlide]} alt='slide' />
            </div>
            <div className='project-slider-side-image slide-right'>
                {currentSlide < numSlides-1 &&   <img src={projectImports[currentProject].images[currentSlide+1]} alt='slide' onClick={() => setCurrentSlide(currentSlide+1)}/>}
            </div>
            <div className='project-slider-button-container'>
                {currentSlide < numSlides-1 && <img src={RightArrow} onClick={() => setCurrentSlide(currentSlide+1)}/>}
            </div>
        </div>
    
    </div>
  )
}

export default ProjectSlider