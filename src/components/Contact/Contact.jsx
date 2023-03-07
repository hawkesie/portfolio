import React from 'react'
import './Contact.css';
import GmailIcon from '../../images/icons/gmail.png';
import WhatsAppIcon from '../../images/icons/whatsapp.png';

const Contact = () => {
  return (
    <div className='contact-container'>
        <div className='contact-heading-container'>
            <h3>My Contact Details</h3>
        </div>
        <div className='contact-content-container'>
            <div className='contact-content-item'>
                
                <div className='contact-icon-container'>
                    <img src={GmailIcon} alt='gmail' />
                    
                </div>
                <h5>Email:</h5>
                <p>jordanhawkes93@gmail.com</p>
                
            </div>

            <div className='contact-content-item'>
                
                <div className='contact-icon-container'>
                    <img src={WhatsAppIcon} alt='gmail' />
                    
                </div>
                <h5>WhatsApp:</h5>
                <p>+6287840521714</p>
                
            </div>
        </div>

    </div>
  )
}

export default Contact