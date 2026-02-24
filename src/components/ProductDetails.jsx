import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import "./productDetails.css";
import { useDispatch, useSelector } from "react-redux";
import {addToCart} from "../state/Cart/cartSlice";
import { addToFavorites, removeFromFavorites } from "../state/Favorites/favoritesSlice";

const ProductDetails = () => {
  const { id } = useParams();
  console.log("URL id:", id);
  console.log("useParams id:", id);
  console.log("products array:", products);
  const params = useParams();
  console.log("useParams:", params);

  const product = products.find(p => p.id === Number(id));
  console.log("Matched product:", product);

  const [qty, setQty] = useState(1);
  
  const dispatch = useDispatch();
  
  // Get favorites from Redux store
  const favorites = useSelector(state => state.favorites?.favoriteItems || []);
  const isFavorite = favorites.some(item => item.id === product?.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  if (!product) return <p>Product not found</p>;

  return (
    <div className="productdetails">
      <div className="product-page">
      <div className="left">
        <span 
          className={`heart ${isFavorite ? "active" : ""}`}
          onClick={handleFavoriteClick}
        >
          ♥
        </span>
        <img src={product.image} alt={product.name} />
      </div>

      <div className="right">
        <h1>{product.name}</h1>
        <h2>₦{product.price}</h2>

        <div className="stars">★★★★★</div>

        <div className="counter">
          <button onClick={() => qty > 1 && setQty(qty - 1)} className="minus">-</button>
          <span className="nu">{qty}</span>
          <button onClick={() => setQty(qty + 1)} className="add">+</button>
        </div>

        <div className="buttons">
          <button className="cart" onClick={() => dispatch(addToCart({ ...product, quantity: qty }))} >Add to Cart</button>
          <button className="order">Order Now</button>
        </div>
      </div>
      </div>

    </div>
  );
};

export default ProductDetails;

