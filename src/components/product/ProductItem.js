import { Link } from "react-router-dom";

export default function ProductItem(props) {
  return (
    <Link to={`/products/${props.id}`}>
      <div className="card-content">
        <img src={props.image} alt="product-phot0" />
        <h2>{props.title}</h2>
        <h3>{props.description}</h3>
        <h4>{props.price}</h4>
      </div>
    </Link>
  );
}
