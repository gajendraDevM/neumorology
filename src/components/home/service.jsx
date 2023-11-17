import React from 'react'
import Title from '../shared/title'
import Button from '../shared/button'


export default function Service({cards, isHome}) {

 
  // { title: "Signature", price:"₹1,500.00", description: "Make your signature strong with auspicious numerology and with precise guidance of graphology ", imageSrc: <BsPersonVideo/> },
  // { title: "Mobile Number", price:"₹1,500.00", description: "Numbers plays a vital role in your life and so does Your mobile number is important. It shows your identity. Let's make it valuable with numerology.", imageSrc:  <AiFillCar/> },
  //    { title: "Name correction", price:"₹8,700.00", description: "Your name is not an accident, It has to many vibes,destiny,and power. A little change in your name makes a very big difference in your life. Same can be improved with the help of number science. Change it with numerology.100% guaranteed result", imageSrc: <FaBuilding/> },
  // { title: "Bank A/c. numbers", price:"₹555.00", description: "There is a hidden awakened power in every number used by the person. We just need to use good numbers for ourselves. This thing is applicable for all types of numbers, even for bank account numbers.", imageSrc: <FaBuilding/> },


  return (
    <div className='bg-[var(--brandColor)] py-4'>
 <br/>
      <br/>
<div className='flex justify-center'>
   <Title title="Our Services" /> 
</div>



<div className="container mx-auto p-6  md:w-[60%] lg:w-[70%]  ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {cards.map((card, index) => (
                    <div key={index} className='p-4 bg-[var(--secondoryColor)] center pb-4 pt-2 cursor-pointer rounded-md' >
<div>
<div className='border-2 mx-auto my-2 border-[#233850d2] border-dotted p-2 rounded-full w-[100px] h-[100px] center'>

                             <h1 className='text-5xl p-4 text-center  bg-[#17384E] text-[var(--accentColor)] rounded-full '>{card.imageSrc}</h1>

</div>
         <h2 className='text-xl text-white text-center mb-2' style={{fontFamily:"var(--headerFont)"}}>{card.title}</h2>
         <p className='text-gray-400 text-center text-sm' >{card.description}</p>
         <hr className='opacity-30 my-4'/>
                  <p className='text-gray-400 text-center text-md' style={{fontFamily:"var(--headerFont)"}} >Price: <b className='text-[var(--accentColor)]' >{card.price}/-</b></p>

         </div>
                    </div>
                ))}
            </div>
            <br/>
     {  isHome &&         <div className='flex justify-center items-center' >
      <Button link="/services" text="All services"/>
</div>}
        </div>



        <br/>
      <br/>
    </div>
  )
}
