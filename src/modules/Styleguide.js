import React, { Component } from 'react';
import { Catalog } from 'catalog';

import HistoryDoc from '../docs/HistoryDoc';
import InterfaceDoc from '../docs/InterfaceDoc';
import IntroductionDoc from '../docs/IntroductionDoc';
import LayoutDoc from '../docs/LayoutDoc';
import ListDoc from '../docs/ListDoc';
import ThemeDoc from '../docs/ThemeDoc';
import SwiperDoc from '../docs/SwiperDoc';
import GlyphDoc from '../docs/GlyphDoc';
import ProfileDoc from '../docs/ProfileDoc';

class Styleguide extends Component {
  render() {
    return (
      <Catalog
      title='Styleguide'
      theme={{
        pageHeadingBackground: '#384B66',
        brandColor: '#384B66',
        sidebarColorText: '#333',
        sidebarColorActive: '#637A99',
        sidebarColorTextActive: '#637A99',
        sidebarColorHeading: '#384B66',
        codeColor: '#333',
        linkColor: '#384B66',
        textMedium: '#333',
      }}
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
          path: '/list',
          title: 'List',
          component: ListDoc
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
        {
          path: '/glyph',
          title: 'Glyph',
          component: GlyphDoc
        },
        {
          path: '/profile',
          title: 'Profile',
          component: ProfileDoc
        },
      ]}
      />
    );
  }
}

export default Styleguide;
