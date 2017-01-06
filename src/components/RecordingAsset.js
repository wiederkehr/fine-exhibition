import React from 'react';
import ReactSVG from 'react-svg';

export const HummockAsset = ({ controllability, intensity, valence }) => {
  const filename = controllability + "_" + intensity + "_" + valence;
  return (
    <ReactSVG
      path={ "assets/vectors/hummock/" + filename + ".svg" }
    />
  );
};

export const WaveVisualization = ({ arousal }) => {
  const filename = arousal;
  return (
    <ReactSVG
      path={ "assets/vectors/wave/" + filename + ".svg" }
    />
  );
};
