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
    this.state = {isToggleOn: false};
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(event) {
    this.props.onClick(event);
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };

  render() {
    return (
      <input
        className={ classNames('Button', 'ToggleButton', this.state.isToggleOn ? 'ToggleButton--On' : 'ToggleButton--Off') }
        type='button'
        value={this.props.children}
        onClick={this.handleClick}
      />
    );
  };
};
