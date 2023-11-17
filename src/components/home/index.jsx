import React from 'react'
import Header from './header'
import About from './about'
import Service from './service'
import Testimonial from './testimonial'


import {AiFillCar} from 'react-icons/ai'
import {FaBuilding, FaBaby} from 'react-icons/fa'
import {TbReport} from 'react-icons/tb'


export default function Home() {


  const cards = [
    { title: "Vehicle Number", price:"₹1,500.00", description: "Numbers plays a vital role in your life and so does Your vehicle number is important. It shows your identity. Let's make it valuable with numerology. ", imageSrc:  <AiFillCar/> },
    { title: "Company Name (LLP or pvt.ltd", price:"₹9,600.00",  description: "Choosing a company name is a crucial decision, as it plays a significant role in branding and representing your business. ", imageSrc: <FaBuilding/> },
     { title: "Company Name (small sacale)",  price:"₹6,000.00", description: "Choosing a company name is a crucial decision, as it plays a significant role in branding and representing your business. ", imageSrc: <FaBuilding/> },

   
    { title: "Born  Boy Name", price:"₹4,200.00", description: "Every Name has hidden power of a number. If it matches well then it will be helpful for the person.For the same we suggest the name according to number that increases the luck of a baby for her future.", imageSrc: <FaBaby/> },
    { title: "Born  Girl Name", price:"₹2,400.00",   description: "Every Name has hidden power of a number. If it matches well then it will be helpful for the person.For the same we suggest the name according to number that increases the luck of a baby for her future.", imageSrc: <FaBaby/> },
    { title: "Full Report", price:"₹15,000.00", description: "this segment cover all fields of numerology tricks and tools. Just on a number we can give you lucky day,lucky date, color, gem stone , mobile /vehicle number etc along with all the remedies to follow based on numerology. 100% guaranteed result.", imageSrc: <TbReport/> },




  ];



  return (
    <div>

<Header/>

<About />

<Service cards={cards} isHome={true} />
<Testimonial/>

    </div>
  )
}
