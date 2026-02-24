import React, { useEffect, useRef } from 'react'
import './brand.css'
import { Link } from "react-router-dom"
import { products } from "../data/products"

const Brand = ({ searchText }) => {
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
    <div className='sect3' id='brands'>
      <h1>Brands</h1>

      <h2>Nivea</h2>
      <div className='cate'>
        {filteredProducts
          .filter(p => p.brand === "Nivea")
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

      <h2>Dove</h2>
      <div className='cate'>
          {filteredProducts
            .filter(p => p.brand === "Dove")
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

      <h2>Rexona</h2>
      <div className='cate'>
        {filteredProducts
          .filter(p => p.brand === "Rexona")
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

export default Brand