import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import { AuraAsset, HummockAsset, BummockAsset, WaveAsset } from '../components/RecordingAsset.js';

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
    <h2>Bummock Asset</h2>
    <ReactSpecimen noSource={true}>
      <BummockAsset trigger={'T1_1'} />
    </ReactSpecimen>
    <h2>Aurora Asset</h2>
    <ReactSpecimen noSource={true} dark={true}>
      <AuraAsset action={'A_Engage'} />
    </ReactSpecimen>
    <h2>Wave Asset</h2>
    <ReactSpecimen noSource={true} dark={true}>
      <WaveAsset arousal={3} />
    </ReactSpecimen>
  </Page>
);
