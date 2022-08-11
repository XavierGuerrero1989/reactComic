import React from 'react'
import { useCartContext } from '../Context/CartContext'
import { ItemCart } from './ItemCart'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const CartFullCtn = () => {

  const { cart } = useCartContext ()


  return (
    <>

    {cart.map((product)=>

             <ItemCart key= {product.id} product={product}/>             
       )}

<Link to='/cart'><Button variant="success">Resumen de Carrito</Button></Link>

    </> 
  )
}
