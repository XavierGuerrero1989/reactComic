import React from "react";
import { useCartContext } from "../Context/CartContext";
import Button from "react-bootstrap/Button";

export const BotonFinalizar = ({ funcionTerminar }) => {
  const { clearCart } = useCartContext();

  return (
    <>
      <Button
        variant="danger"
        className="col-md-1 carrito__botones"
        onClick={() => clearCart()}
      >
        Vaciar Carrito
      </Button>

      <Button
        variant="success"
        className="col-md-1 carrito__botones"
        onClick={() => funcionTerminar()}
      >
        Finalizar Compra
      </Button>
    </>
  );
};
