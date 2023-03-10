import React from 'react'
import MainComponent from './../components/MainComponent/MainComponent.js';
import SocialMediaLinks from './../components/SocialMediaLinks/SocialMediaLinks.js';
import AboutAndSkills from './../components/AboutAndSkills/AboutAndSkills.js';
import MyServices from './../components/MyServices/MyServices.js';
import Education from './../components/Education/Education.js';
import Experience from './../components/Experience/Experience.js';
import Certifications from './../components/Certifications/Certifications.js';
import Hobbies from './../components/Hobbies/Hobbies.js';
import Header from './../components/Header/Header.js';


const HomeComponent = () => {
  return (
    <>
    <Header active='' />
    <div className='websiteLayoutDiv'>
      <div className='websiteLayoutSubDiv'>
    <MainComponent />
    <SocialMediaLinks />
    <AboutAndSkills />
    <MyServices />
    <Education />
    <Experience />
    <Certifications />
    <Hobbies />    
    <br/>
    <br/>
    <br/>
      </div>
    </div>
    </>
  )
}

export default HomeComponent