import React from 'react'
import StaxyImg from '../images/wib/staxy-front.png';
import GeishaImg from '../images/wib/geisha-front.png';

const MySites = () => {
  return (
    <div className='my-sites-main-container'>
        <div className='my-sites-heading-container'>
            <h1>My Past Work</h1>
        </div>
        <div className='my-sites-sites'>
            <div className='my-sites-site-container'>
                <div className='my-sites-site-name'>
                    <h3>Staxy</h3>
                </div>

                <div className='my-sites-site-image-container'>
                    <img src={StaxyImg}  alt='staxy' />
                </div>

                <div className='my-sites-site-description'>
                    <p>I was hired to build this as a prototype for a gaming site that would have been similar to Hypedrop.com. </p>
                </div>
                <div className='my-sites-site-link-container'>
                    <a href='https://main.d1t87ixh50zlnh.amplifyapp.com/' target="_blank">Link</a>
                </div>

            </div>

            <div className='my-sites-site-container'>
                <div className='my-sites-site-name'>
                    <h3>Geisha Widows</h3>
                </div>

                <div className='my-sites-site-image-container'>
                    <img src={GeishaImg}  alt='staxy' />
                </div>

                <div className='my-sites-site-description'>
                    <p>This was a landing page for a potential NFT Project.</p>
                </div>
                <div className='my-sites-site-link-container'>
                    <a href='https://main.d332phldntddfe.amplifyapp.com/' target="_blank">Link</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MySites