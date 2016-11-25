import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import { Swiper } from '../components/Swiper';

const SwiperBlock1 = {
  background: '#95ACCB',
  height: '610px',
}
const SwiperBlock2 = {
  background: '#546D8E',
  height: '610px',
}

export default () => (
  <Page>
    <h2>Swiper</h2>
    <ReactSpecimen noSource={true} span={3}>
      <Swiper>
        <div style={SwiperBlock1}>Swiper Block #1</div>
        <div style={SwiperBlock2}>Swiper Block #2</div>
      </Swiper>
    </ReactSpecimen>
  </Page>
);
