import React from 'react'
import { useCartContext } from '../Context/CartContext'
import { Carrito } from './Carrito'
import Button from 'react-bootstrap/Button';


export const CarritoCtn = () => {

    const { cart, precioTotal, clearCart } = useCartContext ()
  
    
    return (
      <><div className="container-fluid justify-content-center">
            <div className="row align-items-center justify-content-center">
                Resumen de tu Carrito de Compras
            </div>
            <div className="row">
                {cart.map((producto)=>
    
                <Carrito key= {producto.id} producto={producto}/>
                
            )}
            </div>
            <p className="row align-items-center justify-content-center">Monto Total: ${precioTotal()}</p>
            
                <Button variant="danger" onClick={() => clearCart()}>Vaciar Carrito</Button>
            
            
        </div>
      </> 
    )
  }