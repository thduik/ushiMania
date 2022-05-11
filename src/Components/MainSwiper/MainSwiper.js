// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import "swiper/css";

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import React from 'react';

import './MainSwiper.scss'

import sliderImg1 from "../../UshiManiaAssets/restaurant864-441.jpeg"
import sliderImg2 from "../../UshiManiaAssets/UMHd1-1920-806.jpeg"
import sliderImg3 from "../../UshiManiaAssets/UM-In-1600-900.jpeg"
import sliderImg4 from "../../UshiManiaAssets/UMHD2-2048-779.jpeg"

SwiperCore.use([Navigation, Pagination, Controller, Thumbs])

export default () => {
  // const swiper = useSwiper()
  return (
   
    <div className = "swiper-wrapp">
        <Swiper
        id="main"
        // thumbs={{ swiper: thumbsSwiper }}
        // controller={{ control: controlledSwiper }}
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={10}
        slidesPerView={1}
        onInit={(swiper) => console.log('Swiper initialized!', swiper)}
        onSlideChange={(swiper) => {
          console.log('Slide index changed to: ', swiper.activeIndex);
        }}
        onReachEnd={() => console.log('Swiper end reached')}
        >
          <SwiperSlide>
            <img className = "slide_image" src = "https://lotusgroup.com.vn/wp-content/uploads/2020/09/u2-1-1920x806.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img className = "slide_image" src = "https://lotusgroup.com.vn/wp-content/uploads/2020/09/u4-2-1280x775.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img className = "slide_image" src = {sliderImg3}/>
          </SwiperSlide>
          <SwiperSlide>
            <img className = "slide_image" src = {sliderImg4}/>
          </SwiperSlide>

          
        </Swiper>

      </div>
  );
};