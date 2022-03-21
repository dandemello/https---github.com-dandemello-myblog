import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import Img from "gatsby-image"

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from "swiper";
import { Pagination } from "swiper";

//css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../sliderStyle.css'


const SwiperSliderComponent = ({photos}) => {
  const [slides, setSlides] = useState([])
  useEffect(() => {
    var newSlides = [];
    newSlides = photos.map(image => 
        <SwiperSlide key={image.node.id} className="swiperslide">
        <Img 
          className="slider-image-holder"
              fluid={image.node.childImageSharp.fluid}
              alt={"ok"}
              />
        </SwiperSlide>
    )
    setSlides(newSlides)
    },[])

return (
  <React.Fragment>
        <Swiper navigation={true} pagination={{type: "progressbar",}} modules={[Navigation, Pagination]} id="mainslider">{slides}</Swiper>
    </React.Fragment> 
    );
}

export default SwiperSliderComponent;