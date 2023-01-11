import React from 'react'
import './WebsiteCard.css';
import {BsArrowRight} from 'react-icons/bs'; 
import {MdVideoLibrary} from 'react-icons/md'; 
import Fade from 'react-reveal/Fade';

const WebsiteCard = ({data}) => {
  return (
    <div className='websiteDivMain'>
    <Fade >
        <div className='websiteFirstDiv'>
        <span className='websiteDivSpan'>{data.title}</span>
        <a
        href={data.video} target='_blank'
        className='websiteDivSpan1'>video <MdVideoLibrary className='movieIcon' /> </a>
        </div>
        <div className='websiteSecondDiv'>
            <a
            href={data.url} target='_blank'
            >Visit Website <BsArrowRight className='webArrowIcon'/> </a>
        </div>
        </Fade>
    </div>
  )
}

export default WebsiteCard