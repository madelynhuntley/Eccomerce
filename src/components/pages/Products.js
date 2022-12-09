import { useEffect, useState } from "react";
import ProductItem from "../products/ProductItem";

/*
- Products Page
    - This will fetch and display all products in their own cards
       - image
       - title 
       - truncated description
       - add to cart
    - filters for the categories
    - Each product card will be a link to the individual product page
*/
export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Products error", err));
  }, []);

  function renderProducts() {
    return products.map((product) => {
      return (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          cashmoney={product.price}
          category={product.category}
          description={product.description}
          image={product.image}
        />
      );
    });
  }

  return (
    <div className="page-content">
      <div className="header-wrapper">
        <h1>Welcome!</h1>
        <h1 className="shop">Shop</h1>
      </div>
      <div className="product-cards">{renderProducts()}</div>
    </div>
  );
}
