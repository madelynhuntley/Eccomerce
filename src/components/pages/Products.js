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
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Products error", err));
  }, [category]);

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
      <div className="header-wrapper">
        <h1>Welcome!</h1>
        <div className="electronics">
          <button onClick={() => setCategory("/category/electronics")}>
            Electronics
          </button>
        </div>
        <div className="jewlry">
          <button onClick={() => setCategory("/category/jewelery")}>
            Jewelery
          </button>
        </div>
        <div className="mens-clothing">
          <button onClick={() => setCategory("/category/men's clothing")}>
            Men's Clothing
          </button>
        </div>
        <div className="womens-clothing">
          <button onClick={() => setCategory("/category/women's clothing")}>
            Women's Clothing
          </button>
        </div>
        <h1 className="shop">Get Shopping!</h1>
      </div>
      <div className="product-cards">{renderProducts()}</div>
    </div>
  );
}
