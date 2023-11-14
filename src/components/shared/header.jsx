import React from 'react'

import bg from '../../images/bgabt.jpg'

export default function Header({title}) {
  return (
    <div className="w-full relative md:h-[300px] h-[150px]   flex items-center justify-center  bg-cover bg-no-repeat bg-center after:absolute after:w-full
    after:bg-[#031d2ec4]  after:h-full 
    "
 style={{backgroundImage:`url('${bg}')`}}>
  <div className='container mx-auto '>
      <h2 style={{fontFamily:"var(--headerFont)"}} className='md:text-5xl text-3xl font-bold relative z-10 text-gray-300 text-center ' >{title}</h2>

  </div>
</div>
  )
}
