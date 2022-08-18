import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSec from '../components/HeroSec';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroSec heading='CONTACT ME' text='How to reach me'/>
      <Footer/>
    </div>
  )
}

export default Contact