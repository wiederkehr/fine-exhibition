import React, { Component } from 'react';
import classNames from 'classnames';
import { LayoutRow } from '../components/Layout';
import './Toggle.css';

export class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(event) {
    this.props.onClick(event, this.props.index);
  };

  render() {
    return (
      <input
        className={ classNames('ToggleButton', this.props.isActive ? 'ToggleButton--On' : 'ToggleButton--Off') }
        type='button'
        disabled={this.props.disabled}
        value={this.props.value}
        onClick={this.handleClick}
      />
    );
  };
};

export class ToggleGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: this.props.options,
      selectedValue: this.props.selection,
      selectedIndex: this.props.options.indexOf(this.props.selection),
    };
    this.toggleButton = this.toggleButton.bind(this);
  };

  toggleButton(event, index) {
    this.props.onChange(event);
    this.setState({
      selectedIndex: index,
      selectedValue: this.state.options[index],
      options: this.state.options
    });
  };

  render() {
    return (
      <div className="ToggleGroup">
        {this.state.options.map((option, i) => {
          return (
            <LayoutRow key={i} top='m' bottom='m'>
              <ToggleButton
                index={i}
                value={option}
                onClick={this.toggleButton}
                isActive={(this.state.selectedIndex === i)}/>
            </LayoutRow>
          )
        })}
      </div>
    );
  };
};

export class SelectGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: this.props.options,
      selectedValues: this.props.selection,
      selectedIndices: [],
    };
    this.toggleButton = this.toggleButton.bind(this);
  };

  componentDidMount() {

    let selectedIndices = this.state.selectedValues.map((value) => {
      let position = this.state.options.indexOf(value);
      return position === -1 ? null : position;
    });

    this.setState({
      selectedIndices: selectedIndices
    });
  };

  toggleButton(event, index) {

    let newIndices = this.state.selectedIndices.slice();
    let position = newIndices.indexOf(index);

    if(position === -1){
      newIndices.push(index)
    }else{
      newIndices.splice(position, 1)
    };

    if(newIndices.length > 3){
      newIndices.shift()
    };

    let newValues = newIndices.map((index) => {
      return this.state.options[index];
    });

    this.setState({
      selectedIndices: newIndices,
      selectedValues: newValues
    });

    let newEvent = {target: {value: newValues}};
    this.props.onChange(newEvent);
  };

  render() {

    let allButtons = this.state.options.map((option, i) => {

      let position = this.state.selectedIndices.indexOf(i);
      let isActive = null;
      position === -1 ? isActive = false : isActive = true;

      return (
        <LayoutRow key={i} top='s' bottom='s'>
          <ToggleButton
            index={i}
            value={option}
            onClick={this.toggleButton}
            isActive={isActive}/>
        </LayoutRow>
      )
    });

    return (
      <div className="ToggleGroup">
        { allButtons }
      </div>
    );
  };
};
