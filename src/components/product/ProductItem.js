import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import Truncate from "../Truncate";

export default function ProductItem(props) {
  return (
    <Link to={`/products/${props.id}`}>
      <div className="card-content">
        <img src={props.image} alt="product-phot0" />
        <Truncate>{props.title}</Truncate>
        <Truncate>{props.description}</Truncate>
        <h4>${props.cashmoney}</h4>
        <button>Add To {<FontAwesomeIcon icon="shopping-cart" />}</button>
      </div>
    </Link>
  );
}
