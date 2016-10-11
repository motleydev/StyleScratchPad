'use strict';

import React from 'react';

import HtmlViewerComponent from './HtmlViewerComponent';
import FCBC from './FontControlBoxComponent';

require('styles//TypoPage.css');

class TypoPageComponent extends React.Component {

	constructor(props) {
		super(props);

    this._updateStyle = this._updateStyle.bind(this);
    this._setFontFamily = this._setFontFamily.bind(this);

		this.state = {
			globalSize: 16,
			fontFamilies: {
				headers: 'MarkPro-Medium',
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
		this.setState({originalFontFamiles: { ...this.state.fontFamilies}})
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
        	<div style={{position: 'fixed'}}>
          		{this.state.typeElements.map((el, index) => {
        	 		return <FCBC key={ index } {...el} index={index} handleClick={this._updateStyle} />
          		})}

          		<div>
          		<div className='mdl-textfield mdl-js-textfield'>
    			<input className='mdl-textfield__input' type='text' id='headers'
    				value={this.state.fontFamilies.headers}
    				onChange={this._setFontFamily}
    			/>
    			<label className='mdl-textfield__label' htmlFor='headers'>Header Font</label>
  				</div>
  				</div>
  				<div>
  				<div className='mdl-textfield mdl-js-textfield'>
    			<input className='mdl-textfield__input' type='text' id='body'
    				value={this.state.fontFamilies.body}
    				onChange={this._setFontFamily}
    			/>
    			<label className='mdl-textfield__label' htmlFor='body'>Header Font</label>
  				</div>
  				</div>

          	</div>
        </div>

        <HtmlViewerComponent />

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
