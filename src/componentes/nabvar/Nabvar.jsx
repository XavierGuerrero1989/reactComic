import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import BotonLogin from "../botonLogin/BotonLogIn";
import logoimg from "../../imgs/logo.png";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav navbar__responsive">
        <div className="col-md-2">
           <Link to={"/"}>
             <img src={logoimg} alt="logo" className="navbar__logo" />
           </Link>
       </div>
        <div className="col-md-10 navbar__2">
           <div className="col-md-2 text-center">
             <BotonLogin />
           </div>
           <div className="col-md-2 text-center navbar__item">
             <Link to="/categoria/dc" className="navbar__link">
               DC Comics
             </Link>
           </div>
           <div className="col-md-2 text-center navbar__item">
             <Link to="/categoria/marvel" className="navbar__link">
               Marvel Comics
             </Link>
           </div>
           <div className="col-md-2 text-center navbar__item">
             <Link to="/sobreNosotros" className="navbar__link">
               Sobre Nosotros
             </Link>
           </div>
           <div className="col-md-1 text-center ">
             <CartWidget />
           </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
