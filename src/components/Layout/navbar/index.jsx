import React from 'react'
import NavLink from './navlink'

export default function Navbar() {

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
       <h1 className='text-white text-2xl opacity-50'>Ichlkranji numerrology</h1>   
        </div>
        <div className=' w-[85%] mx-auto flex items-center justify-end '>
    <NavLink data={navData}/>
</div>
</div>
</div>
  )
}
