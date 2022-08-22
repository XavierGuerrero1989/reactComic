import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { ItemCount } from "../ItemCount/ItemCount";
import { useCartContext } from "../Context/CartContext";


export const ItemDetail = ({ data }) => {
  const { addProduct, cart } = useCartContext();

  const imagenDetail = data.imagen;

  const [irAlCarrito, setIrAlCarrito] = useState(false);



  const onAdd = (quantity) => {
    setIrAlCarrito(true);
    addProduct(data, quantity);
  
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center">
        <img
          src={imagenDetail}
          className="col-md-6 detail__img"
          alt="imagen del comic"
        />
        <div className="col-md-3 text-center">
          <h2 className="detail__titulo"> {data.titulo}</h2>
          <h3 className="detail__subtitulo">Heroe: {data.heroe}</h3>
          <h3 className="detail__subtitulo">Descripcion: {data.descripcion}</h3>
          <h3 className="detail__subtitulo">Stock: {data.stock}</h3>
          <h3 className="detail__subtitulo">Precio: ${data.precio} </h3>
          <div>
            {irAlCarrito ? (
              <Link to="/cart">
                <Button variant="success">Resumen de Carrito</Button>
              </Link>
            ) : (
              <ItemCount stockDisponible={data.stock} onAdd={onAdd} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
