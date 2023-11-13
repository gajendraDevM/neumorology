import React, { useState, useEffect } from 'react';
import ContactPage from './form'
import Header from '../shared/header';
export default function Contact() {
  return  <div className='contact' >
<Header title="Contact Us"/>
<br/>
<br/>
<ContactPage/>
    </div>
  
}
