import React from 'react';
import ReactSVG from 'react-svg';

export const AuraAsset = ({ action }) => {
  // const filename = action;
  const filename = 'Key_A_Engage';
  const path = 'assets/vectors/aura/' + filename + '.svg';
  return <ReactSVG path={ path } />
};

export const HummockAsset = ({ controllability, intensity, valence }) => {
  const filename = "Key_" + valence + "_" + intensity + "_" + controllability;
  // const filename = 'Key__1_1_1';
  const path = 'assets/vectors/hummock/' + filename + '.svg';
  return <ReactSVG path={ path } />
};

export const BummockAsset = ({ trigger }) => {
  // const filename = trigger;
  const filename = 'Key_T1_1';
  const path = 'assets/vectors/bummock/' + filename + '.svg';
  return <ReactSVG path={ path } />
};

export const WaveAsset = ({ arousal }) => {
  const filename = arousal;
  const path = 'assets/vectors/wave/' + filename + '.svg';
  return <ReactSVG path={ path } />
};
