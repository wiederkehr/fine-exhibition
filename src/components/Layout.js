import React, { Component } from 'react';
import classNames from 'classnames';
import './Layout.css';

export class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        {this.props.children}
      </div>
    );
  }
}

export class LayoutContainer extends Component {
  render() {
    const classes = classNames('LayoutContainer', this.props.className);
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}

export class LayoutContent extends Component {
  render() {
    const classes = classNames('LayoutContent', this.props.className);
    return (
      <div className={classes}>
      {this.props.children}
      </div>
    );
  }
}

export class LayoutHeader extends Component {
  render() {
    const classes = classNames('LayoutBar', 'LayoutHeader', this.props.className);
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}

export class LayoutFooter extends Component {
  render() {
    const classes = classNames('LayoutBar', 'LayoutFooter', this.props.className);
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}
