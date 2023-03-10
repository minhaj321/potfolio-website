import React from 'react'
import VideoIcon from './../../assets/Ondemand.png';

const CardComponent = ({setTrans,trans,index,website}) => {
  return (
    <div className='websiteCardParent'>
    <div key={index} className='websiteCardMain'
        onMouseEnter={()=>setTrans(index)}
        onMouseLeave={()=>setTrans(-1)}
    >
    <div className={trans==index ? 'logoDiv logoDivTrans' : 'logoDiv'}>
        <img src={website.src} className='logoIcons'
        onClick={()=>window.open(website.url)} 
        />
    </div>
    <div className={trans==index ? 'videoDiv videoDivTrans' : 'videoDiv'}>
        <a href={website.video} target='_blank'>
        <img src={VideoIcon} className='videoIcon' 
        // onClick={()=>window.href}
        />
        </a>
    </div>

    <div className={trans==index ? 'webTitle webTitleTrans' : 'webTitle'}>
    <span>
        <a target={'_blank'} href={website.url}>
        {website.title}
        </a>
        </span>
    </div>
    
    </div>
    </div>
  )
}

export default CardComponent