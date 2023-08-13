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
    <div className='h-16 bg-[--brandColor] flex items-center justify-end px-5'  >
    <NavLink data={navData}/>
</div>
  )
}
