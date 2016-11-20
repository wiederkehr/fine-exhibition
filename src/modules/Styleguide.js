import React, { Component } from 'react';
import { Catalog } from 'catalog';

import HistoryDoc from '../docs/HistoryDoc';
import InterfaceDoc from '../docs/InterfaceDoc';
import IntroductionDoc from '../docs/IntroductionDoc';
import LayoutDoc from '../docs/LayoutDoc';
import ThemeDoc from '../docs/ThemeDoc';
import SwiperDoc from '../docs/SwiperDoc';

class Styleguide extends Component {

  render() {
    return (
      <Catalog
      title='Styleguide'
      pages={[
        {
          path: '/',
          title: 'Introduction',
          component: IntroductionDoc
        },
        {
          path: '/theme',
          title: 'Theme',
          component: ThemeDoc
        },
        {
          path: '/interface',
          title: 'Interface',
          component: InterfaceDoc
        },
        {
          path: '/history',
          title: 'History',
          component: HistoryDoc
        },
        {
          path: '/swiper',
          title: 'Swiper',
          component: SwiperDoc
        },
        {
          path: '/layout',
          title: 'Layout',
          component: LayoutDoc
        },
      ]}
      />
    );
  }
}

export default Styleguide;
