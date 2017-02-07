import React from 'react';
import ReactSVG from 'react-svg';
import { scaleLinear } from 'd3-scale';
import './Scene.css';

export const Sky = ({ record }) => {
  const conduciveness = scaleLinear().domain([1, 3, 5]).range(["#FF7D54", "#E5CCC5" , "#B6E2F4"]);
  return (
    <div className='Sky' style={{ background: conduciveness(record.conduciveness) }}>
    </div>
  )
};

export const Aura = ({ record }) => {
  // const filename = record.action;
  const filename = 'A_Engage';
  const path = 'assets/vectors/aura/' + filename + '.svg';
  return (
    <div className='Aura'>
      <ReactSVG path={ path } />
    </div>
  )
};

export const Hummock = ({ record }) => {
  const filename = "Key_" + record.valence + "_" + record.intensity + "_" + record.controllability;
  const path = 'assets/vectors/hummock/' + filename + '.svg';
  return (
    <div className='Hummock'>
      <ReactSVG path={ path } />
    </div>
  )
};

export const Bummock = ({ record }) => {
  // const filename = trigger;
  const filename = 'T1_1';
  const path = 'assets/vectors/bummock/' + filename + '.svg';
  return (
    <div className='Bummock'>
      <ReactSVG path={ path } />
    </div>
  )
};

export const Wave = ({ record }) => {
  const filename = 'Waves_' + record.arousal;
  const path = 'assets/vectors/wave/' + filename + '.svg';
  return (
    <div className='Wave'>
      <ReactSVG path={ path } />
    </div>
  )
};

export const Sea = () => {
  return (
    <div className='Sea'>
      <div className='SeaBackground'></div>
      <div className='SeaForeground'></div>
    </div>
  )
};
