import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import { Scene, Aura, Hummock, Bummock, Wave } from '../components/Scene.js';

const LayoutViewport = {
  height: '667px',
  width: '375px',
  overflow: 'hidden'
}

export default () => (
  <Page>
    <h2>Full Scene</h2>
    <ReactSpecimen noSource={true}>
      <div style={LayoutViewport}>
        <Scene
          record={{
            arousal:3,
            controllability:4,
            intensity:3,
            valence:2,
            trigger:'T1_1',
            action:'A_Engage'
          }}
        />
      </div>
    </ReactSpecimen>
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
