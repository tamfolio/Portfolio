import React from 'react'
import Footer from '../components/Footer'
import HeroSec from '../components/HeroSec'
import Navbar from '../components/Navbar'


const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroSec heading='ABOUT ME' text='Brief Info about me'/>
      <Footer/>
    </div>
  )
}

export default About