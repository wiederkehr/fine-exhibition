import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Swiper.css';

// Documentation slick-carousel: https://github.com/kenwheeler/slick/
// Documentation react-slick: https://github.com/akiran/react-slick

export const Swiper = ({ children }) => {

  var settings = {
    arrows: false,
    dots: true,
    infinite: false,
    mobileFirst: true,
  };

  return (
    <div className='Swiper'>
      <Slider {...settings}>{children}</Slider>
    </div>
  )
};
