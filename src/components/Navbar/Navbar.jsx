import React from 'react'
import './Navbar.css'
import { useEffect, useRef, useState } from "react";

const Navbar = ({currentProject, setCurrentProject, showProject, setShowProject}) => {

  

  return (
    <div className='navbar-container'>
            <a onClick={() => setShowProject(4)} className={showProject === 4 ? 'navbar-current-tab dark-color' : 'light-color'} >Home</a>
            <a onClick={() => setShowProject(currentProject)} className={showProject !== 4 ? 'navbar-current-tab light-color' : 'dark-color'}>Portfolio</a>
            <a className={showProject !== 4 ? 'light-color' : 'dark-color'}>Contact me</a>
    </div>
  )
}

export default Navbar