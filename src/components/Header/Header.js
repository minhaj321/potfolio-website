import React from 'react'
import './header.css';
import './animation.css';
import HeaderIcon from './../../assets/headerIcon.png';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Header = ({active}) => {

  const navigate = useNavigate();

  return (
    <div className='headerMain'>
        <img  src={HeaderIcon} className='headerIcon'
        onClick={()=>navigate('/')}
        />
        <div className='headerDiv'>
            <span className={active=='tools' ? 'span1 active' : 'span1'}
            onClick={()=>navigate('/tools')}
            >Tools</span>
            <span className={active=='projects' ? 'span2 active' : 'span2'}
            onClick={()=>navigate('/projects')}
            >Projects</span>
        </div>
    </div>
  )
}

export default Header