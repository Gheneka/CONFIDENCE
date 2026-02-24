import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Story from './components/Story'
import Advert from './components/Advert'
import Categories from './components/Categories'
import ProductDetails from './components/ProductDetails'
import Brand from './components/Brand'
import Adverta from './components/Adverta'
import Review from './components/Review'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import FAQ from './Pages/FAQ'
import Cart from './components/Cart'
import Favorites from './components/Favorites'
import Splash from './components/Splash'
// import { products } from "../data/products"

function App() {
  const [searchText, setSearchText] = useState("")
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2500); // 2.5 seconds

  return () => clearTimeout(timer);
  }, []);

  if (loading) {
  return <Splash />;
  }


  return (

    <div className="App">
      <Navbar setSearchText={setSearchText} />
        <div className='content'>

          
          <Routes>
            <Route path="/" element={
              <>
                <Home/>
                <About/>
                <Story/>
                <Categories searchText={searchText}/>
                <Advert/>
                <Brand searchText={searchText}/>
                <Adverta/>
                <Review/>
                <Contact/>
                <Footer/>
              </>
            }/>

            <Route path="/faq" element={<FAQ/>} />

            <Route path="/product/:id" element={<ProductDetails />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="/favorites" element={<Favorites />} />
          </Routes>
     
        </div>
    </div>

  )
}

export default App

