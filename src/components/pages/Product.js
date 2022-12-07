import { useEffect } from "react";

/* 
- Product Page (Show Route)
    - Product image
    - Count
    - add to cart
    - remove from cart
    - description
*/
export default function Product(props) {
  console.log(props);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${props.match.params.id}`)
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);
  return <h1>product</h1>;
}
