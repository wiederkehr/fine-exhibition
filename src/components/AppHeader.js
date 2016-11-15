import React, { Component } from 'react';

import BackLink from './BackLink';

import './AppHeader.css';

class AppHeader extends Component {
  render() {
    return (
      <div className="AppHeader">
        { this.props.back ? <BackLink to="/" /> : null }
        <span className="AppHeaderTitle">{this.props.title}</span>
      </div>
    );
  }
}

export default AppHeader;
