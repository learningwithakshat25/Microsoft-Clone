import React from 'react'
import Heroimg from '../assets/Hero-img.avif'

const Hero = () => {
  return (
    <div className='container mx-auto'>
        <img className='w-screen' src={Heroimg} alt="Hero-img" />
    </div>
  )
}

export default Hero