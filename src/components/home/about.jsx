import React from 'react'
import Title from '../shared/title'
import bg2 from '../../images/bg2.jpg'
import about from '../../images/aboutus.jpg'
import Button from '../shared/button'
import {BiSolidPhoneCall} from 'react-icons/bi'
export default function About() {
  return (
    <div className='h-min-[700px]  ' style={{backgroundImage:`url('${bg2}')`}}>

        <div className="grid grid-cols-1  sm:grid-cols-2 h-full md:p-5 p-2 pb-5 container  mx-auto gap-14">
            <div className='flex items-center justify-end' >

<img src={about} className='md:w-[80%]' alt="" style={{boxShadow:"-40px 40px #0c3852"}}  />

            </div>
            <div className='flex items-center'>
                <div>
                 <Title left="15%" title=" About Us"/>
                 <br/>
                 <br/>
                 <p className='text-white md:text-lg text-[16px]  font-[400]  opacity-70 '>
              
                 Ichlkranji Numerology is a belief in the mystical significance of numbers and their influence on human life. It's often associated with divinatory arts and is considered a form of pseudoscience. Practitioners of numerology believe that numbers can reveal information about a person's character, talents, strengths, weaknesses, and even predict their future.
                 </p>
                 <br/>

                 <Button link="/about" text="Read More"/>
                    <br/> <br/>
                 <div className='grid grid-cols-7 md:grid-cols-4  gap-x-4 md:gap-x-2 w-[100%]  lg:w-[70%] bg-[#114a6b77] py-4 px-1 rounded'>
                    
                <div className='flex items-center justify-center col-span-2 md:col-span-1'>
                    <div className='border border-dashed  border-[var(--accentColor)] rounded-full p-2'>
<BiSolidPhoneCall className=' text-6xl md:text-7xl p-4 bg-[var(--accentColor)] text-white rounded-full '/>
                   </div>
                </div>

                <div className=' col-span-5 md:col-span-3 flex items-center justify-start'>
<div>
                 <h3 className='text-xl text-white mb-2' style={{fontFamily:"var(--headerFont)"}}>Contact Our Expert Numerologist</h3>
<h2 className='md:text-3xl text-2xl font-bold text-[var(--accentColor)]'>{`+ (91) 9011235111`}</h2>   </div>
                </div>

                 </div>

                 </div>
            </div>

        </div>

       
    </div>
  )
}
