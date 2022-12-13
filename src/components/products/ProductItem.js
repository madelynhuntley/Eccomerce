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
        <Truncate>{props.title}</Truncate>
        <Truncate>{props.description}</Truncate>
        <h4>${props.price}</h4>
      </Link>
      <Link to="/cart"></Link>
      <button onClick={() => addProduct(props)}>
        Add To {<FontAwesomeIcon icon="shopping-cart" />}
      </button>
    </div>
  );
}
