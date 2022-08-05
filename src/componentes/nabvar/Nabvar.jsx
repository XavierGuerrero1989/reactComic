
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BotonCarrito from '../botonCarrito/BotonCarrito';
import BotonLogin from '../botonLogin/BotonLogIn';
import logoimg from '../../imgs/logo.png'




const Nabvar = () => {
  return (

    <div className='container-fluid'>
          <div className="row navbar">
            <div className="col-md-2">
                <Link to={'/'}><img src={logoimg} alt="logo" className='navbar__logo' /></Link>
            </div>
            <div className="col-md-10 navbar__2">
              <div className="col-md-2 text-center">
                < BotonLogin />
              </div>
              <div className="col-md-2 text-center navbar__item">
                <Link to='/categoria/dc' className="navbar__link">DC Comics</Link>
              </div>
              <div className="col-md-2 text-center navbar__item">
                <Link to='/categoria/marvel' className="navbar__link">Marvel Comics</Link>
              </div>
              <div className="col-md-2 text-center navbar__item">
              <Link to='/sobreNosotros' className="navbar__link">Sobre Nosotros</Link>
              </div>
              <div className="col-md-1 text-center ">
              < BotonCarrito />
              </div>
            </div>
            
          </div>
          
    </div>
  )
}

export default Nabvar