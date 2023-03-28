import './AboutContentStyles.css'

import React from 'react'
import { Link } from 'react-router-dom';
import wallpaper from '../assets/hd-wallpaper-4106667.jpg'
import engineer from '../assets/software.jpg'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>Im Mern Stack Developer. I create best and secure websites for my clients.</p>
            <Link to="/contact">
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={wallpaper} className="img" alt='AyeshaTajamal'/>

                </div>
                <div className='img-stack bottom'>
                    <img src={engineer} className="img" alt='AyeshaTajamal'/>

                </div>

            </div>
        </div>
      
    </div>
  )
}

export default AboutContent
