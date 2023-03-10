import React from 'react'
import './mainComponent.css';
import Avatar from './../../assets/avatar.png'
import PlayIcon from './../../assets/play.png'
import { useNavigate } from 'react-router-dom';

const MainComponent = () => {

    const navigate = useNavigate();

  return (
    <div className='mainComponentMain'>
        <div className='mainSubDiv'>
        <img className='avatarImg2' src={Avatar} />
            <div className='mainTitlesDiv'>
                <h2>
                    MINHAJ SOHAIL
                </h2>
                <h4>
                    Web and Mobile Full Stack Developer
                </h4>
                <div className='sliderBgDiv'>
                    <span>My Projects</span>
                    <div className='sliderPlayBg'
                    onClick={()=>navigate('/projects')}
                    >
                        <div className='animeBlowDiv'></div>
                        <img className='playIcon' src={PlayIcon} />
                    </div>
                </div>
            </div>
            <div className='avatarDiv'>
            <img className='avatarImg' src={Avatar} />
            </div>
        </div>
    </div>
  )
}

export default MainComponent