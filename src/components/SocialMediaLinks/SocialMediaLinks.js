import React from 'react'
import './SocialMediaLinks.css';
import Email from './../../assets/email.png';
import Phone from './../../assets/phone.png';
import WApp from './../../assets/whatsapp.png';
import Git from './../../assets/github.png';
import LinkedIn from './../../assets/linkedin.png';
import Location from './../../assets/map.png';


const SocialMediaLinks = () => {
  return (
    <div className='socialMediaLinsksMain'>
        <div className='socialMediaSubDiv'>
            <div className='socialMediaContentDiv'>
                <div className='iconDiv'>
                <img src={Email} className='icon email' />
                </div>
                <span
                onClick={()=>window.open('mailto:minhajsohail7@gmail.com')} 
                >minhajsohail7@gmail.com</span>
            </div>
            <div className='socialMediaContentDiv'>
                <div className='iconDiv'>
                <img src={Phone} className='icon phone' />
            </div>
                <span
                onClick={()=>window.open('tel:03170112101')} 
                >03170112101</span>
            </div>


        </div>

        <div className='socialMediaSubDiv'>
            <div className='socialMediaContentDiv'>
                <div className='iconDiv'>
                <img src={Git} className='icon Git' />
            </div>
                <span
                onClick={()=>window.open('https://github.com/minhaj321')} 
                >https://github.com/minhaj321</span>
            </div>
            <div className='socialMediaContentDiv'>
                <div className='iconDiv'>
                <img src={WApp} className='icon whatsapp' />
            </div>
                <span
                onClick={()=>window.open('tel:03170112101')} 
                >03170112101</span>
            </div>


        </div>

        <div className='socialMediaSubDiv'>
            <div className='socialMediaContentDiv'>
                <div className='iconDiv'>
                <img src={LinkedIn} className='icon LinkedIn' />
            </div>
                <span
                onClick={()=>window.open('https://www.linkedin.com/in/minhaj-sohail-9689b5216')} 
                >https://www.linkedin.com/in/minhaj-sohail-9689b5216</span>
            </div>
        </div>

        <div className='socialMediaSubDiv'>
            <div className='socialMediaContentDiv'>
                <div className='iconDiv'>
                <img src={Location} className='icon Location' />
            </div>
                <span>Karachi, Pakistan.</span>
            </div>
        </div>

    </div>
  )
}

export default SocialMediaLinks