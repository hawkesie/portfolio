import React from 'react'
import ProfPic from '../images/profilepic.jpg'

const Header = () => {
  return (
    <div className='header-container'>
        <div className='profile-img-container'>
            <img src={ProfPic} />
        </div>

        <div className='header-text-container'>
            <h1>Hello, I'm Jordan</h1>
            <p>I'm a Web Developer from Brisbane, Australia</p>
            <p>I graduated with a Bachelor of Computer Science with Academic Honours from The Queensland
                University of Technology in 2017
            </p>
            <p>Since then, I have worked for DXC Technology as an Application Developer and for the past
                two years have been working as a Frontend Web Devloper
            </p>
            
        </div>
    </div>
  )
}

export default Header