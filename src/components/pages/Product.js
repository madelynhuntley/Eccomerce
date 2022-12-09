import { useEffect, useState } from "react";

/* 
- Product Page (Show Route)
    - Product image
    - Count
    - add to cart
    - remove from cart
    - description
*/
export default function Product(props) {
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${props.match.params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Product error", err));
  }, [props.match.params.id]);

  function renderProduct() {
    return (
      <div>
        <div className="left-content">
          <img src={product.image} alt="Product itself" />
        </div>
        <div className="right-content">
          <h1>{product.title}</h1>
        </div>
      </div>
    );
  }

  return <div className="prod-content">{renderProduct()}</div>;
}
