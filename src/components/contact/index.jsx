import React, { useState, useEffect } from 'react';
import ContactPage from './form'
import Header from '../shared/header';
import GoogleMap from '../shared/map'

export default function Contact() {
  return  <div className='contact' >
<Header title="Contact Us"/>
<br/>
<br/>
<ContactPage/>

{/* <GoogleMap/> */}

    </div>
  
}
