import React from 'react'
import aboutImg from '../../images/abt.jpg'
export default function About() {
  return (
    <div>
    <div  className=" grid grid-cols-6 gap-4" >
    <div className="col-span-6 md:col-span-3  lg:col-span-2 flex items-center ">
              <img src={aboutImg} alt="About Us" className="image  rounded-md  shadow-lg opacity-80" />
            </div>
    <div className="col-span-6 md:col-span-3 lg:col-span-4 flex items-start">
      <div className="px-5">
            {/* <h2 className="text-white text-3xl my-4">About Shakya</h2> */}
            <h3 className="text-gray-300 text-sm mt-5 text-inter text-center md:text-left md:text-sm lg:text-lg xl:text-xl">
            <b className='mb-4' >Speciality</b> : <br/>
            Name solutions according to numerrology by individual dates. Name solutions for company and product with catchy and meaningful. Name solutions for born baby names with devotion and positive meaning. 
          <br/>
          <br/>

            <b className='mb-4' >Other specialization</b> : <br/>Providing lucky colors for branding. Providing graphology tips for company logo and individual signature
            </h3>
          </div>  

          
          </div>
    </div>
    <div className="container mx-auto mt-8 p-4 text-white opacity-70">
      <h1 className="text-4xl font-bold mb-4   " style={{fontFamily:"var(--headerFont)"}} >Company Information</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold">Established</h2>
          <p>2013</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Head Office</h2>
          <p>Ichalakranji</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Owner Name</h2>
          <p>Vienaayak Savairam</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Total Years of Work</h2>
          <p>10+</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Total Employees</h2>
          <p>6</p>
        </div>
      </div>
    </div>
    </div>
  )
}
