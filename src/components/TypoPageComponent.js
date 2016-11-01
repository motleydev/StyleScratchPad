'use strict';

import React from 'react';

const markPro = require('xml!../sources/fonts_src/fontlist.xml');
let markProProcess = markPro.fonts.font.map( (font) => {return font.$.CssFamilyName})

import HtmlViewerComponent from './HtmlViewerComponent';
import FlexDown from './FlexDownComponent';
import FCBC from './FontControlBoxComponent';
var m = require('exports?componentHandler!material-design-lite/material.js');

var styleguideBoilerplate = require('html!../sources/styleguide.html');

require('styles//TypoPage.css');

class TypoPageComponent extends React.Component {

	constructor(props) {
		super(props);

    this._updateStyle = this._updateStyle.bind(this);
    this._setFontFamily = this._setFontFamily.bind(this);
    this.updateSelection = this.updateSelection.bind(this);
    // this._filterFontFamily = this._filterFontFamily.bind(this);
    // this._setDefaultFont = this._setDefaultFont.bind(this);
    let manFonts = ['Arnhem-Black',
    'Arnhem-BlackItalic',
    'Arnhem-Blond',
    'Arnhem-BlondItalic',
    'Arnhem-Bold',
    'Arnhem-BoldItalic',
    'Arnhem-Normal',
    'Arnhem-NormalItalic',
    'Georgia',
    'Arial']

		this.state = {
			globalSize: 16,

			allFonts: [...markProProcess, ...manFonts],

			fontFamilies: {
				headers: 'Mark W01 Bold',
				body: 'Arnhem-Blond'
			},
			originalFontFamiles: {},
			typeElements: [
					{
						name: 'h1',
						size: 5.75,
						lineHeight: 1.25,
						kearning: 0,
						marginAfter: 0,
						class: 'header'
					}, {
						name: 'h2',
						size: 4.75,
						lineHeight: 1.25,
						kearning: 0,
						marginAfter: 0,
						class: 'header'
					}, {
						name: 'h3',
						size: 3.75,
						lineHeight: 1.25,
						kearning: 0,
						marginAfter: 0,
						class: 'header'
					}, {
						name: 'h4',
						size: 2.5,
						lineHeight: 1.25,
						kearning: 0,
						marginAfter: 0,
						class: 'header'
					}, {
						name: 'h5',
						size: 1.75,
						lineHeight: 1.25,
						kearning: 0,
						marginAfter: 0,
						class: 'header'
					}, {
						name: 'h6',
						size: 1.75,
						lineHeight: 1.25,
						kearning: 0,
						marginAfter: 0,
						class: 'header'
					}, {
						name: 'p',
						size: 1.25,
						lineHeight: 1.25,
						kearning: 0,
						marginAfter: 0,
						class: 'body'
					}, {
						name: 'li',
						size: 1.25,
						lineHeight: 1.25,
						kearning: 0,
						marginAfter: 0,
						class: 'body'
					}, {
						name: 'small',
						size: 0.75,
						lineHeight: 1.25,
						kearning: 0,
						marginAfter: 0,
						class: 'body'
					}, {
						name: 'pre',
						size: 1.25,
						lineHeight: 1.25,
						kearning: 0,
						marginAfter: 0,
						class: 'body'
					}, {
						name: 'label',
						size: 1,
						lineHeight: 1.25,
						kearning: 0,
						marginAfter: 0,
						class: 'body'
					}
				]
		}
	}

	componentDidMount() {

		this.setState({
			originalFontFamiles: { ...this.state.fontFamilies},
			allFontsMaster: [...this.state.allFonts]
		})
	}

  _updateStyle(props) {
    let newState = { ...this.state}
    newState.typeElements[props.index] = props
    this.setState(newState)
  }

  

  _setFontFamily(e) {
  	e.preventDefault();
  	let newState = { ...this.state}
  	if (e.target.value === '') {
  		newState.fontFamilies[e.target.id] = this.state.originalFontFamiles[e.target.id]
  	} else {
  		newState.fontFamilies[e.target.id] = e.target.value
  	}

  	this.setState(newState)
  }

  componentDidUpdate() {
    m.upgradeDom()
  }

  updateSelection(obj) {
  	this.setState({...this.state, ...obj})
  }

  render() {

  	let style = ''

  	this.state.typeElements.map((el) => {
  		let rule = `
  			${el.name} {
  				font-size: ${el.size}em;
  				line-height: ${el.lineHeight};
  				letter-spacing: ${el.kearning}px;
  				margin-bottom: ${el.marginAfter}em;
  			} `

  			if (el.class === 'body') {
  				rule += `${el.name} { font-family: ${this.state.fontFamilies.body}, serif; }`
  			} else {
  				rule += `${el.name} { font-family: ${this.state.fontFamilies.headers}, sans-serif; }`
  			}

  			style += rule
  	})

    return (
      <div className='mdl-layout__content'>
      <div className='mdl-grid'>

      <style>{style}</style>

        <div className='mdl-cell mdl-cell--4-col'>
        	<div>
          		{this.state.typeElements.map((el, index) => {
        	 		return <FCBC key={ index } {...el} index={index} handleClick={this._updateStyle} />
          		})}

          		<div>
          		<FlexDown
    				fonts={this.state.allFonts}
    				initial={this.state.fontFamilies['headers']}
    				label='headers'
    				updateSelection={this.updateSelection} />
    			<FlexDown
    				fonts={this.state.allFonts}
    				initial={this.state.fontFamilies['body']}
    				label='body'
    				updateSelection={this.updateSelection} />
  				</div>

          	</div>
        </div>

        <HtmlViewerComponent html={styleguideBoilerplate} />

        </div>

      </div>
    );
  }
}

TypoPageComponent.displayName = 'TypoPageComponent';

// Uncomment properties you need
// TypoPageComponent.propTypes = {};
// TypoPageComponent.defaultProps = {};

export default TypoPageComponent;
