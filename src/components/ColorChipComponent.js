'use strict';

import React from 'react';

require('styles//ColorChip.css');

var Color = require('color');

class ColorChipComponent extends React.Component {
  
  constructor(props) {
  	super(props)
  }



  render() {

  	let {hex, rgb, cmyk,rgba} = this.props
  	
  	let color = Color().cmyk(cmyk)



    return (
      <div className="demo-card-event mdl-card mdl-shadow--2dp" style={{background: color.rgbString()}}>
  	<div className="mdl-card__title mdl-card--expand">
  
     <div className="mdl-textfield mdl-js-textfield">
  		<input className="mdl-textfield__input" type="text" id="sample1" />
    	<label className="mdl-textfield__label" for="sample1">Text...</label>
  	</div>
  
  </div>
  <div className="mdl-card__actions mdl-card--border">
    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      Add to Calendar
    </a>
    <div className="mdl-layout-spacer"></div>
    <i className="material-icons">event</i>
  </div>
</div>
    );
  }
}

ColorChipComponent.displayName = 'ColorChipComponent';

// Uncomment properties you need
// ColorChipComponent.propTypes = {};
// ColorChipComponent.defaultProps = {};

export default ColorChipComponent;
