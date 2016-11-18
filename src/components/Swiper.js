import React, { Component } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Swiper.css';

class Swiper extends Component {
  render() {
    var settings = {
      arrows: false,
      dots: true,
      infinite: false,
      mobileFirst: true,
    };
    return (
      <Slider {...settings}>
        {this.props.children}
      </Slider>
    );
  }
}

export default Swiper;
