import React, { useState } from 'react'
import NavLink from './navlink'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import MobileView from './mobileView'

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
        }
    ] 

  return (
    <div className=' bg-[--brandColor]  px-5 sticky top-0 z-30 '  >
        <div className='flex items-center w-[85%] mx-auto h-16'>
        <div>
       <h1 className='text-white text-2xl opacity-50'>Ichlkranji</h1>   
        </div>
        <div className=' w-[85%] mx-auto flex items-center justify-end '>
   <div className='hidden md:block' ><NavLink data={navData}/></div> 
   <div className='md:hidden block ' onClick={()=>setOpen(!open)} >
{  open ? <MdClose className='text-white text-2xl cursor-pointer' /> :   <GiHamburgerMenu className='text-white text-2xl cursor-pointer' />
}   



    </div> 

</div>
</div>
{ open && <div className='flex items-center ml-5 p-4'>
    <MobileView data={navData} />
</div>}
</div>
  )
}
