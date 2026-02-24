import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart } from '../state/Cart/cartSlice'
import './cart.css'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const dispatch = useDispatch()

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: '50px', textAlign: 'center', paddingTop:'200px' }}>
        <h1>Your cart is empty</h1>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Link to="/" className='conshop'>Continue Shopping</Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ padding: '60px 40px 20px 40px', Width: '100%', margin: '0 auto', backgroundColor:'#F5F5F2', height:'150vh' }}>
      <h1 style={{textAlign:'center', color:'#121212'}}>Shopping Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} style={{ 
          display: 'flex', 
          alignItems: 'center', 
          border: '1px solid #1212121f', 
          margin: '10px 0',
          padding: '10px'
        }}>
          <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
          <div style={{ marginLeft: '20px', flex: 1 }}>
            <h3 style={{color:'#121212'}}>{item.name}</h3>
            <p style={{color:'#121212'}}>Price: ₦{item.price}</p>
            <p style={{color:'#121212'}}>Quantity: {item.quantity}</p>
          </div>
          <button 
            onClick={() => dispatch(removeFromCart(item.id))}
            className='remove2'
          >
            Remove
          </button>
        </div>
      ))}
      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        <h3>Total: ₦{total}</h3>
      </div>
      <Link to="/" className='conshop'>Continue Shopping</Link>
    </div>
  )
}

export default Cart
