import React from 'react'
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


<div className="md:h-[700px] h-[450px] bg-[#07273c70] mt-8 md:mt-0"  style={{background: "linear-gradient(180deg, rgba(255,255,255,0) 1%, rgba(7,39,60,1) 100%)"}}  >

<div className="md:grid grid-cols-9  h-full w-[85%] mx-auto">
  <div className="col-span-6 flex items-center justify-start ">
    <div className='text-white'>
<h3 className='text-[var(--accentColor)] text-4xl mb-0 ' style={{fontFamily:"var(--headerFont)"}}>Whats Ichlkranji numerrology?</h3>

<TypeAnimation
  sequence={['mystical significance of numbers', 500, 'positive outcome', 500, 'personal triumph', 500]}
  style={{  fontFamily:"var(--headerFont)"}}
  speed={200}
  className='md:text-[4rem] text-[1.5rem]'
  repeat={Infinity}
/>
{/* <h1 className='text-6xl' style={{fontFamily:"var(--headerFont)"}}>Knowledge, solutions and many more
 <br/> Open until midnight tomorrow</h1> */}
<br/>
<p className='md:text-xl text-sm mt-2 opacity-80 '>Ichlkranji numerology has been providing proper guidance in numerology since 2013 and is giving auspicious results for the numbers and names used in it. According to the date of birth of different persons, how should their auspicious name be, what type of mobile number, signature, vehicle number, which color to use or avoid and other types of proper and prompt guidance is given through Numerology. </p>
 <br/>
 <Button link='contact' text="Contact Us"/>
    </div>
  </div>
  <div className="col-span-3 md:flex items-center justify-start  hidden ">

<img src={zudicImg} alt="" className=" w-[600px] animate-spin" />

  </div>

</div>

    </div>



    </div>
</div>


    
  )
}
