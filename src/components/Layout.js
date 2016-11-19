import React, { Component } from 'react';

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
    return (
      <div className="LayoutContainer">
        {this.props.children}
      </div>
    );
  }
}

export class LayoutContent extends Component {
  render() {
    return (
      <div className="LayoutContent">
      {this.props.children}
      </div>
    );
  }
}

export class LayoutHeader extends Component {
  render() {
    return (
      <div className="LayoutBar LayoutHeader">
        {this.props.children}
      </div>
    );
  }
}

export class LayoutFooter extends Component {
  render() {
    return (
      <div className="LayoutBar LayoutFooter">
        {this.props.children}
      </div>
    );
  }
}
