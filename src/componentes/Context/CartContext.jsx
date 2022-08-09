import React, { Children, useContext, useState } from 'react'
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext); 


export const CartProvider = ({children}) => {

  const [cart, setCart] = useState ([])

  

  const clearCart = () => {
    setCart([])
  };

  const isInCart = (id) => {
    return cart.find(comicDetail => comicDetail.id === id) ? true : false;
  }

  const removeProduct = (id) => setCart(cart.filter(comicDetail => comicDetail.id !== id));


  const addProduct = (item, newQuantity) => {
    const newCart = cart.filter(prod => prod.id !== item.id);
    newCart.push ({...item, quantity: newQuantity});
    setCart(newCart)

  } 

  console.log('carrito: ', cart)
  
  return (
    <CartContext.Provider value={{
      clearCart,
      isInCart,
      removeProduct,
      addProduct
    }}>
      {children}
    </CartContext.Provider>
  )
}
