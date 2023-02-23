import React from 'react'
import GitLabHist from '../images/mygits/gitlab.png'
import GitlabIcon from '../images/icons/gitlab.png';
import GithubIcon from '../images/icons/github.png';

const MyGits = () => {
  return (
    <div className='my-gits-container'>
        <div className='my-gits-heading'>
            <h3>My Git Links</h3>
        </div>
        <div className='my-gits-links'>
            <a href='https://github.com/hawkesie' target='_blank'>
                <img src={GithubIcon} alt='github' />
            </a>

            <a href='https://gitlab.com/jordanhawkes93' target='_blank'>
                <img src={GitlabIcon} alt='gitlab' />
            </a>
            <div className='my-gits-history-image-container'>
                <img src={GitLabHist} alt='gitlab' />
            </div>
        </div>


    </div>
  )
}

export default MyGits