import React, { useState, createContext } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setcart] = useState(null);
  console.log(cart, "TOTAL DEL CARRITO")

  const añadirCart = (item, newQuantity) => {
    const newCart = cart.filter((prod) => prod.id !== item.id);
    newCart.push({ ...item, quantity: newQuantity });
    setcart(newCart);
  };

  const clearcart = () => setcart([]);

  const incart = (id) => {
    return cart.find((products) => products.id === id) ? true : false;
  };

  const removeCart = (id) => {
    return setcart(cart.filter((products) => products.id !== id));
  };

  return (
    <CartContext.Provider value={[ clearcart, incart, removeCart, añadirCart ]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
