import React from 'react';
import ReactSVG from 'react-svg';

export const AuraAsset = ({ action }) => {
  const filename = action;
  const path = 'assets/vectors/aura/' + filename + '.svg';
  return <ReactSVG path={ path } class={ 'SvgClassname' } />
};

export const HummockAsset = ({ controllability, intensity, valence }) => {
  const filename = "Key_" + valence + "_" + intensity + "_" + controllability;
  const path = 'assets/vectors/hummock/' + filename + '.svg';
  return <ReactSVG path={ path } />
};

export const BummockAsset = ({ trigger }) => {
  const filename = trigger;
  const path = 'assets/vectors/bummock/' + filename + '.svg';
  return <ReactSVG path={ path } />
};

export const WaveAsset = ({ arousal }) => {
  const filename = 'Waves_' + arousal;
  const path = 'assets/vectors/wave/' + filename + '.svg';
  return <ReactSVG path={ path } />
};
