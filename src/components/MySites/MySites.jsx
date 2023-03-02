import React from 'react'
import './MySites.css';
import { useEffect, useRef, useState } from "react";
import StaxyImg from '../../images/wib/staxy-front.png';
import GeishaImg from '../../images/wib/geisha-front.png';
import LsNft from '../../images/ls/nft-page.png';
import LsAcc from '../../images/ls/account-page.png';
import LsShowdown from '../../images/ls/showdown-page.png';
import LsWallet from '../../images/ls/wallet-page.png';
import LsLdb from '../../images/ls/leaderboard-page.png';
import LeftArrow from '../../images/arrows/left-arrow.png';
import RightArrow from '../../images/arrows/right-arrow.png';
import CloseIcon from '../../images/arrows/close.png';

const MySites = () => {

    const slides =[LsNft, LsAcc, LsShowdown, LsWallet, LsLdb];

    const [showSlides, setShowSlides] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const toggleShowSlides = () =>{
        if(!showSlides){
          setShowSlides(true);
        }
        else{
          setTimeout(()=>{
            setShowSlides(false);
          },100)
          
        }
    }

    const nextSlide = () =>{
        if(slideNumber < 4){
            setSlideNumber(slideNumber+1);
        }
    }

    const previousSlide = () =>{
        if(slideNumber > 0){
            setSlideNumber(slideNumber-1);
        }
    }




  return (
    <div className='my-sites-main-container'>
        <div className='my-sites-heading-container'>
            <h1>My Past Work</h1>
        </div>
        <div className='my-sites-sites'>
            <div className='my-sites-site-container'>
                
                <a href='https://main.d1t87ixh50zlnh.amplifyapp.com/' target="_blank" className='my-sites-site-image-container'>
                    <img src={StaxyImg}  alt='staxy' />
                    <div className='my-sites-hover-text'>
                            <h4>Visit Site</h4>
                    </div>
                </a>

                <div className='my-sites-site-description'>
                    <div className='my-sites-site-name'>
                        <h3>Staxy</h3>
                    </div>
                    <p>I was hired to build this as a prototype for a mystery box site that would have been similar to Hypedrop.com. The project was put on hold after a few days which is why some pages are incomplete. The project never eventualized.</p>
                </div>

            </div>

            <div className='my-sites-site-container' >

                <a href='https://main.d332phldntddfe.amplifyapp.com/' target="_blank" className='my-sites-site-image-container' >
                    <img src={GeishaImg}  alt='staxy' />
                    <div className='my-sites-hover-text'>
                        <h4>Visit Site</h4>
                    </div>
                </a>

                <div className='my-sites-site-description'>
                    <div className='my-sites-site-name'>
                        <h3>Geisha Widows</h3>
                    </div>

                    <p>I was hired to build this landing page for a potential NFT Project. I love the art on this page, which is why I haven't compressed any of the images for optimization.</p>
                </div>
                
            </div>

            <div className='my-sites-site-container' >

                <a className='my-sites-site-image-container' onClick={toggleShowSlides} >
                    <img src={LsNft}  alt='staxy' />
                    <div className='my-sites-hover-text'>
                        <h4>Slide Show</h4>
                    </div>
                </a>

                <div className='my-sites-site-description'>
                    <div className='my-sites-site-name'>
                        <h3>Lucky Shogun</h3>
                    </div>

                    <p>I was the lead frontend developer for this online crypto casino for the past year. The company closed down with no warning at the end of 2022. I did almost all of the front-end development work on this website.</p>
                </div>
                
            </div>

        </div>

        {showSlides &&

        <div className='my-sites-slideshow-container'>
            <div className='my-sites-slideshow-inner-container'>
                <div className='my-sites-button-container' >
                    {slideNumber > 0 &&
                    <img src={LeftArrow} alt='left-arrow' onClick={previousSlide}/>
                    }
                </div>
                <div className='my-sites-slideshow-image-container'>
                    <img src={slides[slideNumber]} alt='slideshow' />
                </div>
                <div className='my-sites-button-container' >
                {slideNumber < 4 &&
                    <img src={RightArrow} alt='right-arrow' onClick={nextSlide}/>
                }
                </div>
            </div>
            <div className='my-sites-slideshow-close-container'>
                <img src={CloseIcon} alt='close'  onClick={toggleShowSlides}/>
                
            </div>
        </div>
        }

    </div>
  )
}

export default MySites





   {/* <div className='my-sites-ls-container'>
                    <div className='my-sites-ls-images'>

                        <div className='my-sites-site-image-slide'>
                            <img src={LsNft}  alt='staxy' />
                        </div>

                        <div className='my-sites-site-image-slide'>
                            <img src={LsAcc}  alt='staxy' />
                        </div>

                        <div className='my-sites-site-image-slide'>
                            <img src={LsShowdown}  alt='staxy' />
                        </div>

                        <div className='my-sites-site-image-slide'>
                            <img src={LsWallet}  alt='staxy' />
                        </div>

                        <div className='my-sites-site-image-slide'>
                            <img src={LsLdb}  alt='staxy' />
                        </div>

                    </div>
                

                    <div className='my-sites-site-description'>
                        <div className='my-sites-site-name'>
                            <h3>Lucky Shogun</h3>
                        </div>
                            <p>I was the lead frontend developer for this online crypto casino for the past year. The company closed down with no warning at the end of 2022. I did almost all of the front-end development work on this website.</p>
                    </div>


                </div> */}