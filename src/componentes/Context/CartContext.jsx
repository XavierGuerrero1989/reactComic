import { addDoc, updateDoc, doc, getFirestore } from "firebase/firestore";
import React, { Children, useContext, useEffect, useState } from "react";
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('cart') === null) {
      setCart([])
    } else {
      setCart(JSON.parse(localStorage.getItem('cart')))
    }
  }, [cart])

  console.log(cart)
  

  const [quantityTotal, setQuantityTotal] = useState(0);
  const [subTotalDinero, setSubTotalDinero] = useState(0);
  const [cartStorage, setCartStorage] = useState([])

  const clearCart = () => {
    setCart([]);
    setCartStorage(localStorage.setItem('cart', JSON.stringify([])))
  };

  const isInCart = (id) => {
    return cart.find((comicDetail) => comicDetail.id === id) ? true : false;
  };

  const removeProduct = (id) =>{
    setCart(cart.filter((comicDetail) => comicDetail.id !== id));
    setCartStorage(localStorage.setItem('cart', JSON.stringify(cart.filter((comicDetail) => comicDetail.id !== id))))
  }
    

  const addProduct = (item, newQuantity) => {
    const { quantity = 0 } = cart.find((prod) => prod.id === item.id) || {};
    const newCart = cart.filter((prod) => prod.id !== item.id);
    setCart([...newCart, { ...item, quantity: quantity + newQuantity }]);
    setCartStorage(localStorage.setItem('cart', JSON.stringify([...newCart, { ...item, quantity: quantity + newQuantity }])))

    const db = getFirestore();
    updateDoc(doc(db, "productos", item.id), {
      stock: item.stock - newQuantity,
    });
  };

  const sumaTotal = cart
    .map((item) => item.quantity)
    .reduce((prev, curr) => prev + curr, 0);

  const precioTotal = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0);
  };

  useEffect(() => {
    if (cart.length > 0) {
      setQuantityTotal(sumaTotal);
    }
  }, [cart.length, sumaTotal]);

  

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        cart,
        quantityTotal,
        precioTotal,
        setQuantityTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
