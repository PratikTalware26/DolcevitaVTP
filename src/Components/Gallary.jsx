import React from 'react'
import "./Gallary.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation'

// import required modules
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';

const Gallary = () => {
    const breakpoints = {
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      };
  return (
    <div className='p-3' id='gallery'>
        <div>
            <h2 className='main-text-clr text-center fw-bold p-2'>VTP DOLCEVITA GALLERY</h2>
        </div>
        <div>
        <Swiper
        breakpoints={breakpoints} 
        spaceBetween={30}
        // effect={"fade"}
        autoplay={{delay: 5500}}
        scrollbar={{
          hide: true,
        }}
        navigation={true}
        modules={[Scrollbar, Navigation, Autoplay]}
        className="mySwiper gallary-swiper"
      >
        <SwiperSlide>
            <div className='w-100 h-100 g1 g-img-back'></div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-100 h-100 g2 g-img-back'></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-100 h-100 g3 g-img-back'></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-100 h-100 g5 g-img-back'></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-100 h-100 g6 g-img-back'></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-100 h-100 g7 g-img-back'></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-100 h-100 g8 g-img-back'></div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  )
}

export default Gallary