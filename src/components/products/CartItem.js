import { Link } from "react-router-dom";
import Truncate from "../Truncate";

export default function CartItem(props) {
  return (
    <div className="banner-card">
      <Link to={`/products/${props.id}`}>
        <img src={props.image} alt="product-phot0" />
      </Link>
      <div className="title-desc" style={{ padding: "10px" }}>
        <h3>
          <Truncate>{props.title}</Truncate>
        </h3>
        <p>
          <Truncate>{props.description}</Truncate>
        </p>
      </div>
      <div className="price-remove" style={{ padding: "10px" }}>
        <h4>${props.price}</h4>
        <button>Remove</button>
      </div>
    </div>
  );
}
