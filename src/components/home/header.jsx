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
<p className='md:text-xl text-lg opacity-80 '>Small mistake in name can destroy life. So choose name means pronounciation of name as per kundali and increase ur income. Adding extra character alphabet does not mean anything. Anil Ambani suffered due to wrong name. </p>
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
