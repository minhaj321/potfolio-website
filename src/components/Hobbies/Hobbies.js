import React,{useEffect} from 'react'
import './Hobbies.css';
import TypingComponent from './../TypingComponent/TypingComponent.js';
import Title from './../title.js';
import { useState } from 'react';

const Hobbies = () => {

    const [show,setShow] = useState(false)
    const Hobbies = ['Cricket','Religious Study','Online Games','Solo Brainstorming'];


    useEffect(()=>{

        window.addEventListener('scroll', handleScroll);
    
    
    },[])
    const handleScroll = ()=>{
      var a = document.getElementsByClassName('hobbiesList')[0].offsetTop;
      
      if(window.scrollY+window.innerHeight > a){
        setShow(true);
      }
    
    }

    return (
    <div>
        <Title txt={'Hobbies :'} />
        <div className='hobbiesList'>
            {
                show &&
                Hobbies.map((hobby,index)=>(
  <TypingComponent txt={hobby} className='' wrapper='span' />
  ))
}

{/* <span key={index}>{hobby}</span> */}
        </div>
    </div>
  )
}

export default Hobbies