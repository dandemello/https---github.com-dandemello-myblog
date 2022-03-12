import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';
import '.styles.css';

function swiperslide () {
    const slides = [];
    for (let i = 0; i < 5; i += 1)     {
      slides.push(
        <SwiperSlide key={`slide-${i}`}>
            <img 
              src={"https://picsum.photos/id/${i+1}/500/300"}
              alt={`Slide ${i}`}
            />
        </SwiperSlide>
      );
    }

return (
    <React.Fragment>
        <Swiper id="mainslider">{slides}</Swiper>
    </React.Fragment> 
    );
}

export default swiperslide;