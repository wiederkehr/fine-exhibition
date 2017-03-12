import React, { Component } from 'react';
import { Catalog } from 'catalog';

import InterfaceDoc from '../styleguide/InterfaceDoc';
import IntroductionDoc from '../styleguide/IntroductionDoc';
import LayoutDoc from '../styleguide/LayoutDoc';
import ListDoc from '../styleguide/ListDoc';
import ThemeDoc from '../styleguide/ThemeDoc';
import GlyphDoc from '../styleguide/GlyphDoc';
import ProfileDoc from '../styleguide/ProfileDoc';
import SceneDoc from '../styleguide/SceneDoc';

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
          path: '/list',
          title: 'List',
          component: ListDoc
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
          path: '/scene',
          title: 'Scene',
          component: SceneDoc
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
