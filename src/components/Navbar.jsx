import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='links'>
        <a href='/home'>Home</a>
        <a href='/categories'>Categories</a>
        <a href='/brands'>Brands</a>
        <a href='/review'>Review</a>
        <a href='/contact'>Contact</a>
        <p>CONFIDENCE</p>
        <a href='/faq'>FAQ</a>
      </div>
    </div>
  )
}

export default Navbar
