import React from 'react';
import ReactSVG from 'react-svg';
import './RecordingAsset.css';

export const HummockAsset = ({ controllability, intensity, valence }) => {
  let filename = controllability + "_" + intensity + "_" + valence;
  filename = '1_1_1';
  return (
    <div className='HummockAsset'>
      <ReactSVG
        path={ "assets/vectors/hummock/Key__" + filename + ".svg" }
      />
    </div>
  );
};

export const WaveAsset = ({ arousal }) => {
  const filename = arousal;
  return (
    <ReactSVG
      path={ "assets/vectors/wave/" + filename + ".svg" }
    />
  );
};
