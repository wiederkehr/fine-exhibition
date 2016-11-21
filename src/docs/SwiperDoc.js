import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import Swiper from '../components/Swiper';

const SwiperViewport = {
  height: '400px',
  paddingBottom: '30px',
  width: '650px',
  overflow: 'auto'
}
const SwiperBlock1 = {
  background: '#95ACCB',
  height: '400px',
  width: '400px'
}
const SwiperBlock2 = {
  background: '#546D8E',
  height: '400px',
  width: '400px'
}

export default () => (
  <Page>
    <h2>Swiper</h2>
    <ReactSpecimen frame={true} noSource={true}>
      <div style={SwiperViewport}>
        <Swiper>
          <div style={SwiperBlock1}>Swiper Block #1</div>
          <div style={SwiperBlock2}>Swiper Block #2</div>
        </Swiper>
      </div>
    </ReactSpecimen>
  </Page>
);
