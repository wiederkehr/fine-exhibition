import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import Swiper from '../components/Swiper';

import './SwiperDoc.css';

export default () => (
  <Page>
    <h2>Swiper</h2>
    <ReactSpecimen frame={true} noSource={true}>
      <div className="SwiperViewport">
        <Swiper>
          <div className="SwiperBlock SwiperBlock-1">Swiper Block #1</div>
          <div className="SwiperBlock SwiperBlock-2">Swiper Block #2</div>
          <div className="SwiperBlock SwiperBlock-3">Swiper Block #3</div>
        </Swiper>
      </div>
    </ReactSpecimen>
  </Page>
);
