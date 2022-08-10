import React, { Children, useContext, useEffect, useState } from 'react'
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext); 


export const CartProvider = ({children}) => {

  const [cart, setCart] = useState ([])
  const [quantityTotal, setQuantityTotal] = useState (0)
  const [subTotalDinero, setSubTotalDinero] = useState (0)

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

  const sumaTotal = cart.map(item => item.quantity).reduce((prev, curr) => prev + curr, 0);

  

  useEffect(() => {
    if (cart.length > 0){
      setQuantityTotal(sumaTotal)
    }
  }, [cart.length, sumaTotal])
  

  
  
  return (
    <CartContext.Provider value={{
      clearCart,
      isInCart,
      removeProduct,
      addProduct,
      cart,
      quantityTotal
    }}>
      {children}
    </CartContext.Provider>
  )
}
