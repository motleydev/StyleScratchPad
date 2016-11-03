'use strict';

import React from 'react';

const markPro = require('xml!../sources/fonts_src/fontlist.xml');
let markProProcess = markPro.fonts.font.map( (font) => {return font.$.CssFamilyName})


import {connect} from 'react-redux'

// import {bindActionCreators} from 'redux'

// import getTypeSettings from '../reducers'

import HtmlViewerComponent from './HtmlViewerComponent';

import TypeController from './TypeControllerComponent'

var m = require('exports?componentHandler!material-design-lite/material.js');

var styleguideBoilerplate = require('html!../sources/styleguide.html');

require('styles//TypoPage.css');

class TypoPageComponent extends React.Component {

	constructor(props) {
		super(props);

    this._updateStyle = this._updateStyle.bind(this);
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
			originalFontFamiles: {}
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


  componentDidUpdate() {
    m.upgradeDom()
  }

  updateSelection(obj) {
  	let newFontFamilies = Object.assign(this.state.fontFamilies, obj.fontFamilies)
  	this.setState({fontFamilies: newFontFamilies})
  }

  render() {

  	let style = ''

  	if (this.props.typeElements) {

  		this.props.typeElements.map((el) => {
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

  	}
  	

    return (
      <div className='mdl-layout__content'>
      <div className='mdl-grid'>

      <style>{style}</style>

      	<TypeController />
        <HtmlViewerComponent html={styleguideBoilerplate} />

        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    typeElements: state.typeElements
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (id) => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

const ConnectedTypoPageComponent = connect(
  mapStateToProps
  // mapDispatchToProps
)(TypoPageComponent)

TypoPageComponent.displayName = 'TypoPageComponent';

// Uncomment properties you need
// TypoPageComponent.propTypes = {};
// TypoPageComponent.defaultProps = {};

export default ConnectedTypoPageComponent;
