import React from "react";
import { useCartContext } from "../Context/CartContext";
import { useState } from "react";
import { useEffect } from "react";
import deleteIcon from "../../imgs/delete.png";

export const Carrito = ({ producto }) => {
  const [montoParcialUnitario, setMontoParcialUnitario] = useState(0);

  useEffect(() => {
    setMontoParcialUnitario(producto.quantity * producto.precio);
  }, [producto.quantity]);

  const { removeProduct, cart } = useCartContext();

  return (
    <div className="container-fluid carrito">
      <div className="row carrito__row align-items-center justify-content-center carrito__row">
        <div className="col-md-1">
          <img
            src={producto.imagen}
            alt="imagen del comic"
            className="carrito__img"
          />
        </div>
        <div className="col-md-2 carrito__detalles">
          <p>{producto.titulo}</p>
        </div>
        <div className="col-md-1 carrito__detalles">
          <p>{producto.quantity} unidades</p>
        </div>
        <div className="col-md-1 carrito__detalles">
          <p>${montoParcialUnitario}</p>
        </div>
        <div className="col-md-1 carrito__detalles">
          <img
            src={deleteIcon}
            alt="icono de borrar"
            className="carrito__ic"
            onClick={() => removeProduct(producto.id)}
          />
        </div>
      </div>
    </div>
  );
};
