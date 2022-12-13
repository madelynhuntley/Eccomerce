/*
 - You should be able to add products to your cart (if there is quantity available).
    - Show the products in the cart, and price
    - Show the total
    - Checkout button (does not have to work)
    - remove from cart
*/
import { useContext } from "react";
import { CartContext } from "../context/ContextProvider";
import CartItem from "../products/CartItem";

export default function Cart() {
  const { cart } = useContext(CartContext);

  function renderCart() {
    return cart.map((item) => {
      return (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          category={item.category}
          description={item.description}
          image={item.image}
        />
      );
    });
  }

  return <div className="cart-page-content">{renderCart()}</div>;
}
