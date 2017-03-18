import React, { Component } from 'react';
import classNames from 'classnames';
import './Navigation.css';

export const NavigationAction = ({ onClick, children }) => (
  <button className="NavigationAction" onClick={onClick}>{children}</button>
);

export const NavigationArrow = ({ direction }) => {
  const classes = classNames('NavigationArrow', 'NavigationArrow--' + direction);
  const points = direction === 'next' ? "1,1 11,11 1,21" : "11,1 1,11 11,21";
  return (
    <svg className={classes} width='12' height='22'>
      <polyline points={points}/>
    </svg>
  )
};

export class Navigation extends Component {
  render() {

    const classes = classNames('Navigation');
    const isFirst = this.props.currentDay === 0 ? true : false;
    const isLast = this.props.currentDay === this.props.days.length - 1 ? true : false;

    let buttonBackward = null;
    let buttonForward = null;

    if (isFirst) {
      buttonForward = null;
    } else {
      buttonForward = <NavigationAction onClick={this.props.forward.onClick}><NavigationArrow direction='next' /></NavigationAction>;
    }

    if (isLast) {
      buttonBackward = null;
    } else {
      buttonBackward = <NavigationAction onClick={this.props.backward.onClick}><NavigationArrow direction='past' /></NavigationAction>;
    }

    return (
      <div className={classes}>
        <div className="NavigationActionLeft">{buttonBackward}</div>
        <div className="NavigationActionRight">{buttonForward}</div>
      </div>
    )
  }
};
