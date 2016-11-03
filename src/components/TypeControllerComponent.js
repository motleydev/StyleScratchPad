'use strict';

import React from 'react';
import {connect} from 'react-redux'
import FCBC from './FontControlBoxComponent';
import FlexDown from './FlexDownComponent';

require('styles//TypeController.css');

class TypeControllerComponent extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (

			<div className='mdl-cell mdl-cell--4-col'>
        	<div>
          		{this.props.typeElements && this.props.typeElements.map((el, index) => {
        	 		return <FCBC key={ index } {...el} index={index} handleClick={this._updateStyle} />
          		})}

          		<div>
          		<FlexDown
    				fonts={this.props.allFonts}
    				initial={this.state.fontFamilies['headers']}
    				label='headers'
    				updateSelection={this.updateSelection} />
    			<FlexDown
    				fonts={this.props.allFonts}
    				initial={this.state.fontFamilies['body']}
    				label='body'
    				updateSelection={this.updateSelection} />
  				</div>

          	</div>
        </div>

			)
	}
};

TypeControllerComponent.displayName = 'TypeControllerComponent';

// Uncomment properties you need
// TypeControllerComponent.propTypes = {};
// TypeControllerComponent.defaultProps = {};
// 

const mapStateToProps = (state) => {
  return {
    typeElements: state.typeElements
  }
}

const ConnectedTypeControllerComponent = connect(
  mapStateToProps
  // mapDispatchToProps
)(TypeControllerComponent)

export default ConnectedTypeControllerComponent
