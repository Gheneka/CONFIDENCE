import React from 'react'
import './faq.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const FAQ = () => {
    const navigate = useNavigate();

  const goToContact = () => {
    navigate("/");

    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth"
      });
    }, 100);
  };
  

  return (
    <div className='faq' id='faq'>
      <h1>FREQUENTLY ASKED QUESTIONS</h1>
      <p className='ptag'>Got a question? We are here to answer! If you don't see your question here, drop us a line on our <span onClick={goToContact} style={{color: "blue", cursor: "pointer", textDecoration:"underline"}}>Contact Page</span> .</p>
      
      <div className='faqcontain'>
        <div className='faq1'>
            <h2>CAN I RETURN AN ITEM?</h2>
            <p>Yes! We accept returns for any reason within 30 days of your order. Just send us an Email with you Order Number and we will send you a return label.</p>
        </div>

        <div className='faq2'>
            <h2>WHEN WILL I RECEIVE MY ITEM?</h2>
            <p>5-7 business days. We use UPS priority shipping and pack your order by hand to make sure that everything is correct. If you need something faster, let us know!</p>
        </div>
      </div> 

      <div className='faqcontain ro'>
        <div className='faq1'>
            <h2>HOW LONG DOES SHIPPING TAKE?</h2>
            <p>Orders are processed within 1-2 business days and typically arrive within 3-7 business days depending on your location. You will receive a tracking number as soon as your order ships.</p>
        </div>

        <div className='faq2'>
            <h2>DO YOU OFFER INTERNATIONAL SHIPPING?</h2>
            <p>Yes! We ship to selected international locations. Shipping fees and delivery times may vary depending on your country. You can view available shipping options at checkout before completing your purchase.</p>
        </div>
      </div> 

      <div className='faqcontain ro'>
        <div className='faq1'>
            <h2>HOW CAN I TRACK MY ORDER?</h2>
            <p>Once your order has been shipped, we will send you a confirmation Email with a tracking number. Simply click the tracking link provided to see the latest updates on your delivery status.</p>
        </div>

        <div className='faq2'>
            <h2>WHAT PAYMENT METHODS DO YOU ACCEPT?</h2>
            <p>We accept major debit and credit cards as well as secure online payment options. All transactions are encrypted to ensure your personal and payment information remains safe and protected.</p>
        </div>
      </div> 
    </div>
  )
}

export default FAQ
