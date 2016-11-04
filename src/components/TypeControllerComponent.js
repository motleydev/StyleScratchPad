'use strict';

import React from 'react';
import {connect} from 'react-redux'
import FCBC from './FontControlBoxComponent';
import FlexDown from './FlexDownComponent';
import {updateTypeSettings, updateFontFamilies} from '../actions'

require('styles//TypeController.css');

class TypeControllerComponent extends React.Component {

	constructor(props) {
		super(props)
    this.updateStyle = this.updateStyle.bind(this);
    this.updateSelection = this.updateSelection.bind(this);
	}

  updateStyle(index, props) {
    this.props.dispatch(updateTypeSettings(index, props))
  }

  updateSelection(obj) {
    this.props.dispatch(updateFontFamilies(obj))
    // let newFontFamilies = Object.assign(this.props.fontFamilies, obj.fontFamilies)
    // this.setState({fontFamilies: newFontFamilies})
  }

	render() {
		return (

			<div className='mdl-cell mdl-cell--4-col'>
        	<div>
          		{this.props.typeElements && this.props.typeElements.map((el, index) => {
        	 		return <FCBC key={ index } {...el} index={index} handleClick={this.updateStyle} />
          		})}

          		<div>
          <FlexDown
    				fonts={this.props.allFonts}
    				initial={this.props.fontFamilies['headers']}
    				label='headers'
    				updateSelection={this.updateSelection} />
    			<FlexDown
    				fonts={this.props.allFonts}
    				initial={this.props.fontFamilies['body']}
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
  return {...state}
}

// const mapDispatchToProps = (dispatch, index, props) => {
//   return {
//     updateTypeSettings: (index, props) => {
//       dispatch(updateTypeSettings(index, props))
//     }
//   }
// }

const ConnectedTypeControllerComponent = connect(
  mapStateToProps
  // mapDispatchToProps
)(TypeControllerComponent)

export default ConnectedTypeControllerComponent
