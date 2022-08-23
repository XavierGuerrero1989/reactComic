import React, { useState, useEffect } from "react";
import { useCartContext } from "../Context/CartContext";
import { Carrito } from "./Carrito";
import { CartEmpty } from "../CartWidget/CartEmpty";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import CompraOk from "../../imgs/FlashOK.png";
import { BotonVaciar } from "./BotonVaciar";
import { BotonFinalizar } from "./BotonFinalizar";

export const CarritoCtn = () => {
  const { cart, precioTotal, clearCart, quantityTotal, setQuantityTotal } =
    useCartContext();

  const [showCartElements, setShowCartElements] = useState(false);
  const [cantidadFinal, setCantidadFinal] = useState(0);

  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [showFinalizar, setShowFinalizar] = useState(false);

  useEffect(() => {
    if (tel !== "" && name !== "" && email !== "") {
      setShowFinalizar(true);
    } else {
      setShowFinalizar(false);
    }
  }, [name, tel, email]);

  const [idOrder, setIdOrder] = useState("");
  const [showFinalMsg, setShowFinalMsg] = useState(false);

  function terminarCompra() {
    const order = {
      buyer: { name, tel, email },
      items: [...cart],
      total: precioTotal(),
    };

    const db = getFirestore();
    const refCollection = collection(db, "orders");

    addDoc(refCollection, order).then((res) => {
      setIdOrder(res.id);
    });

    setShowCartElements(false);
    setShowFinalMsg(true);
    clearCart();
  }

  useEffect(() => {
    if (cart.length > 0) {
      setShowCartElements(true);
      setCantidadFinal(quantityTotal);
    } else {
      setShowCartElements(false);
      setCantidadFinal(0);
    }
  }, [cart.length, quantityTotal]);

  return (
    <>
      {showFinalMsg ? (
        <div className="container-fluid">
          <div className="row justify-content-center">
            <img
              src={CompraOk}
              alt="imagen de OK"
              className="col-md-2 carrito__imgfinal"
            />
          </div>
          <div className="row justify-content-center">
            <h2 className="col-md-4 text-center carrito__finalmsgtitle">
              MUCHAS GRACIAS POR TU COMPRA!
            </h2>
          </div>
          <div className="row justify-content-center">
            <h2 className="col-md-6 text-center carrito__finalmsg">
              TU NUMERO DE ORDEN ES:{" "}
              <span className="carrito__orderid">{idOrder}</span> <br />{" "}
              Guardalo, lo vas a necesitar para poder recibir tu pedido.
            </h2>
          </div>
        </div>
      ) : (
        <>
          <div className="container-fluid justify-content-center">
            <div className="row carrito__row align-items-center justify-content-center">
              <p className="text-center carrito__titulo">
                Resumen de tu Carrito de Compras
              </p>
            </div>
            <div className="row">
              {showCartElements ? (
                cart.map((producto) => (
                  <Carrito key={producto.id} producto={producto} />
                ))
              ) : (
                <CartEmpty />
              )}
            </div>
            <div className="row carrito__row align-items-center justify-content-center">
              <p className="text-center carrito__totales">
                Items totales: {cantidadFinal} unidades. <br /> Monto Total: $
                {precioTotal()}{" "}
              </p>
            </div>

            <div className="row carrito__row align-items-center justify-content-center">
              {showCartElements ? (
                <>
                  <div className="container-fluid">
                    <div className="row justify-content-center">
                      <h3 className="carrito__totales text-center">
                        Para poder realizar tu compra, completa este pequeño
                        formulario
                      </h3>
                    </div>
                    <div className="row justify-content-center">
                      <input
                        className="text-center carrito__form col-md-2"
                        type={"text"}
                        required
                        placeholder="nombre completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="row justify-content-center">
                      <input
                        className="text-center carrito__form col-md-2"
                        type={"number"}
                        required
                        minLength="6"
                        placeholder="celular"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                      />
                    </div>
                    <div className="row justify-content-center">
                      <input
                        className="text-center carrito__form col-md-2"
                        type={"email"}
                        required
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  {showFinalizar ? (
                    <BotonFinalizar funcionTerminar={terminarCompra} />
                  ) : (
                    <>
                      <BotonVaciar />
                    </>
                  )}
                </>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};
