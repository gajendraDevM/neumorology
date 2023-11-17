import React from 'react'
import {Link} from 'gatsby'
export default function Button({text, link="#"}) {
  return <Link to={link}><button className='px-6 py-2 font-light uppercase rounded-full text-white text-xl bg-[var(--accentColor)]
  hover:bg-[#5F7A95] transition-all ease-in-out
  '>{text}</button></Link> 
}
