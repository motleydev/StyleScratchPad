'use strict';

import React from 'react';

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
			globalSize: 16
		}
	}

  componentDidUpdate() {
    m.upgradeDom()
  }

  updateSelection(obj) {
  	let newFontFamilies = Object.assign(this.props.fontFamilies, obj.fontFamilies)
  	// this.setState({fontFamilies: newFontFamilies})
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

DummyTextComponent.displayName = 'DummyTextComponent';

// Uncomment properties you need
// DummyTextComponent.propTypes = {};
// DummyTextComponent.defaultProps = {};

export default DummyTextComponent;
