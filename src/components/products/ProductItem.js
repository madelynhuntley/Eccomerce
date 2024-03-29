import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useContext } from "react";

import Truncate from "../Truncate";
import { CartContext } from "../context/ContextProvider";

export default function ProductItem(props) {
  const { addProduct } = useContext(CartContext);

  return (
    <div className="card-content">
      <Link to={`/products/${props.id}`}>
        <img src={props.image} alt="product-phot0" />
        <h3>
          <Truncate>{props.title}</Truncate>
        </h3>
        <p>
          <Truncate>{props.description}</Truncate>
        </p>
        <h4>${props.price.toFixed(2)}</h4>
      </Link>
      <Link to="/cart">
        <button onClick={() => addProduct(props)}>
          Add to <FontAwesomeIcon icon="shopping-cart" />
        </button>
      </Link>
    </div>
  );
}
