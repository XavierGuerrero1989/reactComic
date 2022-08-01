import React from 'react'
import heroeImg from '../../imgs/hero.jpg'


const Hero = () => {
  return (
    <div className='hero col-md-12' style={{ 
        backgroundImage: `url(${heroeImg})`
      }}></div>
  )
}

export default Hero