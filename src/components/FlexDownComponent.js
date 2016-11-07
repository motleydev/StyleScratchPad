'use strict';

import React from 'react';

require('styles//FlexDown.css');

String.prototype.fuzzy = function(s) {
	var hay = this.toLowerCase(),
    	i = 0,
    	n = -1, l;
		s = s.toLowerCase();
	for (; l = s[i++];)
    	if (!~(n = hay.indexOf(l, n + 1))) return false;
	return true;
};

class FlexDownComponent extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            allFonts: this.props.fonts,
            initial: this.props.initial,
            label: this.props.label,
            open: false
        }

        this.filterFontFamily = this.filterFontFamily.bind(this)
        this.setDefaultFont = this.setDefaultFont.bind(this)
        this._openClose = this._openClose.bind(this);

    }

    filterFontFamily(e) {
        e.preventDefault();


        let newState = {
            fontFamilies: {},
            open: true
        }
        let newList = []

        this.props.fonts.map((font) => {
            if (font.fuzzy(e.target.value)) {
                newList.push(font)
            }
        })

        newState.allFonts = newList
        newState.initial = e.target.value

        this.setState(newState)
    }

    setDefaultFont(e) {

        let newState = {
        }

        let newFontFamilies = {
            fontFamilies: {},
            open: false
        }

        newFontFamilies.fontFamilies[this.props.label] = e.target.value

        newState.open = false;

        if (e.target.value === '') {
            newState.initial = this.props.fonts[0]
            this.props.updateSelection(newFontFamilies)
            this.setState(newState)
        } else {
            this.props.updateSelection(newFontFamilies)
        }

    }

    chooseFont(index, e) {

        let newFontFamilies = {
            fontFamilies: {},
            open: false
        }

        newFontFamilies.fontFamilies[this.props.label] =
            this.state.allFonts[index]

        this.props.updateSelection(newFontFamilies)

    }

    _openClose() {
        this.setState({
            open: !this.state.open
        })
    }

    render() {

        const style = {
            height: this.state.open ? 'auto' : 0,
            overflow: 'hidden',
            padding: 0
        }

        const iconStyle = {
            float: 'right'
        }

        return (
            <div className='flexDown mdl-card mdl-shadow--2dp'>

            <div className='mdl-card__title'>
        
          <div className='mdl-card__title-text'>
          <strong>
          {this.props.label}
          </strong>
          </div>

        </div>

            <div className='mdl-card__supporting-text'>
            <div style={style}>
                {this.state.allFonts.map((font, index) => {
                return <div onClick={(e) => this.chooseFont(index, e)} key={index}>{font}</div>
                })}
            </div>
            </div>
            <div className='mdl-card__actions mdl-card--border'>
 				<div className='mdl-textfield mdl-js-textfield'>
 					<input className='mdl-textfield__input' type='text' id={this.props.label}
            			value={this.state.initial}
            			onChange={this.filterFontFamily}
            			onBlur={this.setDefaultFont}
            		/>
 					<label className='mdl-textfield__label' htmlFor={this.props.label}>{this.props.label} Font</label>
 				</div>
            </div>

            <div className="mdl-card__menu">
                <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"  onClick={this._openClose} >
                    {this.state.open
                        ? <i className='material-icons' style={iconStyle}>keyboard_arrow_down</i>
                    : <i className='material-icons' style={iconStyle}>keyboard_arrow_left</i>}
                </button>
            </div>

  			</div>
  		)
    }
}

FlexDownComponent.displayName = 'FlexDownComponent';

// Uncomment properties you need
// FlexDownComponent.propTypes = {};
// FlexDownComponent.defaultProps = {};

export default FlexDownComponent;
