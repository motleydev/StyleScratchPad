'use strict';

import React from 'react';
import {connect} from 'react-redux'
import FCBC from './FontControlBoxComponent';
import FlexDown from './FlexDownComponent';
import {updateTypeSettings, updateFontFamilies, updateCurrentDevice} from '../actions'
var m = require('exports?componentHandler!material-design-lite/material.js');

require('styles//TypeController.css');

class TypeControllerComponent extends React.Component {

	constructor(props) {
		super(props)
    this.updateStyle = this.updateStyle.bind(this);
    this.updateSelection = this.updateSelection.bind(this);
	}

  componentDidUpdate(){
    m.upgradeDom();
  }

  updateStyle(index, props) {
    this.props.dispatch(updateTypeSettings(index, props, this.props.currentDevice))
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
          <div>
          {[
            {
              icon: 'phone_iphone',
              text: 'small'
            }, {
              icon: 'tablet_mac',
              text: 'medium'
            }, {
              icon: 'laptop_mac',
              text: 'large'
            }
          ].map((icon, index) => {
            let style = this.props.currentDevice === icon.text
            ? 'mdl-button mdl-js-button mdl-button--icon mdl-button--colored'
            : 'mdl-button mdl-js-button mdl-button--icon'
            return (
              
              <button className={style} key={index} onClick={
                (e) => {this.props.dispatch(updateCurrentDevice(icon.text, e))}}>
              
                <i className='material-icons'>{icon.icon}</i>
              
              </button>
              
              )
          })}
          
          </div>
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
          		{this.props.responsiveType &&
                this.props.responsiveType[this.props.currentDevice].map((el, index) => {
        	 		return (
                <FCBC
                  key={ index }
                  index={index}
                  handleClick={this.updateStyle}
                  fontFamilies={this.props.fontFamilies}
                  {...el}
                />)
          		})}

          		<div>
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
