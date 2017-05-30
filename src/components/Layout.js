import React from 'react';
import classNames from 'classnames';
import './Layout.css';

export const Layout = ({ children }) => {
  return <div className="Layout">{children}</div>
};

export const LayoutContainer = ({ className, children }) => {
  const classes = classNames('LayoutContainer', className);
  return <div className={classes}>{children}</div>
};

export const LayoutContent = ({ className, children }) => {
  const classes = classNames('LayoutContent', className);
  return <div className={classes}>{children}</div>
};

export const LayoutHeader = ({ className, children }) => {
  const classes = classNames('LayoutBar', 'LayoutHeader', className);
  return <div className={classes}>{children}</div>
};

export const LayoutFooter = ({ className, children }) => {
  const classes = classNames('LayoutBar', 'LayoutFooter', className);
  return <div className={classes}>{children}</div>
};

export const LayoutRow = ({ top, bottom, className, children }) => {
  const classes = classNames('LayoutRow', 'Top-' + top, 'Bottom-' + bottom, className);
  return <div className={classes}>{children}</div>
};
