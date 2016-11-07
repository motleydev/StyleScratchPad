'use strict';

import React from 'react';
var m = require('exports?componentHandler!material-design-lite/material.js');

require('styles//FontControlBox.css');

class FontControlBoxComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            ...this.props
        };

        this._handleClick = this._handleClick.bind(this);
        this._handleChange = this._handleChange.bind(this);
        this._openClose = this._openClose.bind(this);
    }

    _handleClick(props) {
        this.props.handleClick(this.props.index, props)
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
        this.setState({
            open: !this.state.open
        })
    }

    componentDidUpdate(){
    m.upgradeDom();
  }

    render() {

        const {name, size, lineHeight, kearning, marginAfter, open} = this.state;

        const style = {
            height: open ? 'auto' : 0,
            overflow: 'hidden',
            padding: 0
        }

        const iconStyle = {
            float: 'right'
        }

        return (
            <div className='fontcontrolbox-component mdl-card mdl-shadow--2dp'>

        <div className='mdl-card__title'>
        
          <div className='mdl-card__title-text element-title'>
          <strong style={{
                    fontSize: `${this.props.size}rem`,
                    lineHeight: `${this.props.lineHeight}em`,
                    letterSpacing: `${this.props.kearning}px`,
                    fontFamily: `${this.props.fontFamilies[this.props.class]}`
                  }}>
          {name.toUpperCase()}
          </strong>
          </div>

        </div>

        <div className='mdl-card__supporting-text'>
          <div className='demo-list-action mdl-list' style={style}>

            <div className='mdl-list__item'>
            
              <span className='mdl-list__item-primary-content'>
              
              <i className='material-icons'>format_size</i>
              
              <span>
                
                <input
                  className='mdl-slider mdl-js-slider'
                  type='range'
                  value={this.props.size}
                  id='size'
                  onChange={this._handleChange}
                  min='0'
                  max='10'
                  step='0.1'
                />
              
              </span>
              
              <span className='mdl-list__item-secondary-action'
                style={{width: '100px'}}>
              
                <input
                  className='mdl-textfield__input'
                  type='number'
                  id='size'
                  value={this.props.size}
                  min='0'
                  max='10'
                  step='0.1'
                  onChange={this._handleChange}
                />
              
              </span>
            </span>
  
          </div>
        
        <div className='mdl-list__item'>
            
            <span className='mdl-list__item-primary-content'>
            <i className='material-icons'>format_line_spacing</i>
              <span>
        <input
            className='mdl-slider mdl-js-slider'
            type='range'
            value={this.props.lineHeight}
            id='lineHeight'
            onChange={this._handleChange}
            min='0'
            max='3'
            step='0.1'
            />
        </span>
        <span className='mdl-list__item-secondary-action' style={{
                width: '100px'
            }}>
                <input
            className='mdl-textfield__input'
            type='number'
            id='lineHeight'
            value={this.props.lineHeight}
            min='0'
            max='3'
            step='0.1'
            onChange={this._handleChange}
            />
              </span>
            </span>
  
          </div>
        
        <div className='mdl-list__item'>
            
            <span className='mdl-list__item-primary-content'>
            <i className='material-icons'>swap_horiz</i>
              <span>
        <input
            className='mdl-slider mdl-js-slider'
            type='range'
            value={this.props.kearning}
            id='kearning'
            onChange={this._handleChange}
            min='0'
            max='10'
            step='0.1'
            />
        </span>
        <span className='mdl-list__item-secondary-action' style={{
                width: '100px'
            }}>
                <input
            className='mdl-textfield__input'
            type='number'
            id='kearning'
            value={this.props.kearning}
            min='0'
            max='10'
            step='0.1'
            onChange={this._handleChange}
            />
              </span>
            </span>
  
          </div>
        
        <div className='mdl-list__item'>
            
            <span className='mdl-list__item-primary-content'>
            <i className='material-icons'>vertical_align_bottom</i>
              <span>
        <input
            className='mdl-slider mdl-js-slider'
            type='range'
            value={this.props.marginAfter}
            id='marginAfter'
            onChange={this._handleChange}
            min='0'
            max='2'
            step='0.1'
            />
          </span>
          <span className='mdl-list__item-secondary-action' style={{
                width: '100px'
            }}>
                <input
            className='mdl-textfield__input'
            type='number'
            id='marginAfter'
            value={this.props.marginAfter}
            min='0'
            max='2'
            step='0.1'
            onChange={this._handleChange}
            />
              </span>
            </span>
  
          </div>

          </div>
          </div>

          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button mdl-js-button mdl-js-ripple-effect" onClick={this._openClose}>
              <span>{this.props.size} rem / {this.props.lineHeight} em</span>
            </a>
          </div>
      
        <div className="mdl-card__menu">
          <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"  onClick={this._openClose} >
            {open
              ? <i className='material-icons' style={iconStyle}>keyboard_arrow_down</i>
              : <i className='material-icons' style={iconStyle}>keyboard_arrow_left</i>}
          </button>
        </div>
      </div>
            );
    }
}

FontControlBoxComponent.displayName = 'FontControlBoxComponent';

// Uncomment properties you need
// FontControlBoxComponent.propTypes = {};
// FontControlBoxComponent.defaultProps = {};

export default FontControlBoxComponent;
