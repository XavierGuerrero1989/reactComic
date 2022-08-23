import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import spider from "../../imgs/spider.png";

export const CartEmpty = () => {
  return (
    <div className="container-fluid text-center">
      <div className="row justify-content-center">
        <p className="col-md-12 carrito__detalles">
          Tu carrito está VACIO! <br /> Vuelve a nuestra tienda y encuentra los
          mejores comics!
        </p>
        <img
          src={spider}
          alt="imagen de spiderman"
          className="carrito__imagenvacio"
        />

        <Link to="/">
          <Button variant="success"> Ir al Catalogo </Button>
        </Link>
      </div>
    </div>
  );
};
