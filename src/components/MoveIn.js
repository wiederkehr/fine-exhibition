import React, { Component } from 'react';
import TransitionGroup from 'react-addons-transition-group';

export class MoveIn extends Component {

  componentWillAppear(callback) {
    console.log('componentWillAppear');
  }

  componentDidAppear() {
    console.log('componentDidAppear');
  }

  componentWillLeave(callback) {
    console.log('componentWillLeave');
  }

  componentDidLeave() {
    console.log('componentDidLeave');
  }

  render() {
    return (
      <TransitionGroup>
        {this.props.children}
      </TransitionGroup>
    )
  };
};
