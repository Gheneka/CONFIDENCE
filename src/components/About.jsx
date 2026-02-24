import React from 'react'
import './about.css'
import Circle from '../assets/circleforwhite.png'


const About = () => {
  return (
    <div className='about'>
      <h2>CONFIDENCE is a modern cosmetics brand built on the belief that self-<br/>care is power.
            We curate high-quality beauty products for all genders, <br/>helping you create routines that elevate your confidence and define <br/>your personal aura. Simple, effective, and intentional — because <br/>confidence starts with how you care for yourself.</h2>
            <img className='circle' src={Circle}/>
            <img className='circle1' src={Circle}/>

    </div>
  )
}

export default About
