import { Link } from "react-router-dom";
import Truncate from "../Truncate";

export default function CartItem(props) {
  return (
    <div className="banner-card">
      <Link to={`/products/${props.id}`}>
        <img src={props.image} alt="product-phot0" />
        <Truncate>{props.title}</Truncate>
        <Truncate>{props.description}</Truncate>
        <h4>${props.price}</h4>
      </Link>
    </div>
  );
}
