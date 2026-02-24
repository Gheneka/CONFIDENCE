import React from 'react'
import './contact.css'
import Phone from '../assets/Phone.png'
import Email from '../assets/Email.png'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_xnzg07c',
      'template_yq1mj2b',
      form.current,
      '4WfPvLvMY7I8pkatj'
    )
    .then(() => {
      alert("Message Sent Successfully!");
    })
    .catch((error) => {
      console.log(error);
    });
  };
    
  return (
    <div className='sect5' id='contact'>
        <h1>Let's Keep In Touch</h1>
        <div className="contact">
            <div className="contactfirst">
                <h2>Leave Your Feedback</h2>
                <p>
                    At CONFIDENCE, we want to know how you feel 
                    <br/>about our services. Using your feedback, 
                    <br/>we can enhance our services to your 
                    <br/>(our customer's) taste. That is why we 
                    <br/>provided this medium so you can express 
                    <br/>your dissatisfactions or give suggestions.
                </p>

                

                <div className="phone1">
                    <img className='phone' src={Phone}/>
                    <p>
                        <strong>Phone</strong>
                        <br/>+2348069069146, +2348105984423
                    </p>
                </div>
                <div className="email1">
                    <img src={Email}/>
                    <p>
                        <strong>Email</strong>
                        <br/>confidence@gmail.com
                    </p>
                </div>
            </div>

            <div className="contactsecond">
                <form 
                    ref={form} onSubmit={sendEmail}
                >
                    <br/><br/>
                    <input type="text" placeholder="Name:" name='user_name' className="contact1" required />
                    <input type="email" placeholder="Email:" name='user_email' className="contact1 con" required />
                    <br/>
                    <input type="text" placeholder="City:" name='user_city' className="contact12" required />
                    <br/>
                    <input type="text" placeholder="Subject:" name='subject' className="contact12" required/>
                    <br/>
                    <input type="text" placeholder="Message:" name='message' className="contact13" required/>
                    <br/>
                    <input type="submit" value="Submit" className="sned"/>
                </form>
            </div>
        </div>

      
    </div>
  )
}

export default Contact
