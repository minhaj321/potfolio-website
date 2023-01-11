import React from 'react'
import './title.css';
import Fade from 'react-reveal/Fade';

const Title = ({txt}) => {
  return (
    <Fade left>
    <h1 className='titles'>{txt}</h1>
    </Fade>
  )
}

export default Title