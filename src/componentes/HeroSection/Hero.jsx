import React from 'react'
import heroe from '../../imgs/hero.jpg'


const Hero = () => {
  return (
    <div className='Hero' style={{ 
        backgroundImage: `url(${heroe})`
      }}></div>
  )
}

export default Hero