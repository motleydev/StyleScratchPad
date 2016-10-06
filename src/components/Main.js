require('normalize.css/normalize.css');
require('styles//App.css');

import React from 'react';

import HtmlViewerComponent from './HtmlViewerComponent';

import FCBC from './FontControlBoxComponent';

class AppComponent extends React.Component {

	constructor(props) {
		super(props);

    this._updateStyle = this._updateStyle.bind(this);

		this.state = {
			globalSize: 16,
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


  _updateStyle(props) {
    let newState = Object.assign({}, this.state)
    newState.typeElements[props.index] = props
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
  				margin-bottom: ${el.marginAfter * this.state.globalSize}em;
  			} `

  			style += rule
  	})

    return (
      <div className="index">

      <style>{style}</style>

        <div className="controller">
          {this.state.typeElements.map((el, index) => {
        	 return <FCBC key={ index } {...el} index={index} handleClick={this._updateStyle} />
          })}
        </div>

        <HtmlViewerComponent />

      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
