import React from 'react'
import Title from '../shared/title'
import bg2 from '../../images/bg2.jpg'
import about from '../../images/about2.jpg'
import Button from '../shared/button'
import {BiSolidPhoneCall} from 'react-icons/bi'
export default function About() {
  return (
    <div className='h-min-[700px]  ' style={{backgroundImage:`url('${bg2}')`}}>

        <div className="grid grid-cols-1  sm:grid-cols-2 h-full p-5 pb-5 container  mx-auto gap-14">
            <div className='flex items-center justify-end' >

<img src={about} alt="" style={{boxShadow:"-40px 40px #0c3852"}}  />

            </div>
            <div className='flex items-center'>
                <div>
                 <Title left="15%" title=" About Us"/>
                 <br/>
                 <br/>
                 <p className='text-white text-lg  font-[400]  opacity-70 '>
                 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Ipsum is that it esdehas a more-or less normal distribution of letters.As opposed to using Content here content here making it look likesdesdee readable English.Many desktop publishing packages and web page editors sdesnow use em Ipsum as their default model text, and a search for lorem will usdencover many web sites still in their web page editors sdesnow infancy.
                 </p>
                 <br/>

                 <Button text="Read More"/>
                    <br/> <br/>
                 <div className='grid grid-cols-4   lg:w-[70%] bg-[#114a6b77] py-4 px-1 rounded'>
                    
                <div className='flex items-center justify-center'>
                    <div className='border border-dashed  border-[var(--accentColor)] rounded-full p-2'>
<BiSolidPhoneCall className='text-7xl p-4 bg-[var(--accentColor)] text-white rounded-full '/>
                   </div>
                </div>

                <div className=' col-span-3 flex items-center justify-start'>
<div>
                 <h3 className='text-xl text-white mb-2' style={{fontFamily:"var(--headerFont)"}}>Contact Our Expert Numerologist</h3>
<h2 className='text-3xl font-bold text-[var(--accentColor)]'>{`+ (91) 09011235111`}</h2>   </div>
                </div>

                 </div>

                 </div>
            </div>

        </div>

       
    </div>
  )
}
