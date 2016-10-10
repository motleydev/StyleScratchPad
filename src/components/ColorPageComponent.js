'use strict';

import React from 'react';

require('styles//ColorPage.css');

import ColorChip from './ColorChipComponent'

class ColorPageComponent extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			foreground: [
				{
					cmyk: [75,5,0,0]
				},
				{
					cmyk: [0,85,45,0]
				},
				{
					cmyk: [50,0,100,0]
				},
				{
					cmyk: [0,62,97,0]
				},
				{
					cmyk: [70,94,0,0]
				}
			],
			background: [
				{
					cmyk: [0,0,0,100]
				},
				{
					cmyk: [0,0,0,0]
				},
				{
					cmyk: [75,5,0,0]
				}
			]
		}
	}

  render() {

    return (
      <div className="mdl-layout__content">
      <div className="mdl-grid">
      	<div className="mdl-cell mdl-cell--4-col">
      		{this.state.foreground.map((color, index) => {
      			return <ColorChip {...color} key={index} />
      		})}
      	</div>
      </div>
      </div>
    );
  }
}

ColorPageComponent.displayName = 'ColorPageComponent';

// Uncomment properties you need
// ColorPageComponent.propTypes = {};
// ColorPageComponent.defaultProps = {};

export default ColorPageComponent;
