
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ImgCarrito from '../imagenCarrito/ImgCarrito';

function BotonCarrito() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="light" onClick={handleShow} className="navButton">
          <ImgCarrito /> 
          
        </Button>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Resumen de tu Carrito</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Tu carrito se encuentra VACIO! Aprovecha nuestras ofertas para llenarlo!
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

export default BotonCarrito