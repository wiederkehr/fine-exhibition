import React, { Component } from 'react';
import * as d3 from 'd3';
import './Glyph.css';

const min       = 1;
const max       = 5;
const pulse     = d3.scaleLinear().domain([min, max]).range([2000, 500]);
const opacity   = d3.scaleLinear().domain([min, max]).range([0.1, 1]);
const blur      = d3.scaleLinear().domain([min, max]).range([5, 0]);
const color     = d3.scaleLinear().domain([min, max]).range(["#ca0020", "#0571b0"]);

export class Glyph extends Component {

  constructor(props) {
    super(props);
    this.state = {
      size: null
    }
    this.handleResize = this.handleResize.bind(this);
  }
  handleResize() {
    var node = this.refs.Glyph;
    var width = node.parentNode.getBoundingClientRect().width // Currently is 0, but why?
    this.setState({ size: width });
  }
  componentDidMount() {
    var node = this.refs.Glyph;
    var width = node.parentNode.getBoundingClientRect().width // Currently is 0, but why?
    switch( this.props.width ) {
      case undefined:
        window.addEventListener('resize', this.handleResize);
        this.setState({ size: width });
      break;
      case '100%':
        window.addEventListener('resize', this.handleResize);
        this.setState({ size: width });
      break;
      default:
        this.setState({ size: this.props.width });
    };
  }
  componentWillUnmount() {
    window.removeEventListener('resize', () => this.handleResize());
  }
  render() {
    const radius = d3.scaleSqrt().domain([min, max]).range([10, this.state.size / 2]);
    return (
      <div>
        <svg ref='Glyph' className='Glyph' width={this.state.size} height={this.state.size}>
          <g>
            <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation={blur(this.props.controllability)} />
            </filter>
            <g transform={"translate(" + this.state.size / 2 + "," + this.state.size / 2 + ")"}>
              <circle
                r={radius(this.props.intensity)}
                fill={color(this.props.valence)}
                filter="url(#blur)"
                style={{
                  opacity: opacity(this.props.conduciveness),
                  animationDuration: pulse(this.props.arousal) + 'ms',
                }}
              />
            </g>
          </g>
        </svg>
      </div>
    )
  }
}

export const GlyphContainer = ({ date, emotion, arousal, conduciveness, controllability, intensity, valence }) => (
    <div className='GlyphContainer'>
      <div className='GlyphTitle'>
        {/*<div className='GlyphEmotion'>{emotion}</div>*/}
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
