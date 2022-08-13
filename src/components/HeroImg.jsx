import React from 'react'
import './HeroImg.css'
import { Link } from 'react-router-dom'

export const HeroImg = () => {
  return (
    <div className='hero'>
        <div className="mask">
            <img src="/assets/work3.jpg" alt="Background Hero" className="intro-img" />
            <div className="content">
                <p>Hi, My Name is Tamilore</p>
                <h1>React Developer</h1>
                <div>
                    <Link to='/project' className='btn'>
                        Projects
                    </Link>
                    <Link to='/contact' className='btn btn-light'>
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
