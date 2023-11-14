import React from 'react'

import bg from '../../images/bgabt.jpg'

export default function Header({title}) {
  return (
    <div className="w-full relative h-[300px]   flex items-center justify-center  bg-cover bg-no-repeat bg-center after:absolute after:w-full
    after:bg-[#031d2ec4]  after:h-full 
    "
 style={{backgroundImage:`url('${bg}')`}}>
  <div className='container mx-auto '>
      <h2 style={{fontFamily:"var(--headerFont)"}} className='text-5xl font-bold relative z-10 text-gray-300 text-center ' >{title}</h2>

  </div>
</div>
  )
}
