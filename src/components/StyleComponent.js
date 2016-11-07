'use strict';

import React from 'react';
import {connect} from 'react-redux'

require('styles//Style.css');


class StyleComponent extends React.Component {

	constructor(props) {
		super(props)
	}

  	render() {

    let width = ''

    switch (this.props.currentDevice) {
      case 'small':
        width = '320px'
        break
      case 'medium':
        width = '720px'
        break
      case 'large':
        width = 'auto'
        break
    }

  	let style = ''

  	if (this.props.responsiveType) {

  		this.props.responsiveType[this.props.currentDevice].map((el) => {
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

      style +=
      `
      .contentContainer {
        width: ${width};
      }`

  	}

    return (
      <style>{style}</style>
    );
  }
}

StyleComponent.displayName = 'StyleComponent';

const mapStateToProps = (state) => {
  return {...state}
}

const ConnectedStyleComponent = connect(
  mapStateToProps
)(StyleComponent)

// Uncomment properties you need
// StyleComponent.propTypes = {};
// StyleComponent.defaultProps = {};

export default ConnectedStyleComponent;
