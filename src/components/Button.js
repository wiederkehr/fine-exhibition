import React, { Component, PropTypes } from 'react';

import './Button.css';

class Button extends Component {
  render() {
    return (
      <button
        className="Button"
        disabled={this.props.disabled}
        type={this.props.type}
        onChange={this.props.onChange}>
        {this.props.label}
      </button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}

export default Button;
