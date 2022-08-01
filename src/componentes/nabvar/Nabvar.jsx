
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Hero from '../HeroSection/Hero';



const Nabvar = () => {
  return (

    <div className='container-fluid'>
          <div className="row navbar justify-content-center">
            <div className="col-md-1 navbar__item">
              <Link to={'/'} className="navbar__link">Home</Link>
            </div>
            <div className="col-md-1 navbar__item">
              <Link to='/categoria/dc' className="navbar__link">DC Comics</Link>
            </div>
            <div className="col-md-1 navbar__item">
              <Link to='/categoria/marvel' className="navbar__link">Marvel Comics</Link>
            </div>
            <div className="col-md-1 navbar__item">
            <Link to='/sobreNosotros' className="navbar__link">Sobre Nosotros</Link>
            </div>
          </div>
          <div className="row Hero">
              <Hero />
          </div>
    </div>
  )
}

export default Nabvar