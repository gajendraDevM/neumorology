import React from 'react'
import Slider from "react-slick";
import bgt from '../../images/bgt.jpg'
import Title from '../shared/title';
import {MdFormatQuote} from 'react-icons/md'
export default function Testimonial() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
       

      };

      const testimonialData = [{
        name:"vishu C",
        desc:"Vivid explanation given to me and my friends by Ichalkranji numerrology on requested area and results are amazing .I wish very best luck to vinayak sir and hope all receive expected results to their demands on numerology queries . 👌👌💐"
},
{
        name:"Karan R",
        desc:"Vivid explanation given to me and my friends by Ichalkranji numerrology on requested area and results are amazing .I wish very best luck to vinayak sir and hope all receive expected results to their demands on numerology queries . 👌👌💐"
},
{
        name:"Roma s",
        desc:"Vivid explanation given to me and my friends by Ichalkranji numerrology on requested area and results are amazing .I wish very best luck to vinayak sir and hope all receive expected results to their demands on numerology queries . 👌👌💐"
},
]


  return (
    <div style={{backgroundImage:`url(${bgt})`}} className='py-6' >
         <br/>
      <br/>
     <div className='container mx-auto p-6 w-[65%] '  >
     <div className='flex justify-center'>

        <Title title="Testimonial"/>
        </div>
        <br/>
        <Slider {...settings}>
         {
            testimonialData?.map((item, i)=>{

                return <div key={i} className='' >
                    <div className='bg-[#17384E] mx-2 p-4 px-8 h-[300px] flex items-center justify-center  rounded-xl' >
                        <div>
                            <MdFormatQuote className='text-[100px] text-center block mx-auto ' style={{color:"var(--accentColor)"}} />
                    <p className=' text-gray-300 text-center text-[16px]' >{item?.desc}</p>
                    <p className=' font-bold text-[var(--accentColor)] text-center text-2xl my-4' style={{fontFamily:"var(--headerFont)"}} >{item?.name}</p></div></div>
                </div>
            })
         }
        </Slider>
      </div> 
      
      <br/>
      <br/>

      </div>
  )
}
