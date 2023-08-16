import React from 'react'
import Title from '../shared/title'
import {AiFillCar} from 'react-icons/ai'
import {FaBuilding, FaBaby} from 'react-icons/fa'
import { BsPersonVideo} from 'react-icons/bs'

export default function Service() {

    const cards = [
        { title: "Vehicle Number", description: "Description 1", imageSrc:  <AiFillCar/> },
        { title: "Company Name", description: "Description 2", imageSrc: <FaBuilding/> },
        { title: "Born Baby Name", description: "Description 3", imageSrc: <FaBaby/> },
        { title: "Life Time Membership", description: "Description 4", imageSrc: <BsPersonVideo/> },
    ];

  return (
    <div className='bg-[var(--brandColor)] py-4'>

<div className='flex justify-center'>
   <Title title="Our Services" /> 
</div>



<div className="container mx-auto p-6 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cards.map((card, index) => (
                    <div key={index} className='p-4 bg-[var(--secondoryColor)] flex item-center justify-center pb-4 pt-2' >
<div>
<div className='border-2 mx-auto my-2 border-[#233850d2] border-dotted p-2 rounded-full w-[100px] h-[100px] flex items-center justify-center'>

                             <h1 className='text-5xl p-4 text-center  bg-[#17384E] text-[var(--accentColor)] rounded-full '>{card.imageSrc}</h1>

</div>
         <h2 className='text-xl text-white text-center' style={{fontFamily:"var(--headerFont)"}}>{card.title}</h2>
         {/* <p>{card.description}</p> */}
         </div>
                    </div>
                ))}
            </div>
        </div>


    </div>
  )
}
