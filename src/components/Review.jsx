import React from 'react'
import './review.css'
import Anita from '../assets/Anita.png'
import Julio from '../assets/Julio.png'
import Girl from '../assets/girl 22.jpg'
import Tony from '../assets/Tony.jpg'
import Kim from '../assets/Kim (1).png'
import Faithful from '../assets/Faithful.jpg'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

const Review = () => {

  const reviews = [
  { id: 1, name: "Anita Oluchi",
    text: "Amazing service! I got exactly what I ordered for and there were no complications. I often have issues when ordering from websites, so this is a really nice experience for me", 
    imageUrl:Anita 
  },
  { id: 2, name: "Julio Delgado", 
    text: "Loved the experience. As a UX designer whenever ordering I often like to observe the UX of a website and this website's UX is really intriguing. I am definitely a constant customer", 
    imageUrl:Julio 
  },
  { id: 3, name: "Jamie Smith", 
    text: "Highly recommended. They offer brands that are safe and healthy to use. Previously I have had terrible experience with some certain skin products so I'm often afraid but now I have Confidence", 
    imageUrl:Girl 
  },
  { id: 4, name: "Tony Rawlings", 
    text: "Will come back again. I often have delivery issues and therefore prefer to buy physically, but Confidence has given me a lot of confidence to easily order and expect the best results", 
    imageUrl:Tony 
  },
  { id: 5, name: "Kim Tae", 
    text: "Very good products. The products really push the vision and mission of the brand. My sensitive skin has made me have a low self-esteem but since Confidence came into my life things have been different ", 
    imageUrl:Kim 
  },
  { id: 6, name: "Faithful Osanebi", 
    text: "Various quality for different kinda skin. My siblings and I have special kind of skin which makes it hard for our parents to get the right kind of cosmetics but with Confidence buying of cosmetics is easy", 
    imageUrl:Faithful 
  }
]



  return (
    <div className='sect4' id='review'>
      <h1>What Our Customers' Say</h1>

        {/* <div class="anita">
          <img className='anitaimg' src={Anita}/><br/><br/>
          <h3>Anita Oluchi</h3><br/>
          <p>We used Icey for a 
          <br/>corporate event and it was 
          <br/>an instant hit! The 
          <br/>presentation, flavors and 
          <br/>customer service were 
          <br/>exceptional. Will definitely 
          <br/>order from them again.
          </p>
        </div> */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{
        delay: 0,
        disableOnInteraction: false,
        }}
        speed={3000}
        >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="review-card">
              {review.imageUrl && (
              <img 
                src={review.imageUrl} 
                alt="face" 
                style={{ width: '50px', height: '50px', borderRadius: '360px', objectFit:'cover' }} 
              />
              )}
              <h4>{review.name}</h4>
              <p>{review.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='cipe'>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
        }}
        speed={3000}
        >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="review-card">
              {review.imageUrl && (
              <img 
                src={review.imageUrl} 
                alt="face" 
                style={{ width: '50px', height: '50px', borderRadius: '360px', objectFit:'cover' }} 
              />
              )}
              <h4>{review.name}</h4>
              <p>{review.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  )
}

export default Review
