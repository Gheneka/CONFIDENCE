import React from 'react'
import './home.css'
import Blackwoman from '../assets/blackwoman.png'
import Cosmetics from '../assets/cosmetics1.png'
import Koreanman from '../assets/koreanman.png'
import Subtract1 from '../assets/Subtract1.png'
import Subtract2 from '../assets/Subtract 2.png'

const Home = () => {
  return (
    <div className='sect1'>
      <p className='p1'>A SELF-CARE THAT BUILDS <mark className='aura'>CONFIDENCE</mark></p>
      <p className='p2'>AN <mark className='aura'>AURA</mark> THAT SPEAKS</p>
      <a href='/' className='shopnow'>SHOP NOW</a>
      <img className='subtract1' src={Subtract1}/>
      <img className='subtract2' src={Subtract2}/>
      <div className='heroimage'>
        <img className='blackwoman' src={Blackwoman}/>
        <img className='cosmetics' src={Cosmetics}/>
        <img className='koreanman' src={Koreanman}/>
      </div>
    </div>
  )
}

export default Home
