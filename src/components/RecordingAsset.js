import React from 'react';
import ReactSVG from 'react-svg';

export const AuraAsset = ({ action }) => {
  const filename = action;
  const path = 'assets/vectors/aura/' + filename + '.svg';
  return <ReactSVG path={ path } />
};

export const WaveAsset = ({ arousal }) => {
  const filename = arousal;
  const path = 'assets/vectors/wave/' + filename + '.svg';
  return <ReactSVG path={ path } />
};

export const HummockAsset = ({ controllability, intensity, valence }) => {
  // const filename = "Key__" + controllability + "_" + intensity + "_" + valence;
  const filename = 'Key__1_1_1';
  const path = 'assets/vectors/hummock/' + filename + '.svg';
  return <ReactSVG path={ path } />
};

export const BummockAsset = ({ trigger }) => {
  const filename = trigger;
  const path = 'assets/vectors/bummock/' + filename + '.svg';
  return <ReactSVG path={ path } />
};
