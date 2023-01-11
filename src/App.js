import './App.css';
import './fonts.css';
import FirstImg from './assets/firstImg.jpg';
import SecondImg from './assets/secondImg.jpg';
import ThgirdImg from './assets/thirdImg.jpg';
import {BsArrowRight} from 'react-icons/bs'; 
import Title from './components/title';
import LanguageDiv from './components/LanguageDiv.js';
import WebsiteCard from './components/WebsiteCard.js';
import MobileCard from './components/MobileCard.js';
import Fade from 'react-reveal/Fade';
import HeadShake  from 'react-reveal/HeadShake';


// icons

import {BiCodeAlt} from 'react-icons/bi';
import {GoPrimitiveDot} from 'react-icons/go';
import {AiFillHtml5} from 'react-icons/ai';
import {GrGraphQl} from 'react-icons/gr';
import {BsGithub,BsBootstrapFill} from 'react-icons/bs';
import {
  SiGooglemaps,SiMongodb,SiMaterialui,SiNodedotjs,SiMysql,SiFirebase,SiExpress,
  SiRedux,SiSocketdotio,SiExpo,SiNextdotjs} from 'react-icons/si';
import {DiCss3,DiJavascript1,DiReact} from 'react-icons/di';



function App() {

  const services = ['Complete User Interface of Web Application',
  'Complete Web Application ( backEnd + frontEnd )','Complete Mobile Application (backEnd + frontEnd)']

  const libraries=[
    {icon : <AiFillHtml5  className='languageIcon html' />,title:'HTML5'},
    {icon : <DiCss3  className='languageIcon css' />,title:'CSS3'},
    {icon : <DiJavascript1  className='languageIcon js' />,title:'JavaScript'},
    {icon : <DiReact  className='languageIcon react' />,title:'ReactJS'},
    {icon : <SiNextdotjs  className='languageIcon next' />,title:'NextJS'},
    {icon : <DiReact  className='languageIcon react' />,title:'React Native'},
    {icon : <SiExpo  className='languageIcon expo' />,title:'Expo CLI'},
    {icon : <BiCodeAlt  className='languageIcon nativebase' />,title:'NativeBase'},
    {icon : <SiMaterialui  className='languageIcon mui' />,title:'Material UI'},
    {icon : <BsBootstrapFill  className='languageIcon bootstrap' />,title:'Bootstrap'},
    {icon : <SiRedux  className='languageIcon redux' />,title:'Redux'},
    {icon : <SiSocketdotio  className='languageIcon socket' />,title:'Socket.IO'},
    {icon : <GrGraphQl  className='languageIcon graph' />,title:'GraphQL'},
    {icon : <SiNodedotjs  className='languageIcon node' />,title:'NodeJS'},
    {icon : <SiExpress  className='languageIcon express' />,title:'ExpressJS'}, 
    {icon : <SiMongodb  className='languageIcon mongo' />,title:'MongoDB'},
    {icon : <SiMysql  className='languageIcon sql' />,title:'MySql'},
    {icon : <BsGithub  className='languageIcon git' />,title:'Github'},
    {icon : <SiFirebase  className='languageIcon firebase' />,title:'Firebase'},
    {icon : <SiGooglemaps  className='languageIcon google' />,title:'Google Maps'}, 

  ]

  var websites = [
    {title:'ThingsToDoInChicago',url:'https://thingstodoinchicagominhaj.netlify.app',
    video:'https://drive.google.com/file/d/1c_9krgT9cG-XskoejJx56mI_zviBtmXw/view?usp=sharing'},
    {title:'Nutristien',url:'https://nutristein.ae/',
    video:'https://drive.google.com/file/d/1pJ_MT2NyztQHHpNF2SOJV_z8h9ZrsBWn/view?usp=sharing'},
    {title:'Tech Finder',url:'https://techfinder-deployment-minhaj.netlify.app/',
    video:'https://drive.google.com/file/d/17MUdLt1tHPUZjb2-P8EhyztFtbe0Wvi4/view?usp=sharing'},
    {title:'Spare Parts Dealer',url:'https://sparepartsminhaj.netlify.app',
    video:'https://drive.google.com/file/d/1vbLshvr0ENCxZLeZ-tRD9vIgnoMY8qCn/view?usp=sharing'},
    {title:'Habib Residency',url:'https://minhajhabibupdated.netlify.app/',
    video:'https://drive.google.com/file/d/14i79632L3v3Ju_EfflPsgpLszbNdXGi2/view?usp=sharing'},
    {title:'Rent By Broker',url:'https://minhaj-project-rbb.netlify.app/',
    video:'https://drive.google.com/file/d/1Tue1ZzgzkSbOLWeCll85bO6JDGbTiVb5/view?usp=sharing'},
  ]

  const mobile = [
    {title:'MCare',url:'https://drive.google.com/file/d/1hRYmt63wI6yHuFAjrIPMNSLx_Z2pnoct/view?usp=sharing',
    apk:'https://drive.google.com/file/d/1v9OxKBP0-pT47h28QDGaE88-sX9CWklv/view?usp=sharing'},
    {title:'Grocery App',url:'https://drive.google.com/file/d/1hNg0wpN79vni3ZMAyU257LSlxwtvVQQU/view?usp=sharing',
    apk:'https://drive.google.com/file/d/1FLN1hkyVk6suGIEaEIosRTthGpkYPsZh/view?usp=sharing'},
    {title:'HOM App',url:'https://drive.google.com/file/d/1hPIUOTuSjr6RTiy6ZWpWROYjwinqwcUD/view?usp=sharing',
    apk:'https://drive.google.com/file/d/1hUHOQNN7g_2by4zaj8YHbbXw6AbDtQLX/view?usp=sharing'},
  ]

  return (
    <div className="App">
  
    <div className='firstDiv'>
    <div className='firstSubDIv'>
        <Fade>
      <div>
    <h1 className='firstDivTitle'>
      MINHAJ SOHAIL
    </h1>
    <h1 className='firstDivTitle'>
      Web and Mobile App Developer
    </h1>
    </div>
     </Fade>
    <a
    href={'https://github.com/minhaj321'} target='_blank'
    className='firstDivA'>
    Github Link <BsArrowRight className='arrowIcon' />
    </a>
    </div>
    </div>

    <div className='secondDiv'>
      <div className='secondSubDiv'>

      <Title txt={'About Me:'} />
        <HeadShake >
      <p className='seconDivP'>
      I am a Web and mobile hybrid app developer with 1+ years of experience. I am a good problem solver and a quick learner and want to learn more and more through my carrier. I am very passionate to my work and i do it with honesty. 
      </p>
        </HeadShake >

      <Title txt={'Sklls:'} />
        <div className='skillsDiv'>
            <span><GoPrimitiveDot />Good Problem Solver</span>
            <span><GoPrimitiveDot />Quick Learner</span>
            <span><GoPrimitiveDot />Creative</span>
            <span><GoPrimitiveDot />Team Worker</span>
        </div>

        <Title txt={'My Services:'} />
        <div className='serviceParent'>
    {
      services.map((service)=>(
        <div className='serviceBox'>
            {service}
        </div>
      ))
    }
</div>

<Title txt={'Language and Libraries:'} />
<div className='LanguageParent'>
  {
    libraries.slice(0,4).map((v,i)=>(
      <LanguageDiv data={v} />
    ))
  }
    </div>
    <div className='LanguageParent LanguageParent1'>
  {
    libraries.slice(4,8).map((v,i)=>(
      <LanguageDiv data={v} />
    ))
  }
    </div>
    <div className='LanguageParent LanguageParent1'>
  {
    libraries.slice(8,12).map((v,i)=>(
      <LanguageDiv data={v} />
    ))
  }
    </div>
    <div className='LanguageParent LanguageParent1'>
  {
    libraries.slice(12,16).map((v,i)=>(
      <LanguageDiv data={v} />
    ))
  }
    </div>
    <div className='LanguageParent LanguageParent1'>
  {
    libraries.slice(16,20).map((v,i)=>(
      <LanguageDiv data={v} />
    ))
  }
    </div>


    <Title txt={'Web Applications:'} />

    <div className='webProjectsParent'>
{
  websites.slice(0,3).map((v)=>(
    <WebsiteCard data={v} />
  ))
}
    </div>
    <div className='webProjectsParent webProjectsParent1'>
    {
  websites.slice(3,6).map((v)=>(
    <WebsiteCard data={v} />
  ))
}
    </div>

    <Title txt={'Mobile Applications:'} />
    <div className='webProjectsParent'>
{
  mobile.map((v)=>(
    <MobileCard data={v} />
  ))
}
    </div>
    <br/>
    <br/>
    </div>
    </div>
    </div>
  );
}

export default App;
