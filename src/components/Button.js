import React, { Component } from 'react';
import classNames from 'classnames';
import './Button.css';

export const Button = ({ disabled, onClick, type, style, children }) => (
  <button
    className={ classNames('Button', 'PrimaryButton') }
    disabled={disabled}
    type={type}
    onClick={onClick}
    style={style}>
    {children}
  </button>
);

export const SecondaryButton = ({ disabled, onClick, type, style, children }) => (
  <button
    className={ classNames('Button', 'SecondaryButton') }
    disabled={disabled}
    type={type}
    onClick={onClick}
    style={style}>
    {children}
  </button>
);

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
        className={ classNames('Button', 'ToggleButton', this.props.isToggleOn ? 'ToggleButton--On' : 'ToggleButton--Off') }
        type='button'
        value={this.props.value}
        onClick={this.handleClick}
      />
    );
  };
};

export class ToggleGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: null,
      selectedValue: null,
      options: this.props.options
    };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(event, index) {
    console.log(event, index);
    this.props.onChange(event);
    this.setState({
      selectedIndex: index,
      selectedValue: this.state.options[index],
      options: this.state.options
    });
  };

  render() {
    const { options } = this.state;

    return (
      <div className="ToggleGroup">
        {options.map((option, i) => {
          return (
            <ToggleButton
              key={i}
              index={i}
              value={option}
              onClick={this.handleClick}
              isToggleOn={(this.state.selectedIndex === i)}/>
          )
        })}
      </div>
    );
  };
};
