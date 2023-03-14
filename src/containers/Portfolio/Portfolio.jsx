import React from 'react'
import './Portfolio.css'
import GeishaMain from '../../images/mysites/geisha-main.png';
import ProjectsSlider from '../../components/ProjectsSlider/ProjectsSlider';

const Portfolio = () => {
  return (
    <div className='portfolio-container'>
        

        <div className='portfolio-content-container'>
          <div className='portfolio-top'>
              <h4>My Portfolio</h4>
              <h1>Creative Meets Technology</h1>
          </div>
          <div className='portfolio-main-container'>
              <div className='portfolio-main-left'>
                  <h2>Geisha NFT</h2>
                  <p>I was hired to build this landing page for a potential NFT Project. I love the art on this page, which is why I haven't...</p>
                  <button>View Project</button>
              </div>
              <div className='portfolio-main-right'>
                  <div className='portfolio-main-right-image-container'>
                    <img src={GeishaMain} alt='main-img'/>
                  </div>
            </div>
        </div>
        
        <ProjectsSlider />

        </div>
        <div className='portfolio-background-container'>
          <img src={GeishaMain} alt='dots'/>
        </div>
    </div>
  )
}

export default Portfolio