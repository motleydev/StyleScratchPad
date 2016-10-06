'use strict';

import React from 'react';

require('styles//FontControlBox.css');

class FontControlBoxComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = this.props;

    this._handleClick = this._handleClick.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleClick(props) {
    this.props.handleClick(props)
  }

  _handleChange(event) {
    let _this = this;
    event.preventDefault()

    let newProp = {};

    newProp[event.target.id] = parseInt(event.target.value);

    _this.setState(newProp);

    this._handleClick(this.state)
  }

  render() {

    let {name, size, lineHeight, kearning, marginAfter} = this.state;

    return (
      <div className='fontcontrolbox-component'>
        <strong>{' Name: '} {name}</strong><br/>
        <label htmlFor='size'>
          {' Size: '} {this.state.size}
          <input className="mdl-slider mdl-js-slider" type='range' value={size} id='size' onChange={this._handleChange} min="0" max='6' step='0.25'/>
          </label><br/>
        <label htmlFor='lineheight'>
          {' Lineheight: '} {lineHeight}
          <input type='range' value={lineHeight} id='lineHeight' max='3' onChange={this._handleChange} step=".25"/>
          </label><br/>
        <label htmlFor='kearning'>
          {' Kearning: '} {kearning}
          <input type='range' value={kearning} id='kearning' onChange={this._handleChange} max='5' step=".25"/>
          </label><br/>
        <label htmlFor='marginAfter'>
          {' MarginAfter: '} {marginAfter}
          <input type='range' value={marginAfter} id='marginAfter' onChange={this._handleChange} max='3' step=".25"/>
          </label><br/>
      </div>
    );
  }
}

FontControlBoxComponent.displayName = 'FontControlBoxComponent';

// Uncomment properties you need
// FontControlBoxComponent.propTypes = {};
// FontControlBoxComponent.defaultProps = {};

export default FontControlBoxComponent;
