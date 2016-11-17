import React, { Component } from 'react';
import { Catalog } from 'catalog';

import ButtonDoc from '../docs/ButtonDoc';
import ColorsDoc from '../docs/ColorsDoc';
import FontsDoc from '../docs/FontsDoc';
import HeaderDoc from '../docs/HeaderDoc';
import IconsDoc from '../docs/IconsDoc';
import IntroductionDoc from '../docs/IntroductionDoc';
import SliderDoc from '../docs/SliderDoc';

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
          title: 'Theme',
          pages: [
            {
              path: '/colors',
              title: 'Colors',
              component: ColorsDoc
            },
            {
              path: '/icons',
              title: 'Icons',
              component: IconsDoc
            },
            {
              path: '/fonts',
              title: 'Fonts',
              component: FontsDoc
            }
          ]
        },
        {
          title: 'Components',
          pages: [
            {
              path: '/header',
              title: 'Header',
              component: HeaderDoc
            },
            {
              path: '/button',
              title: 'Button',
              component: ButtonDoc
            },
            {
              path: '/slider',
              title: 'Slider',
              component: SliderDoc
            },
          ]
        }
      ]}
      />
    );
  }
}

export default Styleguide;
