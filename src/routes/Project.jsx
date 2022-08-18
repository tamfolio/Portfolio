import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSec from '../components/HeroSec';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroSec heading='PROJECTS' text='My most recent Work'/>
      <Footer/>
    </div>
  )
}

export default Project