import React from 'react'
import './faq.css'

const FAQ = () => {
  return (
    <div className='faq' id='faq'>
      <h1>FREQUENTLY ASKED QUESTIONS</h1>
      <p className='ptag'>Got a question? We are here to answer! If you don't see your question here, drop us a line on our <a href="#contact">Contact Page</a>.</p>
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
    </div>
  )
}

export default FAQ
