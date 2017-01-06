import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import { HummockAsset, WaveVisualization } from '../components/RecordingAsset';

export default () => (
  <Page>
    <h2>Hummock Asset</h2>
    <ReactSpecimen noSource={true}>
      <HummockAsset
        controllability={4}
        intensity={3}
        valence={2}
      />
    </ReactSpecimen>
    <h2>Wave Visualization</h2>
    <ReactSpecimen noSource={true}>
      <WaveVisualization
        arousal={3}
      />
    </ReactSpecimen>
  </Page>
);
