import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'gatsby';
import React from 'react';

export default function Footer() {

  const socialmedia = [
    
    {
      icon:FaWhatsapp,
      link:"https://api.whatsapp.com/send?phone=9011235111",
      color:"text-[#009113]",
      title:"Whatsapp"
    },
    {
    icon:FaFacebook,
    link:"https://www.facebook.com/vienaayaksavairam/",
    color:"text-[#1877F2]",
    title:"Facebook"
  },
  {
    icon:FaInstagram,
    link:"https://instagram.com/ichlkranji_numerrology?igshid=NTA5ZTk1NTc=",
    color:"text-[#fc179c]",
    title:"Instagram"

  },
  {
    icon:FaYoutube,
    link:"https://youtube.com/@ichlkranjinumerrology5066",
    color:"text-[#C4302b]",
    title:"Youtube"

  },
  {
    icon:FaTwitter,
    link:"https://twitter.com/vienaayak?t=twcEkrww6SbNe3RBBKcuhQ&s=09",
    color:"text-[#19b9e0]",
    title:"Twitter"

  }
,
  {
    icon:FaMapMarkerAlt,
    link:"https://g.co/kgs/wyS8y5",
    color:"text-[#e01919]",
    title:"Google Map"

  }
]


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

      return <a href={item.link} key={i}  target='new_tab'><li  className=' '>
        <SocialIcon className={` text-3xl text-[var(--accentColor)]  cursor-pointer rounded-full bg-brand p-[5px]`}/>
      </li></a>
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
