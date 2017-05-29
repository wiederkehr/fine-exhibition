import React, { Component } from 'react';
import classNames from 'classnames';
import './Toggle.css';

export class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(event) {
    this.props.onClick(event, this.props.index);
  };

  render() {
    return (
      <input
        className={ classNames('ToggleButton', this.props.isActive ? 'ToggleButton--On' : 'ToggleButton--Off') }
        type='button'
        value={this.props.value}
        onClick={this.handleClick}
      />
    );
  };
};

export const ToggleButtonRow = ({ children }) => (
  <div className='ToggleButtonRow'>{children}</div>
);

export class ToggleGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: null,
      selectedValue: null,
      options: this.props.options
    };
    this.toggleButton = this.toggleButton.bind(this);
  };

  toggleButton(event, index) {
    this.props.onChange(event);
    this.setState({
      selectedIndex: index,
      selectedValue: this.state.options[index],
      options: this.state.options
    });
  };

  render() {
    return (
      <div className="ToggleGroup">
        {this.state.options.map((option, i) => {
          return (
            <ToggleButtonRow key={i}>
              <ToggleButton
                index={i}
                value={option}
                onClick={this.toggleButton}
                isActive={(this.state.selectedIndex === i)}/>
            </ToggleButtonRow>
          )
        })}
      </div>
    );
  };
};
