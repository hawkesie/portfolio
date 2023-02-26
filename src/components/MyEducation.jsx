import React from 'react'
import CSDegree from '../images/CSdegree.jpg'

const MyEducation = () => {
  return (
    <div className='my-education-container'>
        <div>
            <h3>MyEducation</h3>
        </div>
        <div className='my-education-text-container'>
            <h4>Queensland University of Technology - </h4>
            <span>Bachelor of Computer IT Majoring in Computer Science</span>
        </div>
        <div className='my-education-image-container'>
            <img src={CSDegree} alt='csdegree' />
        </div>
    </div>
  )
}

export default MyEducation