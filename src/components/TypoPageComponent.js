'use strict';

import React from 'react';

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
			globalSize: 16
		}
	}
  componentDidUpdate() {
    m.upgradeDom()
  }

  render() {

    return (
      <div className='mdl-grid'>

      	<TypeController />
        <HtmlViewerComponent html={styleguideBoilerplate} />

        </div>
    );
  }
}


TypoPageComponent.displayName = 'TypoPageComponent';

// Uncomment properties you need
// TypoPageComponent.propTypes = {};
// TypoPageComponent.defaultProps = {};

export default TypoPageComponent;
