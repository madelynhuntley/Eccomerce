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
      return <p style={{ color: "black" }}>Added to Cart</p>;
    }
  }

  function clearCart() {
    if (window.confirm("Are you sure you want to remove your cart items?")) {
      setCart([]);
    }
  }

  function getTotal() {
    let total = cart.reduce((prev, current) => prev + current.price, 0);
    return total.toFixed(2);
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
