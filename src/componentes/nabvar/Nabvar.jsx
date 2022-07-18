
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BotonCarrito from '../botonCarrito/BotonCarrito';
import LogInButton from '../botonLogIn/BotonLogIn';
import variables from '../../scss/abstracts/_variables.scss'

const Nabvar = () => {
  return (
    <Navbar bg="light" expand="md" fixed="top" className='navbar__Back'>
      <Container fluid>
        <Navbar.Brand href="#" className='navbar__item'>X COMICS</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
          >
            <Nav.Link href="#action2" className='navbar__item'>Special Editions</Nav.Link>
            <NavDropdown title="Nuestro Catalogo" className='navbar__item'>
              <NavDropdown.Item href="#action3">DC Comics</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Marvel Comics
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Otros
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className='navbar__item'>
              Sobre Nosotros 
            </Nav.Link>
          </Nav>
            < LogInButton />
            < BotonCarrito />
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Nabvar