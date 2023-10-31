import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Layout({children}) {
  return (
    <main>
<Navbar/>

{children}

<Footer/>




    </main>
  )
}
