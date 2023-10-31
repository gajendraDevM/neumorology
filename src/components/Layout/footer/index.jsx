import {FaFacebook,  FaInstagram,  FaWhatsapp, FaYoutube} from 'react-icons/fa'
import { Link } from 'gatsby';
import React from 'react';

export default function Footer() {

  const socialmedia = [
    
    {
      icon:FaWhatsapp,
      link:"",
      color:"text-[#009113]"
    },
    {
    icon:FaFacebook,
    link:"",
    color:"text-[#1877F2]"
  },
  {
    icon:FaInstagram,
    link:"",
    color:"text-[#fc179c]"

  },
  {
    icon:FaYoutube,
    link:"",
    color:"text-[#C4302b]"

  }]


  const navData = [{
    label:"Home",
    path:"/",
},

{
    label:"About",
    path:"/about",
},


{
    label:"Services",
    path:"/services",
},
{
    label:"Contact",
    path:"/contact",
    
}

]

  return (
    <footer  className="pt-5 bg-[#031D2E] relative  ">

      
     
<br/>

<ul className='flex justify-center items-center gap-x-4'>
  {
    socialmedia.map((item, i)=>{

      const {icon:SocialIcon} = item

      return <li key={i} className=' '>
        <SocialIcon className={` text-3xl text-[var(--accentColor)]  cursor-pointer rounded-full bg-brand p-[5px]`}/>
      </li>
    })
  }
</ul>

<div className='text-gray-100 text-sm flex items-center justify-center gap-x-6 p-4'>
{navData?.map(item=>{

  return <div>

<Link to={item.path}>{item.label}</Link>

  </div>
})}
      </div>

      <br/>

<small className='text-center text-[12px] text-gray-200 block text-brand opacity-70 p-2 bg-[#183f58]'>Copyright © neumarology 2023</small>

    </footer>
  )
}
