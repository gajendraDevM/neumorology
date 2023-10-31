import React from 'react'
import NavLink from './navlink'

export default function MobileView({data}) {
  return (
    <div>
<NavLink data={data} isMobile={true}/>
    </div>
  )
}
