import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import './BackLink.css';

class BackLink extends Component {
  render() {
    return (
      <Link className="BackLink" to={this.props.to}>Back</Link>
    );
  }
}

BackLink.propTypes = {
  to: PropTypes.string.isRequired
}

export default BackLink;
