import React,{useState} from 'react'
import './Certifications.css';
import Title from './../title.js';

const Certifications = () => {

const [active,setActive] = useState(-1)


  return (
    <div>
        <Title txt={'Certifications :'} />

        <div className='experienceBg certificationMain'
        onMouseEnter={()=>setActive(1)}
        onMouseLeave={()=>setActive(-1)}>
            <h3 className={active==1 ? 'zoom h3' : 'h3'}>Web And Mobile Hybrid App Development</h3>
            <span>From</span>
            <h3 className={active==1 ? 'zoom h3' : 'h3'}>Saylani Mass IT Training</h3>
        </div>
        
        <div className='experienceBg marginTop certificationMain'
        onMouseEnter={()=>setActive(2)}
        onMouseLeave={()=>setActive(-1)}
        >
            <h3 className={active==2 ? 'zoom h3' : 'h3'}>GraphQL in React.js and Node.js</h3>
            <span>From</span>
            <h3 className={active==2 ? 'zoom h3' : 'h3'}>Udemy</h3>
        </div>

    </div>
  )
}

export default Certifications