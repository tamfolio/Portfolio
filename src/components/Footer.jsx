import React from 'react'
import './Footer.css'
import {  FaLocationArrow, FaPhone, FaMailBulk, FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaLocationArrow size={20} 
                    style={{ color: '#fff',
                    marginRight: "2rem"
                }}
                    />
                    <p>Lagos, Nigeria</p>
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} 
                    style={{ color: '#fff',
                    marginRight: "2rem"
                }}
                    />
                    +2348113128354
                    </h4>
                    
                </div>
                <div className="email">
                    <h4>
                    <FaMailBulk size={20} 
                    style={{ color: '#fff',
                    marginRight: "2rem"
                }}
                    />
                    tamiloreolaniyi@gmail.com
                    </h4>
                    
                </div>
            </div>
            <div className="right">
                <div className="social">
                <FaInstagram size={20} 
                    style={{ color: '#fff',
                    marginRight: "2rem"
                }}
                    />
                    <FaLinkedin size={20} 
                    style={{ color: '#fff',
                    marginRight: "2rem"
                }}
                    />
                    <FaGithub size={20} 
                    style={{ color: '#fff',
                    marginRight: "2rem"
                }}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer