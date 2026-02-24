import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './navbar.css'
import { FaSearch, FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/mylogoorignal.png'
import { useSelector } from 'react-redux'

const Navbar = ({ setSearchText }) => {
  const [searchMode, setSearchMode] = useState(false)
  const [open, setOpen] = useState(false)
  const [searchText, setLocalSearchText ] = useState('')
  const dropdownRef = useRef(null)

useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      open &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setOpen(false)
    }
  }

  document.addEventListener("mousedown", handleClickOutside)

  return () => {
    document.removeEventListener("mousedown", handleClickOutside)
  }
}, [open])

  const cartCount= useSelector(state => state.cart?.items?.length || 0)
  const favoritesCount= useSelector(state => state.favorites?.items?.length || 0)
  const handleSearch = (e) => {
    const value = e.target.value
    setLocalSearchText(value)
    setSearchText(value)

  }

  const location = useLocation()
  const isHome = location.pathname === "/"


  return (
    <div className="navbar">

      {/* SEARCH MODE */}
      {searchMode ? (
        <div className="search-bar-full">
          <FaSearch className="search-icon" />

          <input
            type="text"
            className="search-input-full"
            placeholder="Search products..."
            value={searchText}
            onChange={handleSearch}
            autoFocus
          />

          <FaTimes
            className="close-search"
            onClick={() => {
              setSearchMode(false)
              setLocalSearchText('')
              setSearchText('')

            }}
          />
        </div>
      ) : (
        <>
          <Link to="/faq" className='faqi'>FAQ</Link>

          <div className="nav-left">
            <FaSearch
              className="nav-icon"
              onClick={() => setSearchMode(true)}
            />
            <Link to="/favorites">
              <FaHeart className="nav-icon" />
              {favoritesCount > 0 && <span className="cart-badge">{favoritesCount}</span>}
            </Link>
            <Link to="/cart">
              <FaShoppingCart className="nav-icon" />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
          </div>

          <img className='logo' src={Logo}/>

          <div className='menu-icon' onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </>
      )}

      {/* DROPDOWN MENU */}
      {open && !searchMode && (
        <div className={`links show`} ref={dropdownRef}>
          {isHome ? <a href="#home">Home</a> : <Link to="/#home">Home</Link>}
          {isHome ? <a href="#categories">Categories</a> : <Link to="/#categories">Categories</Link>}
          {isHome ? <a href="#brands">Brands</a> : <Link to="/#brands">Brands</Link>}
          {isHome ? <a href="#review">Review</a> : <Link to="/#review">Review</Link>}
          {isHome ? <a href="#contact">Contact</a> : <Link to="/#contact">Contact</Link>}

              
        </div>
      )}
    </div>
  )
}

export default Navbar


