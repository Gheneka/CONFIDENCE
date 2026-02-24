import React from 'react'
import './footer.css'
import Facebook from '../assets/Facebook F.png'
import X from '../assets/X.png'
import Instagram from '../assets/instagram.png'
import LinkedIn from '../assets/linkedin.png'
import Logo from '../assets/mylogoorignal.png'
import emailjs from 'emailjs-com'
import { useRef } from 'react'

const Footer = () => {
  const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(() => {
        alert("Message Sent Successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
    };

  return (
    <div className='sect6'>
      <footer>
        
          <h2 className='sign'>Do you want to sign up?</h2>
          <p>If you sign up we can send you updates on promos, discounts, restocks and new products.</p>
          <form 
           ref={form} onSubmit={sendEmail}
          >
            <input type="email" placeholder="Email:" className="inbox"></input>
            <input type="submit" value="Send" className="send"></input>
          </form>

        <div className='footer1'>
          <div className='confidence'>
            <img className='logof' src={Logo}/>
            <p>At CONFIDENCE, we celebrate individuality. We don't believe in hiding who you are — we believe in enhancing it. When self-care becomes intentional, confidence follows naturally.</p>
          </div>

          <div className='browse'>
            <h2>Browse</h2>
            <a href="#home">Home</a>
            <br /><a href="#categories">Categories</a>
            <br /><a href="#brands">Brands</a>
            <br /><a href="#review">Review</a>
            <br /><a href="#contact">Contact</a>
          </div>

          <div className='contactus'>
            <h2>Contact Us</h2>
            <p>+2348036891967, <br/>+2348096894456</p>
            <p>confidence@gmail.com</p>
            <div className='soc'>
              <img className='social1' src={Facebook}/>
              <img className='social' src={X}/>
              <img className='social' src={Instagram}/>
              <img className='social' src={LinkedIn}/>
            </div>
          </div>
        </div>

        <div className='footer2'>
          <p>&copy;Copyright@CONFIDENCE 2025 Privacy Policy</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
