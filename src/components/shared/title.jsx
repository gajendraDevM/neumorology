import React from 'react'

export default function 
Title({title, left="50%", fontSize="text-4xl", top="top-14"}) {
  return (

  
        <div className="relative inline-block mb-7">
        <h2 className={` text-white ${fontSize}`} style={{fontFamily:"var(--headerFont)"}}>{title}</h2>
    <div style={{left: left}} className={`absolute  transform translate-x-[-50%] translate-y-[-50%] w-[30%] h-1 bg-[var(--accentColor)] rounded ${top}`}></div>
</div>
  
 
  )
}
