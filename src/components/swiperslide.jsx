import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import Img from "gatsby-image"

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from "swiper";

//css
import "swiper/css";
import "swiper/css/navigation";
import '../sliderStyle.css'

const SwiperSliderComponent = ({photos}) => {
  const [slides, setSlides] = useState([])
  useEffect(() => {
    var newSlides = [];
    newSlides = photos.edges.map(image => 
        <SwiperSlide key={image.node.id}>
            <Img 
              fluid={image.node.childImageSharp.fluid}
              alt={"ok"}
              />
        </SwiperSlide>
    )
    setSlides(newSlides)
    },[])

return (
  <React.Fragment>
        <Swiper navigation={true} modules={[Navigation]} id="mainslider">{slides}</Swiper>
    </React.Fragment> 
    );
}

export default SwiperSliderComponent;