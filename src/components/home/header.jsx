import React from 'react'
import bg from '../../../public/static/bg1.jpg'

export default function Header() {
  return (
    <div className="h-[500px]" style={{backgroundImage:`url('${bg}')`}}  >Header</div>
  )
}
