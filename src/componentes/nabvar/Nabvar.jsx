
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BotonCarrito from '../botonCarrito/BotonCarrito';

const Nabvar = () => {
  return (
    <Navbar bg="light" expand="md" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#">X COMICS</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
          >
            <Nav.Link href="#action2">Special Editions</Nav.Link>
            <NavDropdown title="Nuestro Catalogo" >
              <NavDropdown.Item href="#action3">DC Comics</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Marvel Comics
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Otros
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              Sobre Nosotros 
            </Nav.Link>
          </Nav>
          
            < BotonCarrito />
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Nabvar