import React from 'react'
import Header from '../shared/header'
import Service from '../home/service'

import {AiFillCar} from 'react-icons/ai'
import {FaBuilding, FaBaby, FaMobileAlt  } from 'react-icons/fa'
import { FaSignature   } from "react-icons/fa6";

import { BsPersonVideo} from 'react-icons/bs'
import {TbReport} from 'react-icons/tb'
import { MdAccountBalance, MdOutlineSwipeRight } from "react-icons/md";

export default function Services() {


  const cards = [
    { title: "Vehicle Number", price:"₹1,500.00", description: "Numbers plays a vital role in your life and so does Your vehicle number is important. It shows your identity. Let's make it valuable with numerology. ", imageSrc:  <AiFillCar/> },
    { title: "Company Name (LLP or pvt.ltd", price:"₹9,600.00",  description: "Choosing a company name is a crucial decision, as it plays a significant role in branding and representing your business. ", imageSrc: <FaBuilding/> },
     { title: "Company Name (small scale)",  price:"₹6,000.00", description: "Choosing a company name is a crucial decision, as it plays a significant role in branding and representing your business. ", imageSrc: <FaBuilding/> },

   
    { title: "Born  Boy Name", price:"₹4,200.00", description: "Every Name has hidden power of a number. If it matches well then it will be helpful for the person.For the same we suggest the name according to number that increases the luck of a baby for her future.", imageSrc: <FaBaby/> },
    { title: "Born  Girl Name", price:" ₹2,400.00",   description: "Every Name has hidden power of a number. If it matches well then it will be helpful for the person.For the same we suggest the name according to number that increases the luck of a baby for her future.", imageSrc: <FaBaby/> },
    { title: "Full Report", price:"₹15,000.00", description: "this segment cover all fields of numerology tricks and tools. Just on a number we can give you lucky day,lucky date, color, gem stone , mobile /vehicle number etc along with all the remedies to follow based on numerology. 100% guaranteed result.", imageSrc: <TbReport/> },



    { title: "Signature", price:"₹1,500.00", description: "Make your signature strong with auspicious numerology and with precise guidance of graphology ", imageSrc: <FaSignature/> },
    { title: "Mobile Number", price:"₹1,500.00", description: "Numbers plays a vital role in your life and so does Your mobile number is important. It shows your identity. Let's make it valuable with numerology.", imageSrc:  <FaMobileAlt /> },
       { title: "Name correction", price:"₹8,700.00", description: "Your name is not an accident, It has to many vibes,destiny,and power. A little change in your name makes a very big difference in your life. Same can be improved with the help of number science. Change it with numerology.100% guaranteed result", imageSrc: <MdOutlineSwipeRight /> },
    { title: "Bank A/c. numbers", price:"₹555.00", description: "There is a hidden awakened power in every number used by the person. We just need to use good numbers for ourselves. This thing is applicable for all types of numbers, even for bank account numbers.", imageSrc: <MdAccountBalance /> },


  ];

  return (
    <div className=''>

<Header title="Services"/>
<Service cards={cards} isHome={false} />

    </div>
  )
}
