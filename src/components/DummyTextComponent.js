'use strict';

import React from 'react';
import {connect} from 'react-redux'

// import {bindActionCreators} from 'redux'

// import getTypeSettings from '../reducers'

import HtmlViewerComponent from './HtmlViewerComponent';

import TypeController from './TypeControllerComponent'

var m = require('exports?componentHandler!material-design-lite/material.js');

var styleguideBoilerplate = require('html!../sources/dummyText.html');

require('styles//TypoPage.css');

class DummyTextComponent extends React.Component {

	constructor(props) {
		super(props);

    this.updateSelection = this.updateSelection.bind(this);
    // this._filterFontFamily = this._filterFontFamily.bind(this);
    // this._setDefaultFont = this._setDefaultFont.bind(this);

		this.state = {
			globalSize: 16,
			originalFontFamiles: {}
		}
	}

	componentDidMount() {

		// this.setState({
		// 	originalFontFamiles: { ...this.props.fontFamilies},
		// 	allFontsMaster: [...this.props.allFonts]
		// })
	}

  componentDidUpdate() {
    m.upgradeDom()
  }

  updateSelection(obj) {
  	let newFontFamilies = Object.assign(this.props.fontFamilies, obj.fontFamilies)
  	// this.setState({fontFamilies: newFontFamilies})
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
  				rule += `${el.name} { font-family: ${this.props.fontFamilies.body}, serif; }`
  			} else {
  				rule += `${el.name} { font-family: ${this.props.fontFamilies.headers}, sans-serif; }`
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
  return {...state}
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (id) => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

const ConnectedDummyTextComponent = connect(
  mapStateToProps
  // mapDispatchToProps
)(DummyTextComponent)

DummyTextComponent.displayName = 'DummyTextComponent';

// Uncomment properties you need
// DummyTextComponent.propTypes = {};
// DummyTextComponent.defaultProps = {};

export default ConnectedDummyTextComponent;
