import React from 'react'
import Header from './../components/Header/Header.js';
import Title from '../components/title.js';
import './websiteCardMain.css';
import { useState } from 'react';
import CardComponent from './../components/CardComponent/CardComponent.js';
import Things from './../assets/ThingsToDoinChicagoLogoFull1.png';
import RBB from './../assets/logo.jpeg';
import NUTRISTEIN from './../assets/NUTRISTEIN1.png';
import TECHFINDER from './../assets/logo.jpg';
import HabibLogo from './../assets/HabibLogo.png';
import sparePartsBg from './../assets/sparePartsBg.png';

import Grocery from './../assets/grocery.jpg';
import Mcare from './../assets/mcare.svg';
import HOM from './../assets/hom.png';


const ProjectComponent = () => {

    const [trans,setTrans] = useState(-1)
    const [transMobile,setTransMobile] = useState(-1)
    var websites = [
        {title:'ThingsToDoInChicago',url:'https://thingstodoinchicagominhaj.netlify.app',
        video:'https://drive.google.com/file/d/1c_9krgT9cG-XskoejJx56mI_zviBtmXw/view?usp=sharing',
    src:Things},
        {title:'Nutristien',url:'https://nutristein.ae/',
        video:'https://drive.google.com/file/d/1pJ_MT2NyztQHHpNF2SOJV_z8h9ZrsBWn/view?usp=sharing',
    src:NUTRISTEIN},
        {title:'Tech Finder',url:'https://techfinder-deployment-minhaj.netlify.app/',
        video:'https://drive.google.com/file/d/17MUdLt1tHPUZjb2-P8EhyztFtbe0Wvi4/view?usp=sharing',
    src:TECHFINDER},
        {title:'Spare Parts Dealer',url:'https://sparepartsminhaj.netlify.app',
        video:'https://drive.google.com/file/d/1vbLshvr0ENCxZLeZ-tRD9vIgnoMY8qCn/view?usp=sharing',
    src:sparePartsBg},
        {title:'Habib Residency',url:'https://minhajhabibupdated.netlify.app/',
        video:'https://drive.google.com/file/d/14i79632L3v3Ju_EfflPsgpLszbNdXGi2/view?usp=sharing',
    src:HabibLogo},
        {title:'Rent By Broker',url:'https://minhaj-project-rbb.netlify.app/',
        video:'https://drive.google.com/file/d/1Tue1ZzgzkSbOLWeCll85bO6JDGbTiVb5/view?usp=sharing',
    src:RBB},
      ]

      const mobiles = [
        {title:'MCare',video:'https://drive.google.com/file/d/1hRYmt63wI6yHuFAjrIPMNSLx_Z2pnoct/view?usp=sharing',
        url:'https://drive.google.com/file/d/1v9OxKBP0-pT47h28QDGaE88-sX9CWklv/view?usp=sharing',
        src:Mcare
        },
        {title:'Grocery App',video:'https://drive.google.com/file/d/1hNg0wpN79vni3ZMAyU257LSlxwtvVQQU/view?usp=sharing',
        url:'https://drive.google.com/file/d/1FLN1hkyVk6suGIEaEIosRTthGpkYPsZh/view?usp=sharing',
        src:Grocery
        },
        {title:'HOM App',video:'https://drive.google.com/file/d/1hPIUOTuSjr6RTiy6ZWpWROYjwinqwcUD/view?usp=sharing',
        url:'https://drive.google.com/file/d/1hUHOQNN7g_2by4zaj8YHbbXw6AbDtQLX/view?usp=sharing',
    src:HOM},
      ]

  return (
    <>
    <Header active={'projects'} />
    <div className='websiteLayoutDiv' style={{paddingTop:10}}>
      <div className='websiteLayoutSubDiv'>
      <Title txt={'My Projects :'} />
      <Title txt={'Web Applications :'} />
    <div className='projectMain'>
    {
        websites.map((website,index)=>(
            <CardComponent trans={trans} website={website} setTrans={setTrans} index={index} />
        ))
    }
</div>

<Title txt={'Mobile Applications :'} />
<div className='projectMain'>
    {
        mobiles.map((mobile,index)=>(
            <CardComponent trans={transMobile} website={mobile} setTrans={setTransMobile} index={index} />
        ))
    }
</div>
<br/>
<br/>
<br/>

    </div></div>
    </>
  )
}

export default ProjectComponent