import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import Glyph from '../components/Glyph';

export default () => (
  <Page>
    <h2>Glyph</h2>
    <ReactSpecimen noSource={true}>
      <Glyph
        arousal={4}
        conduciveness={4}
        controllability={4}
        intensity={4}
        valence={4}
      />
    </ReactSpecimen>
  </Page>
);
