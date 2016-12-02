import React, { Component } from 'react';
import classNames from 'classnames';
import './Switch.css';

export class Switch extends Component {
  constructor(props) {
    super(props)

    this.state={
      name: this.props.name,
      status: this.props.status,
      value: this.props.status ? 'on' : 'off',
    }
    this.onClick = this.onClick.bind(this);
  };

  onClick() {
    this.setState({status: !this.state.status})
    this.setState({value: !this.state.status ? 'on' : 'off'})
    // this.props.onChange(this.state.name, !this.state.status);
  };

  render() {
    return (
      <div className={ classNames('Switch', this.state.value, this.props.className) }>
        <button className={ classNames('SwitchButton', this.state.value) } type='button' onClick={this.onClick}>
          {this.state.value}
        </button>
      </div>
    )
  };
};
