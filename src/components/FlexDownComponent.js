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
            label: this.props.label
        }

        this.filterFontFamily = this.filterFontFamily.bind(this)
        this.setDefaultFont = this.setDefaultFont.bind(this)

    }

    filterFontFamily(e) {
        e.preventDefault();

        let newState = {
            fontFamilies: {}
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
            fontFamilies: {}
        }

        newFontFamilies.fontFamilies[this.props.label] = e.target.value

        if (e.target.value === '') {
            newState.initial = this.props.fonts[0]
            this.props.updateSelection(newFontFamilies)
            this.setState(newState)
        } else {
            this.props.updateSelection(newFontFamilies)
        }

    }

    chooseFont(index) {

        let newFontFamilies = {
            fontFamilies: {}
        }

        newFontFamilies.fontFamilies[this.props.label] =
            this.state.allFonts[index]

        this.props.updateSelection(newFontFamilies)

    }

    render() {

        return (
            <div className="flexDown">
 				<div className='mdl-textfield mdl-js-textfield'>
 					<input className='mdl-textfield__input' type='text' id='body'
            			value={this.state.initial}
            			onChange={this.filterFontFamily}
            			onBlur={this.setDefaultFont}
            		/>
 					<label className='mdl-textfield__label' htmlFor='body'>Header Font</label>
 				</div>
 			{this.state.allFonts.map((font, index) => {
                return <div onClick={(e) => this.chooseFont(index, e)} key={index}>{font}</div>
            })}
  			</div>
  		)
    }
}

FlexDownComponent.displayName = 'FlexDownComponent';

// Uncomment properties you need
// FlexDownComponent.propTypes = {};
// FlexDownComponent.defaultProps = {};

export default FlexDownComponent;
