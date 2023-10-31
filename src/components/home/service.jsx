import React from 'react'
import Title from '../shared/title'
import {AiFillCar} from 'react-icons/ai'
import {FaBuilding, FaBaby} from 'react-icons/fa'
import { BsPersonVideo} from 'react-icons/bs'

export default function Service() {

    const cards = [
        { title: "Vehicle Number", description: "Choosing a vehicle number that resonates with your birthdate or personal numerology can enhance the harmony and alignment between you and your vehicle.", imageSrc:  <AiFillCar/> },
        { title: "Company Name", description: "Choosing a company name is a crucial decision, as it plays a significant role in branding and representing your business. ", imageSrc: <FaBuilding/> },
        { title: "Born Baby Name", description: "DChoosing a name for a newborn baby is a highly personal and meaningful decision for parents", imageSrc: <FaBaby/> },
        { title: "Life Time Membership", description: "A lifetime membership typically refers to a membership or subscription that provides access or benefits for the duration of a person's life or the existence of the organization offering it. ", imageSrc: <BsPersonVideo/> },
        { title: "Vehicle Number", description: "Choosing a vehicle number that resonates with your birthdate or personal numerology can enhance the harmony and alignment between you and your vehicle.", imageSrc:  <AiFillCar/> },
        { title: "Company Name", description: "Choosing a company name is a crucial decision, as it plays a significant role in branding and representing your business. ", imageSrc: <FaBuilding/> },
    ];

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
         </div>
                    </div>
                ))}
            </div>
        </div>

        <br/>
      <br/>
    </div>
  )
}
