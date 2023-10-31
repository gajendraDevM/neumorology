import React from 'react'
import bg from '../../../public/static/bg1.jpg'
import zudicImg from '../../images/zodiac.png'
import Button from '../shared/button'
import {TypeAnimation} from 'react-type-animation'
import bgv from '../../images/bgv.mp4'
export default function Header() {
  return ( <div class="relative overflow-hidden">
    <video autoPlay loop muted class="absolute top-0 left-0 w-full h-full object-cover">
        <source src={bgv} type="video/mp4"/>
        Your browser does not support the video tag.
    </video>
    <div class="relative"> 


<div className="md:h-[700px] h-[400px] bg-[#07273c70] mt-8 md:mt-0"  style={{background: "linear-gradient(180deg, rgba(255,255,255,0) 1%, rgba(7,39,60,1) 100%)"}}  >

<div className="md:grid grid-cols-9  h-full w-[85%] mx-auto">
  <div className="col-span-6 flex items-center justify-start ">
    <div className='text-white'>
<h3 className='text-[var(--accentColor)] text-4xl mb-0 ' style={{fontFamily:"var(--headerFont)"}}>Whats Ichlkranji numerrology?</h3>

<TypeAnimation
  sequence={['Knowledge, ', 500, 'and many more', 500, 'Open until midnight tomorrow', 500]}
  style={{  fontFamily:"var(--headerFont)"}}
  speed={200}
  className='md:text-[4rem] text-[2rem]'
  repeat={Infinity}
/>
{/* <h1 className='text-6xl' style={{fontFamily:"var(--headerFont)"}}>Knowledge, solutions and many more
 <br/> Open until midnight tomorrow</h1> */}
<br/>
<p className='text-xl opacity-70 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores a autem recusandae architecto <br /> laboriosam,   totam quod temporibus esse tenetur veniam.</p>
 <br/>
 <Button text="Read More"/>
    </div>
  </div>
  <div className="col-span-3 flex items-center justify-start md:block hidden ">

<img src={zudicImg} alt="" className=" w-[600px] animate-spin" />

  </div>

</div>

    </div>



    </div>
</div>


    
  )
}
