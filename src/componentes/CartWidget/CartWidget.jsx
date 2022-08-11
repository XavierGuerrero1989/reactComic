
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ImgCarrito from '../imagenCarrito/ImgCarrito';
import { useCartContext } from '../Context/CartContext';
import ImgCarritoLleno from '../imagenCarrito/ImgCarritoLleno';
import { CartEmpty } from './CartEmpty';
import { CartFullCtn } from './CartFullCtn';

function CartWidget() {

    const { clearCart,
      isInCart,
      removeProduct,
      addProduct,
      cart,
      quantityTotal,
    } = useCartContext ()

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showCart, setShowCart] = useState(false)

    const [showCartItems, setShowCartItems] = useState(false)

    useEffect(() => {
      if (cart.length > 0){
        setShowCart(true)
        setShowCartItems(true)
      }
    }, [cart.length])
    
    
    return (
      <>
        <Button variant="light" onClick={handleShow} className="navButton">
          {
            showCart
            ? <> < ImgCarritoLleno/> <p> {quantityTotal} </p> </>
            : < ImgCarrito />
          }
        </Button>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Resumen de tu Carrito</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          {
            showCartItems
            ? < CartFullCtn/>
            :<CartEmpty /> 
          }
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

export default CartWidget