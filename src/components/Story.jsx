import React, { useEffect, useRef } from 'react'
import './story.css'
import Sunny from '../assets/sunny-ng-KVIlNRoGwxk-unsplash 1.png'
import  Circle1 from '../assets/circleforblack.png'


const Story = () => {
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

  return (
    <div className='story'>
        <div className='mystory'>
            <div className='storyt' ref={el => cardsRef.current.push(el)}>
                <h3>Our Story</h3>
                <p>Confidence is something that a lot of people in this generation lack. They look down on themselves and feel they are not good enough. For this reason, the brand 'CONFIDENCE' was born. With our products, we want to encourage you to love yourself and taking proper care of your body is a way of loving yourself. So come over to us and let us give you a selfcare that builds confidence thereby making your aura speak for you.</p>
            </div>
            <div className='storyp'>
                <img className='storypic' src={Sunny} ref={el => cardsRef.current.push(el)}/>
            </div>
        </div>
        <img className='circle11' src={Circle1}/>
        <img className='circle12' src={Circle1}/>

    </div>
  )
}

export default Story
