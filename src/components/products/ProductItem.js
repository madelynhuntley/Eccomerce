import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import Truncate from "../Truncate";

export default function ProductItem(props) {
  return (
    <div className="card-content">
      <Link to={`/products/${props.id}`}>
        <img src={props.image} alt="product-phot0" />
        <Truncate>{props.title}</Truncate>
        <Truncate>{props.description}</Truncate>
        <h4>${props.cashmoney}</h4>
      </Link>
      <button>Add To {<FontAwesomeIcon icon="shopping-cart" />}</button>
    </div>
  );
}
