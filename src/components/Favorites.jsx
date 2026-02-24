import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './favorites.css'
import { removeFromFavorites } from '../state/Favorites/favoritesSlice'

const Favorites = () => {
  const favoritesItems = useSelector((state) => state.favorites.favoriteItems)
  const dispatch = useDispatch()

  if (favoritesItems.length === 0) {
    return (
      <div style={{ padding: '50px', textAlign: 'center', paddingTop:'200px' }}>
        <h1>Your favorites list is empty</h1>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Link to="/" className='conshop'>Continue Shopping</Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ padding: '60px 40px 20px 40px', Width:'100%', margin:'0 auto', backgroundColor:'#F5F5F2', height:'150vh' }}>
      <h1 style={{textAlign:'center', color:'#121212'}}>My Favorites</h1>
      {favoritesItems.map((item) => (
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
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Link 
              to={`/product/${item.id}`}
              className='view'
            >
              View
            </Link>
            <button 
              onClick={() => dispatch(removeFromFavorites(item.id))}
              className='remove1'
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Link to="/" className='conshop'>Continue Shopping</Link>
      </div>
    </div>
  )}

export default Favorites
