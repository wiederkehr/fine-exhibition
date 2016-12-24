import React, { Component } from 'react';
import classNames from 'classnames';
import { LayoutFooter } from '../components/Layout';
import './Pagination.css';

export class Pagination extends Component {
  render() {
    const isFirst = this.props.currentDot === 0 ? true : false;
    const isLast = this.props.currentDot === this.props.dots.length - 1 ? true : false;

    const labelBackward = this.props.backward.label ? this.props.backward.label : '← Back';
    const labelForward = this.props.forward.label ? this.props.forward.label : 'Next →';

    let buttonBackward = null;
    let buttonForward = null;

    if (isFirst) {
      buttonBackward = null;
    } else {
      buttonBackward = <PaginationAction onClick={this.props.backward.onClick}>{labelBackward}</PaginationAction>;
    }

    if (isLast) {
      buttonForward = <PaginationAction onClick={this.props.forward.onSubmit}>Submit ✓</PaginationAction>;
    } else {
      buttonForward = <PaginationAction onClick={this.props.forward.onClick}>{labelForward}</PaginationAction>;
    }

    return (
      <LayoutFooter className="Pagination">
        <span className="PaginationActionLeft">
          {buttonBackward}
        </span>
        <PaginationDots dots={this.props.dots} currentDot={this.props.currentDot}/>
        <span className="PaginationActionRight">
          {buttonForward}
        </span>
      </LayoutFooter>
    )
  }
}

export const PaginationAction = ({ onClick, children }) => (
  <button className="PaginationAction" onClick={onClick}>{children}</button>
);

export const PaginationDots = ({ dots, currentDot }) => (
  <div className='PaginationDots'>
    {
      dots.map(function(dot, i) {
        return <PaginationDot key={i} status={ currentDot === i ? 'active' : 'passive' } />
      })
    }
  </div>
);

export const PaginationDot = ({ status }) => {
  const classes = classNames('PaginationDot', 'PaginationDot--' + status);
  return (
    <svg className={classes} width='12' height='12'>
      <circle r='4' cy='6' cx='6'/>
    </svg>
  )
};
