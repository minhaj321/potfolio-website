import React from 'react'
import { useState } from 'react';
import Title from './../title.js';
import './Experience.css';

const Experience = () => {

const [active,setActive] = useState(-1)

  return (
    <div>
        <Title txt={'Experience :'} />

        <div className='experienceBg'
        onMouseEnter={()=>setActive(1)}
        onMouseLeave={()=>setActive(-1)}
        >
            <h3 className={active==1 ? 'zoom h3' : 'h3'}>1+ Years Experience</h3>
            <span>In</span>
            <h3 className={active==1 ? 'zoom h3' : 'h3'}>Think Solutionz</h3>
            <span>As</span>
            <h3 className={active==1 ? 'zoom h3' : 'h3'}>MERN Stack Developer</h3>
        </div>

        <div className='experienceBg marginTop'
        onMouseEnter={()=>setActive(2)}
        onMouseLeave={()=>setActive(-1)}
        >
            <h3 className={active==2 ? 'zoom h3' : 'h3'}>4 Months Experience</h3>
            <span>In</span>
            <h3 className={active==2 ? 'zoom h3' : 'h3'}>Zan Innovations</h3>
            <span>As</span>
            <h3 className={active==2 ? 'zoom h3' : 'h3'}>MERN Stack Internee</h3>
        </div>


    </div>
  )
}

export default Experience