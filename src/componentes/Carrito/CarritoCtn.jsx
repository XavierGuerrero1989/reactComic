import React, { useState, useEffect } from 'react'
import { useCartContext } from '../Context/CartContext'
import { Carrito } from './Carrito'
import { CartEmpty } from '../CartWidget/CartEmpty';
import { BotonesDeCarrito } from './BotonesDeCarrito';


export const CarritoCtn = () => {

    const { cart, precioTotal, clearCart, quantityTotal } = useCartContext ()
  
    const [showCartElements, setShowCartElements] = useState(false)
    const [cantidadFinal, setCantidadFinal] = useState(0)

    useEffect(() => {
      if (cart.length > 0){
        setShowCartElements(true)
        setCantidadFinal(quantityTotal)
      } else {
        setShowCartElements(false)
        setCantidadFinal(0)
      }
    }, [cart.length])

    return (

      
      <><div className="container-fluid justify-content-center">
            <div className="row carrito__row align-items-center justify-content-center">
                <p className='text-center carrito__titulo'>Resumen de tu Carrito de Compras</p> 
            </div>
            <div className="row">

            {
            showCartElements
            ?  cart.map((producto)=>
    
              <Carrito key= {producto.id} producto={producto}/>
              
              )
            :<CartEmpty /> 
            }

                
            </div>
            <div className="row carrito__row align-items-center justify-content-center">
            <p className='text-center carrito__totales'>Items totales: {cantidadFinal} unidades. <br />  Monto Total: ${precioTotal()} </p>
            </div>
            <div className="row carrito__row align-items-center justify-content-center">
            {
            showCartElements
            ?  <BotonesDeCarrito/>
                
            : <p>''</p> 
            }
              

            </div>
            
                
            
            
        </div>
      </> 
    )
  }