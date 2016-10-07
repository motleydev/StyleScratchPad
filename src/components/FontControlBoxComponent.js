'use strict';

import React from 'react';

require('styles//FontControlBox.css');

class FontControlBoxComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {open: false, ...this.props};

    this._handleClick = this._handleClick.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._openClose = this._openClose.bind(this);
  }

  _handleClick(props) {
    this.props.handleClick(props)
  }

  _handleChange(event) {
    let _this = this;
    event.preventDefault()

    let newProp = {};

    newProp[event.target.id] = event.target.value;

    _this.setState(newProp);

    this._handleClick(this.state)
  }

  _openClose() {
    this.setState({open: !this.state.open })
  }

  render() {

    const {name, size, lineHeight, kearning, marginAfter, open} = this.state;

    return (
      <div className='fontcontrolbox-component'>

        <div onClick={this._openClose}>
        <strong>{name.toUpperCase()}</strong>
        {open ? <i className="material-icons">keyboard_arrow_down</i> : <i className="material-icons">keyboard_arrow_left</i>}
        </div>

        {open && <div className="demo-list-action mdl-list">

          <div className="mdl-list__item">
            
            <span className="mdl-list__item-primary-content">
            <i className="material-icons">format_size</i>
              <span>
                <input
                  className="mdl-slider mdl-js-slider"
                  type='range'
                  value={size}
                  id='size'
                  onChange={this._handleChange}
                  min='0'
                  max='10'
                  step='0.1'
                />
              </span>
              <span className="mdl-list__item-secondary-action" style={{width: "100px"}}>
                <input
                  className="mdl-textfield__input"
                  type="number"
                  id="size"
                  value={size}
                  min="0"
                  max="10"
                  step='0.1'
                  onChange={this._handleChange}
                />
              </span>
            </span>
  
          </div>
        
        <div className="mdl-list__item">
            
            <span className="mdl-list__item-primary-content">
            <i className="material-icons">format_line_spacing</i>
              <span>
        <input
            className="mdl-slider mdl-js-slider"
            type='range'
            value={lineHeight}
            id='lineHeight'
            onChange={this._handleChange}
            min='0'
            max='3'
            step='0.1'
          />
        </span>
        <span className="mdl-list__item-secondary-action" style={{width: "100px"}}>
                <input
                  className="mdl-textfield__input"
                  type="number"
                  id="lineHeight"
                  value={lineHeight}
                  min="0"
                  max="3"
                  step='0.1'
                  onChange={this._handleChange}
                />
              </span>
            </span>
  
          </div>
        
        <div className="mdl-list__item">
            
            <span className="mdl-list__item-primary-content">
            <i className="material-icons">swap_horiz</i>
              <span>
        <input
            className="mdl-slider mdl-js-slider"
            type='range'
            value={kearning}
            id='kearning'
            onChange={this._handleChange}
            min='0'
            max='10'
            step='0.1'
          />
        </span>
        <span className="mdl-list__item-secondary-action" style={{width: "100px"}}>
                <input
                  className="mdl-textfield__input"
                  type="number"
                  id="kearning"
                  value={kearning}
                  min="0"
                  max="10"
                  step='0.1'
                  onChange={this._handleChange}
                />
              </span>
            </span>
  
          </div>
        
        <div className="mdl-list__item">
            
            <span className="mdl-list__item-primary-content">
            <i className="material-icons">vertical_align_bottom</i>
              <span>
        <input
            className="mdl-slider mdl-js-slider"
            type='range'
            value={marginAfter}
            id='marginAfter'
            onChange={this._handleChange}
            min='0'
            max='2'
            step='0.1'
          />
          </span>
          <span className="mdl-list__item-secondary-action" style={{width: "100px"}}>
                <input
                  className="mdl-textfield__input"
                  type="number"
                  id="marginAfter"
                  value={marginAfter}
                  min="0"
                  max="2"
                  step='0.1'
                  onChange={this._handleChange}
                />
              </span>
            </span>
  
          </div>

          </div>}
      
          <hr/>
      </div>
    );
  }
}

FontControlBoxComponent.displayName = 'FontControlBoxComponent';

// Uncomment properties you need
// FontControlBoxComponent.propTypes = {};
// FontControlBoxComponent.defaultProps = {};

export default FontControlBoxComponent;
