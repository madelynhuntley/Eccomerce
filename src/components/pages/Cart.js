import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CartContext } from "../context/ContextProvider";
import CartItem from "../products/CartItem";

export default function Cart() {
  const { cart, getTotal, clearCart } = useContext(CartContext);

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

  return (
    <div className="cart-page-content">
      {renderCart()}
      <hr></hr>
      <div className="total">
        <button onClick={() => clearCart()}>Clear Cart</button>Total: $
        {getTotal()}
        <button>
          Checkout <FontAwesomeIcon icon="shopping-cart" />
        </button>
      </div>
    </div>
  );
}
