import React, { Children, useState } from 'react'
export const CartContext = React.createContext([]);

export const CartProvider = ({children}) => {

  const [cart, setCart] = useState ([])

  const clearCart = () => {
    setCart([])
  };

  const isInCart = (id) => {
    return cart.find(comicDetail => comicDetail.id === id) ? true : false;
  }

  const removeProduct = (id) => setCart(cart.filter(comicDetail => comicDetail.id !== id));


  const addProduct = (item, count) => {
    if(isInCart(item.id)) {
      setCart(cart.map(comicDetail => {
        return comicDetail.id === item.id ? {...comicDetail, count: comicDetail.cantidad + cantidad } : comicDetail
      }))
    } else {
      setCart([...cart, {...item, cantidad}])
    }
  }






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
