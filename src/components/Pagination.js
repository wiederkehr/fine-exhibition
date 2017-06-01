import React, { Component } from 'react';
import classNames from 'classnames';
import { LayoutFooter } from '../components/Layout';
import { ArrowRightIcon, ArrowLeftIcon } from '../components/Icons';
import './Pagination.css';

export class Pagination extends Component {
  render() {
    const classes = classNames('Pagination', this.props.transparent === true ? 'Pagination--transparent' : null);
    const isFirst = this.props.currentDot === 0 ? true : false;
    const isLast = this.props.currentDot === this.props.dots.length - 1 ? true : false;

    const labelForward = <ArrowRightIcon />;
    const labelBackward = <ArrowLeftIcon />;
    const labelSubmit = 'Submit';

    let buttonBackward = null;
    let buttonForward = null;

    if (isFirst) {
      buttonBackward = null;
    } else {
      buttonBackward = <PaginationAction onClick={this.props.backward.onClick} disabled={!this.props.readyForPreviousStep}>{labelBackward}</PaginationAction>;
    }

    if (isLast) {
      buttonForward = <PaginationAction onClick={this.props.forward.onSubmit} disabled={!this.props.readyForNextStep}>{labelSubmit}</PaginationAction>;
    } else {
      buttonForward = <PaginationAction onClick={this.props.forward.onClick} disabled={!this.props.readyForNextStep}>{labelForward}</PaginationAction>;
    }
    return (
      <LayoutFooter className={classes}>
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

export const PaginationAction = ({ onClick, children, disabled }) => (
  <button className="PaginationAction" onClick={onClick} disabled={disabled}>{children}</button>
);

export const PaginationDots = ({ dots, currentDot }) => (
  <div className='PaginationDots'>
    {
      dots.map(function(dot, i) {
        let status = '';
        if (currentDot <= i) {
          status = 'next';
        };
        if (currentDot >= i) {
          status = 'past';
        };
        if (currentDot === i) {
          status = 'active';
        };
        return <PaginationDot key={i} status={status} />
      })
    }
  </div>
);

export const PaginationDot = ({ status }) => {
  const classes = classNames('PaginationDot', 'PaginationDot--' + status);
  return (
    <svg className={classes} width='16' height='16'>
      <circle r='5' cy='8' cx='8'/>
    </svg>
  )
};
