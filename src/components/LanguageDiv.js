import React from 'react'
import './LanguageDiv.css';

const LanguageDiv = ({data}) => {

    console.log(data)
  return (
    <div className='LanguageDivMain'>
        {data.icon}
        <span>{data.title}</span>
    </div>
  )
}

export default LanguageDiv