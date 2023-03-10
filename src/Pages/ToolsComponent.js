import React from 'react'
import Header from './../components/Header/Header.js';
import './ToolsStyling.css';
import Title from '../components/title.js';

// icons
import {BiCodeAlt} from 'react-icons/bi';
import {AiFillHtml5} from 'react-icons/ai';
import {GrGraphQl} from 'react-icons/gr';
import {BsGithub,BsBootstrapFill} from 'react-icons/bs';
import {FaAngular} from 'react-icons/fa';
import {
  SiGooglemaps,SiMongodb,SiMaterialui,SiNodedotjs,SiMysql,SiFirebase,SiExpress,
  SiRedux,SiSocketdotio,SiExpo,SiNextdotjs,SiNestjs} from 'react-icons/si';
import {DiCss3,DiJavascript1,DiReact} from 'react-icons/di';

const ToolsComponent = () => {

    const libraries=[
        {icon : <AiFillHtml5  className='languageIcon html' />,title:'HTML5'},
        {icon : <DiCss3  className='languageIcon css' />,title:'CSS3'},
        {icon : <DiJavascript1  className='languageIcon js' />,title:'JavaScript'},
        {icon : <DiReact  className='languageIcon react' />,title:'ReactJS'},
        {icon : <SiNextdotjs  className='languageIcon next' />,title:'NextJS'},
        {icon : <DiReact  className='languageIcon react' />,title:'React Native'},
        {icon : <SiExpo  className='languageIcon expo' />,title:'Expo CLI'},
        {icon : <BiCodeAlt  className='languageIcon nativebase' />,title:'NativeBase'},
        {icon : <FaAngular  className='languageIcon mui' />,title:'Angular'},
        {icon : <SiNestjs  className='languageIcon bootstrap' />,title:'NestJS'},
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

  return (
    <>
    <Header active='tools' />
    <div className='websiteLayoutDiv' style={{paddingTop:10}}>
      <div className='websiteLayoutSubDiv'>
      <Title txt={'Tools :'} />
        <div className='libraryMainDiv'>
    {
        libraries.map((library,index)=>(
            <div key={index} className='libraryDiv'>
            {library.icon}
            <span>{library.title}</span>
            </div>
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

export default ToolsComponent