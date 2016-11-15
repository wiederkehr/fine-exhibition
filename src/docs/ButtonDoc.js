import React from 'react';
import { Page, ReactSpecimen } from 'catalog';

import Button from '../components/Button';

export default () => (
      <Page>
        <h2>Primary Button</h2>
        <ReactSpecimen>
          <Button type="button" label='Button' />
        </ReactSpecimen>
      </Page>
);
