import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const ItemCart = ({product}) => {

    const [montoParcialUnitario, setMontoParcialUnitario] = useState(0)

    useEffect(() => {
      setMontoParcialUnitario((product.quantity)*(product.precio) )
    }, [product.quantity])
    


  return (
      <>
        <div className="row">
            <p> {product.titulo} x {product.quantity} = ${montoParcialUnitario}</p>
        </div>
        <Link to='/cart'><Button variant="success">Resumen de Carrito</Button></Link>
      </>  
  )
}
