import React, { useState } from 'react'
import NavLink from './navlink'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import MobileView from './mobileView'
import logo from '../../../images/logo.png'

export default function Navbar() {


    const [open, setOpen] = useState(false)



    const navData = [
        {
            label:"Home",
            path:"/"
        },
        {
            label:"About",
            path:"/about"
        },
        {
            label:"Services",
            path:"/services"
        },
        {
            label:"Contact",
            path:"/contact"
        },
 {
            label:"Payment Details",
            path:"/payement_details"
        },
        
    ] 

  return (
    <div className=' bg-[--brandColor]  md:px-5 px-2 sticky top-0 z-30 '  >
        <div className='flex items-center md:w-[85%] w-[90%] mx-auto h-16'>
        <div className='flex items-center gap-x-2'>
       <img src={logo} className='w-12' alt="" />
       <h1 className='text-[#f5f5f5] text-xl  leading-[1.1]' >Ichlkranji Numerrology</h1>   

        </div>
        <div className=' md:w-[85%] w-[90%] mx-auto flex items-center justify-end '>
   <div className='hidden md:block' ><NavLink data={navData}/></div> 
   <div className='md:hidden block ' onClick={()=>setOpen(!open)} >
{  open ? <MdClose className='text-white text-2xl cursor-pointer' /> :   <GiHamburgerMenu className='text-white text-2xl cursor-pointer' />
}   



    </div> 

</div>
</div>
{ open && <div className='flex items-center md:ml-5 ml-0 p-4'>
    <MobileView data={navData} />
</div>}
</div>
  )
}
