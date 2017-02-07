import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import { Aura, Hummock, Bummock, Wave } from '../components/Scene.js';

export default () => (
  <Page>
    <h2>Hummock</h2>
    <ReactSpecimen noSource={true}>
      <Hummock
        record={{
          controllability:4,
          intensity:3,
          valence:2
        }}
      />
    </ReactSpecimen>
    <h2>Bummock</h2>
    <ReactSpecimen noSource={true}>
      <Bummock
        record={{
          trigger:'T1_1'
        }}
      />
    </ReactSpecimen>
    <h2>Aurora</h2>
    <ReactSpecimen noSource={true} dark={true}>
      <Aura
        record={{
          action:'A_Engage'
        }}
      />
    </ReactSpecimen>
    <h2>Wave</h2>
    <ReactSpecimen noSource={true} dark={true}>
      <Wave
        record={{
          arousal:3
        }}
      />
    </ReactSpecimen>
  </Page>
);
