import React from 'react';
import { Page, ReactSpecimen } from 'catalog';

import Slider from '../components/Slider';

export default () => (
      <Page>
        <h2>Controlled Slider</h2>
        <ReactSpecimen>
          <Slider name="Slider"
                  value='3'
                  onChange={(event) => {}} />
        </ReactSpecimen>
      </Page>
);
