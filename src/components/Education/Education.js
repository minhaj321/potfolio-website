import React from 'react'
import { useState } from 'react';
import Title from './../title.js';
import './Education.css';

const Education = () => {

  const [focus,setFocus] = useState(false);

  return (
    <div>
        <Title txt={'Education :'} />
        <div className='educationBg'
        onMouseEnter={()=>setFocus(true)}
        onMouseLeave={()=>setFocus(false)}
        >
            <h3 className={focus ? 'zoom h3 mt' : 'h3 mt'}>Bachelors Of Computer System Engineering</h3>
            <span className={focus ? 'span' : 'span'}>From</span>
            <h3 className={focus ? 'zoom h3' : 'h3'}>Dawood University Of Engineering And Technology</h3>
            <p>2018-2022</p>
        </div>

    </div>
  )
}

export default Education