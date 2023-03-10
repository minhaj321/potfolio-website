import React from 'react'
import Title from './../title.js';
import './myServices.css';

const MyServices = () => {

    const services = ['Complete User Interface of Web Application',
    'Complete Web Application ( backEnd + frontEnd )','Complete Mobile Application (backEnd + frontEnd)']
  

  return (
    <div>
        
        <Title txt={'My Services :'} />
        <div className='serviceParent'>
    {
      services.map((service,index)=>(
        <div key={index} className='serviceBox'>
            {service}
        </div>
      ))
    }
</div>
    </div>
  )
}

export default MyServices