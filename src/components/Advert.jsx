import React from 'react'
import './advert.css'
import Ad1 from '../assets/ad1.png'
import Ad2 from '../assets/ad2.png'
import Ad3 from '../assets/ad3.png'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"



const Advert = () => {
  return (
    <div className='adi'>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="bg-swiper"
        >
        <SwiperSlide>
          <a href="#skin">
            <div className="slide-bg" style={{ backgroundImage: `url(${Ad1})` }} />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="#hygiene">
            <div className="slide-bg" style={{ backgroundImage: `url(${Ad2})` }} />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="#hair">
            <div className="slide-bg" style={{ backgroundImage: `url(${Ad3})` }} />
          </a>
        </SwiperSlide>

      </Swiper>

    </div>
  )
}

export default Advert
