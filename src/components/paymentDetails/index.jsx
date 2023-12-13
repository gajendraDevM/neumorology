import React from 'react'
import Header from '../shared/header'

export default function PaymentDetails() {
  return (
    <div className='bg-[--brandColor]' > 
<Header title="Payment Details"/>



<div className="container mx-auto mt-8 p-4 text-white opacity-70 h-[40vh]  ">
      <h1 className="md:text-4xl text-3xl font-bold mb-4   " style={{fontFamily:"var(--headerFont)"}} >Bank Account Details</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold">Account number </h2>
          <p>409001878616</p>
        </div>
         <div>
          <h2 className="text-xl font-semibold">Bank name </h2>
          <p> RBL bank</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">IFSC Code</h2>
          <p>RATN0000040</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Account name </h2>
          <p>ichlkranji  numerrology</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Gpay number</h2>
          <p> 9011235111</p>
        </div>
      
      </div>
    </div>
    </div>
  )
}
