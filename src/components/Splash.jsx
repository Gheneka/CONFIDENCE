import React from 'react'
import Logo from '../assets/mylogoorignal.png'
import './splash.css'

const Splash = () => {
  return (
    <div className="splash">
      <img src={Logo} alt="Confidence Logo" className="splash-logo" />
    </div>
  )
}

export default Splash
