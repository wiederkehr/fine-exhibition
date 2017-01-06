import React from 'react';
import { scaleLinear } from 'd3-scale';
import { range, extent } from 'd3-array';
import { line } from 'd3-shape';
import './RecordingVisualization.css';

const valenceScale = scaleLinear().domain([1, 3, 5]).range(["#850021", "#c684a3" , "#7eb1d1"]);
const heightScale = scaleLinear().domain([1, 5]).range([50, 100]);

export const HummockVisualization = ({ intensity, valence, controllability }) => {
  let peak = 100 - heightScale(intensity);
  let middle = 100 - heightScale(intensity) / 2;
  let line = "M 50," + peak + " L 1,100 L 100,100, Z";
  let area = "M 50," + peak + " L 1,100 L 100,100, Z";
  let control = [
    "M 0,0",
    "M 50," + peak + " L 75,100, M 50," + peak + " L 25,100, M 50," + peak + " L 50,100, M 100,100, L 50," + middle,
    "M 50," + peak + " L 75,100, M 50," + peak + " L 25,100, M 50," + peak + " L 50,100",
    "M 50," + peak + " L 75,100, M 50," + peak + " L 25,100",
    "M 50," + peak + " L 75,100",
    "M 0,0",
  ];
  return (
    <svg className="HummockVisualization" width='101' height='101'>
      <path className="HummockVisualizationArea" d={area} fill={valenceScale(valence)}/>
      <path className="HummockVisualizationLine" d={line} />
      <path className="HummockVisualizationLine" d={control[controllability]} />
    </svg>
  );
};

export const WaveVisualization = ({ arousal }) => {
  let sine = range(0, 10).map(function(k) {
    var value = [0.5 * k * Math.PI, Math.sin(0.5 * k * Math.PI)];
    return value;
  });
  let xScale = scaleLinear().range([0, 300]).domain(extent(sine, function(d) {
    return d[0];
  }));
  let yScale = scaleLinear().range([50, 0]).domain([-1, 1]);
  // let line = line()
  //   .x(function(d) {
  //     return xScale(d[0]);
  //   })
  //   .y(function(d) {
  //     return yScale(d[1]);
  //   });
  return (
    <svg className="WaveVisualization" width='100%' height='40'>
    </svg>
  );
};
