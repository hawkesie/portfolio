import React from 'react'
import StaxyImg from '../images/wib/staxy-front.png';
import GeishaImg from '../images/wib/geisha-front.png';
import LsNft from '../images/ls/nft-page.png';
import LsAcc from '../images/ls/account-page.png';
import LsShowdown from '../images/ls/showdown-page.png';
import LsWallet from '../images/ls/wallet-page.png';
import LsLdb from '../images/ls/leaderboard-page.png';

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

                <a href='https://main.d1t87ixh50zlnh.amplifyapp.com/' target="_blank" className='my-sites-site-image-container'>
                    <img src={StaxyImg}  alt='staxy' />
                </a>

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

                <a href='https://main.d332phldntddfe.amplifyapp.com/' target="_blank" className='my-sites-site-image-container'>
                    <img src={GeishaImg}  alt='staxy' />
                </a>

                <div className='my-sites-site-description'>
                    <p>This was a landing page for a potential NFT Project.</p>
                </div>
                <div className='my-sites-site-link-container'>
                    <a href='https://main.d332phldntddfe.amplifyapp.com/' target="_blank">Link</a>
                </div>
            </div>

            <div className='my-sites-site-container'>
                <div className='my-sites-site-name'>
                    <h3>Lucky Shogun</h3>
                </div>

                <div className='my-sites-site-image-container'>
                    <img src={LsNft}  alt='staxy' />
                </div>

                <div className='my-sites-site-image-container'>
                    <img src={LsAcc}  alt='staxy' />
                </div>

                <div className='my-sites-site-image-container'>
                    <img src={LsShowdown}  alt='staxy' />
                </div>

                <div className='my-sites-site-image-container'>
                    <img src={LsWallet}  alt='staxy' />
                </div>

                <div className='my-sites-site-image-container'>
                    <img src={LsLdb}  alt='staxy' />
                </div>

                <div className='my-sites-site-description'>
                    <p>I was the lead frontend developer for this online crypto casino for the past year. The company closed down with no warning at the end of 2022. I did almost all of the front-end development work on this website.</p>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default MySites