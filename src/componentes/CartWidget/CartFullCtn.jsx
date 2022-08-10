import React from 'react'
import { useCartContext } from '../Context/CartContext'
import { ItemCart } from './ItemCart'

export const CartFullCtn = () => {

  const { cart } = useCartContext ()


  return (
    <>

    {cart.map((product)=>
             <ItemCart key= {product.id} product={product}/>
        )}
    </> 
  )
}
