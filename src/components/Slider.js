import React from 'react';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';

import 'rc-tooltip/assets/bootstrap.css';
import 'rc-slider/assets/index.css';
import './Slider.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle {...restProps} />
    </Tooltip>
  );
};

export const DimensionSlider = ({ name, value, onChange }) => (
  <div className="DimensionSlider">
    <label className="DimensionSlider-label">{name}</label>
    <Slider
      min={1}
      max={5}
      handle={handle}
      onChange={(value) => {
        let newEvent = {target: { value: value}}
        onChange(newEvent)
      }}
      defaultValue={3}
    />
  </div>
);
