import React from 'react'

import bg from '../../images/bg2.jpg'

export default function Header({title}) {
  return (
    <div className="w-full h-[200px]  bg-[#14397e] flex items-center justify-center  bg-cover bg-no-repeat bg-center"
 style={{backgroundImage:`url('${bg}')`}}>
  <div className='container mx-auto '>
      <h2 style={{fontFamily:"var(--headerFont)"}} className='text-5xl font-bold text-gray-300 text-center ' >{title}</h2>

  </div>
</div>
  )
}
