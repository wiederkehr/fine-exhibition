import React, { Component } from 'react';
import { Catalog } from 'catalog';

import InterfaceDoc from '../docs/InterfaceDoc';
import IntroductionDoc from '../docs/IntroductionDoc';
import LayoutDoc from '../docs/LayoutDoc';
import ThemeDoc from '../docs/ThemeDoc';

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
