import { useState, createContext } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addProduct(product) {
    const inCart = cart.find((item) => item.id === product.id);

    if (inCart) {
      window.alert("Item in cart!");
    } else {
      setCart((c) => [...c, product]);
      alert("Added to cart");
    }
  }

  function clearCart() {
    if (window.confirm("Are you sure you want to remove your cart items?")) {
      setCart([]);
    }
  }

  function getTotal() {
    return cart.reduce((prev, current) => prev + current.price, 0);
  }

  const cartState = {
    cart,
    addProduct,
    clearCart,
    getTotal,
  };

  return (
    <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
  );
}
