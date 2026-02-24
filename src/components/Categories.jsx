import React, { useEffect, useRef } from 'react'
import './categories.css'
import { Link } from "react-router-dom"
import { products } from "../data/products";


const Categories = ({ searchText }) => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
          else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const filteredProducts = products.filter(p =>
  p.name.toLowerCase().includes(searchText.toLowerCase())
  )


  return (
    <div className='sect2' id='categories'>
      <h1>Categories</h1>

      <h2>Personal Hygiene and Fragrance Products</h2>
      <div className='cate' id='hygiene'>
      {filteredProducts
        .filter(p => p.category === "hygiene")
        .map((product, index) => (
        <div className='eva' key={index} ref={el => cardsRef.current.push(el)}>
          <img className='eva1' src={product.image}/>
          <p className='text1'>{product.name}</p>
          <p className='text2'>$1000</p>
          <div className='shopbtn'>
            <Link to={`/product/${product.id}`} className='shopcate'>
              Shop Now
            </Link>
          </div>
        </div>
      ))}
      </div>

      <h2>Skin Care</h2>
      <div className='cate' id='skin'>
      {filteredProducts
        .filter(p => p.category === "skin")
        .map((product, index) => (
        <div className='eva' key={index} ref={el => cardsRef.current.push(el)}>
          <img className='eva1' src={product.image}/>
          <p className='text1'>{product.name}</p>
          <p className='text2'>$1000</p>
          <div className='shopbtn'>
            <Link to={`/product/${product.id}`} className='shopcate'>
              Shop Now
            </Link>
          </div>
        </div>
      ))}
      </div>

      <h2>Hair Care</h2>
      <div className='cate' id='hair'>
      {filteredProducts
        .filter(p => p.category === "hair")
        .map((product, index) => (
        <div className='eva' key={index} ref={el => cardsRef.current.push(el)}>
          <img className='eva1' src={product.image}/>
          <p className='text1'>{product.name}</p>
          <p className='text2'>$1000</p>
          <div className='shopbtn'>
            <Link to={`/product/${product.id}`} className='shopcate'>
              Shop Now
            </Link>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Categories