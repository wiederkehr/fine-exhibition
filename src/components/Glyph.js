import React, { Component } from 'react';
import * as d3 from 'd3';
import './Glyph.css';

const min = 1;
const max = 5;
const maxPulse = 5;
const maxBlur = 5;
const maxSize = 100 - maxBlur * 2;
const pulse = d3.scaleLinear().domain([min, max]).range([2000, 500]);
const opacity = d3.scaleLinear().domain([min -1 , max]).range([0, 1]);
const blur = d3.scaleLinear().domain([min, max]).range([maxBlur, 0]);
const radius = d3.scaleSqrt().domain([min - 1, max]).range([0, maxSize / 2 - maxBlur]);
const color = d3.scaleLinear().domain([min, max]).range(["#ca0020", "#0571b0"]);

export class Glyph extends Component {

  componentDidUpdate() {
    let intensity = this.props.intensity;
    let arousal = this.props.arousal;
    d3.select('circle')
      .transition()
      .duration( (d) => { return pulse(arousal)})
      .on('start', function repeat() {
        d3.active(this)
        .attr('r', (d) => { return radius(intensity) - maxPulse})
        .transition()
        .attr('r', (d) => { return radius(intensity)})
        .transition()
        .on("start", repeat);
      });
  }

  render() {
    return (
      <svg className='Glyph' width={maxSize} height={maxSize}>
        <g transform="translate(0,0)">
          <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation={blur(this.props.controllability)} />
          </filter>
          <g transform={"translate(" + maxSize / 2 + "," + maxSize / 2 + ")"}>
            <circle cx="0" cy="0" r={radius(this.props.intensity)} fill={color(this.props.valence)} filter="url(#blur)" style={{opacity: opacity(this.props.conduciveness)}} />
          </g>
        </g>
      </svg>
    )
  }
}

export const GlyphContainer = ({ date, emotion, arousal, conduciveness, controllability, intensity, valence }) => (
    <div className='GlyphContainer'>
      <div className='GlyphTitle'>
        <div className='GlyphEmotion'>{emotion}</div>
        <div className='GlyphDate'>{date}</div>
      </div>
      <Glyph
        arousal={arousal}
        conduciveness={conduciveness}
        controllability={controllability}
        intensity={intensity}
        valence={valence}
      />
    </div>
);
