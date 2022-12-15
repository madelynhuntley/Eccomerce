import { useEffect, useState, useContext } from "react";
import { Rating } from "react-simple-star-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { CartContext } from "../context/ContextProvider";

export default function Product(props) {
  const { addProduct } = useContext(CartContext);
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${props.match.params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Product error", err));
  }, [props.match.params.id]);

  return (
    <div className="prod-content">
      <div className="left-content">
        <img src={product.image} alt="Product itself" />
      </div>
      <div className="right-content">
        <h1>{product.title}</h1>
        <h2>RATING</h2>
        <Rating
          readonly={true}
          allowFraction={true}
          initialValue={product.rating}
          size="16"
        />
        <h3>{product.description}</h3>
        <h2>${product.price}</h2>
        <Link to="/cart">
          <button onClick={() => addProduct(product)}>
            Add to <FontAwesomeIcon icon="shopping-cart" />{" "}
          </button>
        </Link>
      </div>
    </div>
  );
}
