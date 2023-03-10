import React, { useEffect, useState } from 'react'
import Title from './../title.js';
import TypingComponent from './../TypingComponent/TypingComponent.js';


const AboutAndSkills = () => {

  const [about,setAbout] = useState('I am a Web and mobile hybrid app developer with 1+ years of experience. I am a good problem solver and a quick learner and want to learn more and more through my carrier. I am very passionate to my work and i do it with honesty.')
  var [count,setCount] = useState(false)
  var [showSkills,setShowSkills] = useState(false)
  var txt = 'I am a Web and mobile hybrid app developer with 1+ years of experience. I am a good problem solver and a quick learner and want to learn more and more through my carrier. I am very passionate to my work and i do it with honesty.'
  // var txt = 'I am a Web and mobile honesty.'

  useEffect(()=>{

    window.addEventListener('scroll', handleScroll);


},[])
const handleScroll = ()=>{
  var a = document.getElementById('target').offsetTop;
  var b = document.getElementsByClassName('skillsDiv')[0].offsetTop;
  
  if(window.scrollY+window.innerHeight > a){
    setCount(true);
  }
  if(window.scrollY+window.innerHeight > b){
    setShowSkills(true);
  }

}

return (
    <div>
      <Title txt={'About Me :'} />
      {/* <p className='seconDivP'> */}
       {/* {about} */}
      {/* </p> */}
      <div id='target' style={{width:'100%',height:1}}></div>
{
  count &&
  <TypingComponent txt={about} className='seconDivP' wrapper='p' />

}


      <Title txt={'Skills :'} />
        <div className='skillsDiv'>
          {
            showSkills &&
  <TypingComponent txt={'Mobile App Development'} className='' wrapper='span' />
          }
          {
            showSkills &&
            <TypingComponent txt={'Web App Development'} className='' wrapper='span' />
          }
          {
            showSkills &&
            <TypingComponent txt={'Good Problem Solver'} className='' wrapper='span' />
          }
          {
            showSkills &&
            <TypingComponent txt={'Quick Learner'} className='' wrapper='span' />
          }
          {
            showSkills &&
            <TypingComponent txt={'Creative'} className='' wrapper='span' />
          }
          {
            showSkills &&
            <TypingComponent txt={'Team Worker'} className='' wrapper='span' />
          }

            {/* <span>Mobile App Development</span>
            <span>Web App Development</span>
            <span>Good Problem Solver</span>
            <span>Quick Learner</span>
            <span>Creative</span>
            <span>Team Worker</span> */}
        </div>      
    </div>
  )
}

export default AboutAndSkills