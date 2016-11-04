'use strict';

import React from 'react';
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

const ConnectedTypoPageComponent = connect(
  mapStateToProps
  // mapDispatchToProps
)(TypoPageComponent)

TypoPageComponent.displayName = 'TypoPageComponent';

// Uncomment properties you need
// TypoPageComponent.propTypes = {};
// TypoPageComponent.defaultProps = {};

export default ConnectedTypoPageComponent;
