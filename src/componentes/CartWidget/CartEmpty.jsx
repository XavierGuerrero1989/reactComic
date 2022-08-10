import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const CartEmpty = () => {


  return (
    <div className='container-fluid'>
        <div className="row">
            <p className='col-md-6'>RECORCHOLIS BATMAN! Tu carrito esta Vacio!! <br/> Llenalo con alguno de nuestros COMICS!</p>
            
            <Link to='/'><Button variant="success"> Ir al Catalogo </Button></Link>
        </div>
    </div>
  )
}
