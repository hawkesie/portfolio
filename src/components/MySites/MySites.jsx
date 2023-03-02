import React from 'react'
import './MySites.css';

import StaxyImg from '../../images/wib/staxy-front.png';
import GeishaImg from '../../images/wib/geisha-front.png';
import LsNft from '../../images/ls/nft-page.png';
import LsAcc from '../../images/ls/account-page.png';
import LsShowdown from '../../images/ls/showdown-page.png';
import LsWallet from '../../images/ls/wallet-page.png';
import LsLdb from '../../images/ls/leaderboard-page.png';

const MySites = () => {
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

            <div className='my-sites-site-container' style={{flexDirection:"row-reverse"}}>

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

            <div className='my-sites-ls-container'>
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


                </div>

        </div>
    </div>
  )
}

export default MySites