import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Swiper.css';

// Documentation slick-carousel: https://github.com/kenwheeler/slick/
// Documentation react-slick: https://github.com/akiran/react-slick

// Fix the loading width=0 with this function in ComponentDidMount: slick('setPosition');

export class Swiper extends Component {

  componentDidMount() {
    console.log('resize');
    // this.refs.slider.slickGoTo(e.target.value)
    // $('.your-element').slick('setPosition');
  }

  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: false,
      mobileFirst: true,
    };

    return (
      <div className='Swiper' ref="buttonContainer">
        <Slider ref='swiper' {...settings}>{this.props.children}</Slider>
      </div>
    )
  }
}
