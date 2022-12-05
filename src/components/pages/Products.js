import { useEffect, useState } from "react";
import ProductItem from "../product/ProductItem";

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
      .then((data) => setProducts(data));
  }, []);

  function renderProducts() {
    return products.map((product) => {
      return (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          category={product.category}
          description={product.description}
          image={product.image}
        />
      );
    });
  }

  return (
    <div className="page-content">
      <div className="product-card">{renderProducts()}</div>
    </div>
  );
}
