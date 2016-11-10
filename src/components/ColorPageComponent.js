'use strict';

import React from 'react';

require('styles//ColorPage.css');

import ColorChip from './ColorChipComponent'
import InlineEdit from './InlineEditComponent'
import {connect} from 'react-redux'
import {updateColorSettings, addColorSettings, removeColorSettings} from '../actions'

import { withRouter } from 'react-router'

import copy from 'copy-to-clipboard';

var m = require('exports?componentHandler!material-design-lite/material.js');

function encode(val) {
  return encodeURIComponent(JSON.stringify(val))
}

function decode(val) {
  return JSON.parse(decodeURIComponent(val))
}


class ColorPageComponent extends React.Component {

	constructor(props) {
		super(props)

		this.addForegroundValue = this.addForegroundValue.bind(this)
		this.addBackgroundValue = this.addBackgroundValue.bind(this)
    this.updateBackgroundValue = this.updateBackgroundValue.bind(this)
    this.updateForegroundValue = this.updateForegroundValue.bind(this)
    this.removeForegroundValue = this.removeForegroundValue.bind(this)
    this.copytext = this.copytext.bind(this)
    this.updateHistory = this.updateHistory.bind(this)
    this.goBack = this.goBack.bind(this)
	}


  addForegroundValue(val) {
  this.props.dispatch(addColorSettings('foreground', val))
  }

  addBackgroundValue(val) {
    this.props.dispatch(addColorSettings('background', val))
  }

  removeForegroundValue(index) {
    this.props.dispatch(removeColorSettings(index, 'foreground'))
  }

  updateBackgroundValue(val, index){
    this.props.dispatch(updateColorSettings(index, 'background', val))
  }

  updateForegroundValue(val, index){

    this.props.dispatch(updateColorSettings(index, 'foreground', val))

  }

  copytext(e) {
    e.preventDefault()

     copy(window.location.href);
  }

  goBack(e) {
    e.preventDefault()

    this.props.router.goBack()

    let {routeParams} = this.props;

    if (routeParams.foreground) {

      let {foreground, background} = routeParams;

      this.setState({
        foreground: decode(foreground),
        background: decode(background)
      })

    }

  }

  updateHistory() {
    this.props.router.push(`/color/${this.state.url.foreground}/${this.state.url.background}`)
  }

  componentDidMount() {
  	m.upgradeDom()
  }

  componentDidUpdate(){
    m.upgradeDom()
  }



  render() {
    // let url = `${this.state.url.foreground}/${this.state.url.background}`
    let {foreground, background} = this.props.colors
    return (

      <div className='mdl-grid'>
        <div className='mdl-cell mdl-cell--12-col'>
        <button className="mdl-button mdl-js-button mdl-button--icon" onClick={this.goBack}>
          <i className="material-icons">undo</i>
        </button>
        <button className="mdl-button mdl-js-button mdl-button--icon" onClick={this.copytext}>
          <i className="material-icons">content_cut</i>
        </button>

        </div>
      	<div className='mdl-cell mdl-cell--12-col'>
      	<table className='mdl-data-table mdl-js-data-table mdl-shadow--2dp'>
  <thead>
    <tr>
      <th className='mdl-data-table__cell--non-numeric' colSpan='2'>RGB</th>
      <th className='mdl-data-table__cell--non-numeric'>HEX</th>

      {background.map((color, i)=>{

      	return (<th key={i} className='mdl-data-table__cell--non-numeric' key={i}>
      		<InlineEdit updateValue={this.updateBackgroundValue} text={color.rgb} index={i} pill/>
		</th>)
      })}
      <th className='mdl-data-table__cell--non-numeric'>
        <InlineEdit addNewValue={this.addBackgroundValue}/>
      </th>
    </tr>
  </thead>


  {foreground.map((color, index) => {
            // let fColor = Color().rgb(color.rgb);
      			return <ColorChip
              text={color.rgb}
              key={index}
              index={index}
              background={background}
              updateValue={this.updateForegroundValue}
              remove={this.removeForegroundValue}/>
      		})}
  <tbody>
  <tr>
  	<td colSpan={background.length+5} style={{textAlign: 'left'}}>
  		<InlineEdit addNewValue={this.addForegroundValue} />
  	</td>
  </tr>
  </tbody>


</table>

      	</div>
      </div>
    );
  }
}

ColorPageComponent.displayName = 'ColorPageComponent';

const mapStateToProps = (state) => {
  return {...state}
}

// Uncomment properties you need
// ColorPageComponent.propTypes = {};
// ColorPageComponent.defaultProps = {};

const ConnectedColorPageComponent = connect(
  mapStateToProps
  // mapDispatchToProps
)(ColorPageComponent)


export default ConnectedColorPageComponent;
