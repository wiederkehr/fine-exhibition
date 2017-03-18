import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import { Aura, Hummock, Bummock, Wave } from '../components/Scene.js';

export default () => (
  <Page>
    <h2>Hummock</h2>
    <ReactSpecimen noSource={true}>
      <div style={{height: '200px'}}>
        <Hummock
          record={{
            controllability:4,
            intensity:3,
            valence:2
          }}
        />
    </div>
    </ReactSpecimen>
    <h2>Bummock</h2>
    <ReactSpecimen noSource={true}>
      <div style={{height: '200px'}}>
        <Bummock
          record={{
            trigger:'T1_1'
          }}
        />
      </div>
    </ReactSpecimen>
    <h2>Aurora</h2>
    <ReactSpecimen noSource={true} dark={true}>
      <div style={{height: '200px'}}>
        <Aura
          record={{
            action:'A_Engage'
          }}
        />
      </div>
    </ReactSpecimen>
    <h2>Wave</h2>
    <ReactSpecimen noSource={true} dark={true}>
      <div style={{height: '200px'}}>
        <Wave
          record={{
            arousal:3
          }}
        />
      </div>
    </ReactSpecimen>
  </Page>
);
