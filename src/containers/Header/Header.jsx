import React from 'react'
import './Header.css'
import Navbar from '../../components/Navbar/Navbar'

import EducationImg from '../../images/Icons/education.png'
import BriefcaseImg from '../../images/Icons/briefcase.png'
import GmailImg from '../../images/Icons/gmail.png'
import WhatsappImg from '../../images/Icons/whatsapp.png'
import ProfileImg from '../../images/profile-pic.png'
import BottomRightDots from '../../images/backgrounds/bottomrightdots.png';
import TopLeftDots from '../../images/backgrounds/topleftdots.png';

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header-top-left-dots'>
          <img src={TopLeftDots} alt='dots'/>
        </div>
        <div className='header-bottom-right-dots'>
          <img src={BottomRightDots} alt='dots'/>
        </div>
        <Navbar />
        <div className='header-main-container'>
          <div className='header-content'>
            <h1>Perfectly<span style={{color:"#F8CA13"}}>-</span>coded software made available</h1> 
            <h3>Hello<span style={{color:"#F8CA13"}}>,</span> I'm <span style={{fontWeight:"800"}}>Jordan</span></h3>
            <p><img src={EducationImg} alt='edu'/>Graduated with a Bachelor of Computer Science with Academic Honors from The Queensland University of Technology in 2017.</p>
            <p><img src={BriefcaseImg} alt='work'/>Since then, I have worked for DXC Technology as an Application Developer and for the past two years have been working as a Frontend Web Developer.</p>

            <div className='header-contact-container'>
              <div className='header-contact-item'>
                <img src={GmailImg} alt='gmail'/>
                <address>jordanhawkes93@gmail.com</address>
              </div>
              <div className='header-contact-item'>
                <img src={WhatsappImg} alt='gmail'/>
                <address>+6287840521714</address>
              </div>
            </div>

            
          </div>
          <div className='header-profile-img-container'>
              <img src={ProfileImg} alt='me'/>
          </div>
          
        </div>
    </div>
  )
}

export default Header