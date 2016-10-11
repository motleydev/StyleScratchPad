'use strict';

import React from 'react';

require('styles//ColorPage.css');

import ColorChip from './ColorChipComponent'

var m = require('exports?componentHandler!material-design-lite/material.js');

var Color = require('color');

class ColorPageComponent extends React.Component {

	constructor(props) {
		super(props)

		this.addForegroundValue = this.addForegroundValue.bind(this)
		this.addBackgroundValue = this.addBackgroundValue.bind(this)

		this.state = {
			foreground: [
				{
					rgb: [0,176,232]
				},
				{
					rgb: [233,66,98]
				},
				{
					rgb: [148,193,31]
				},
				{
					rgb: [239,121,15]
				},
				{
					rgb: [111,47,136]
				}
			],
			background: [
				{
					rgb: [29,29,27]
				},
				{
					rgb: [255,255,255]
				},
				{
					rgb: [0,176,232]
				}
			]
		}
	}


  addForegroundValue(e) {
  	e.preventDefault()
  	let newArr = [...this.state.foreground];

  	newArr.push({rgb: [0,0,0]})

  	this.setState({
  		foreground: newArr
  	})
	
	m.upgradeDom()
  }

  addBackgroundValue(e) {
  	e.preventDefault()
  	let newArr = [...this.state.background];

  	newArr.push({rgb: [0,0,0]})

  	this.setState({
  		background: newArr
  	})

  }

  componentDidMount() {
  	m.upgradeDom();
  }

  componentDidUpdate(){
  	m.upgradeDom();
  }

  render() {

    return (
      
      <div className='mdl-grid'>
      	<div className='mdl-cell mdl-cell--12-col'>
      	<table className='mdl-data-table mdl-js-data-table mdl-shadow--2dp'>
  <thead>
    <tr>
      <th className='mdl-data-table__cell--non-numeric' colSpan='2'>RGB</th>
      <th className='mdl-data-table__cell--non-numeric'>HEX</th>
      {this.state.background.map((b,i)=>{

      	let color = Color().rgb(b.rgb);

  		let backgroundColor = {
      		background: color.rgbString(),
      		color: color.light() ? 'black' : 'white'
    	}

      	return (<th key={i} className='mdl-data-table__cell--non-numeric' key={i}>
      		<span className='mdl-chip' style={backgroundColor}>
    			<span className='mdl-chip__text'>{`Small | Large`}</span>
			</span>
		</th>)
      })}
      <th className='mdl-data-table__cell--non-numeric'>
        <button className="mdl-button mdl-js-button mdl-button--icon" onClick={this.addBackgroundValue}>
  			<i className="material-icons">add_box</i>
		</button>
      </th>
    </tr>
  </thead>
  
   
  {this.state.foreground.map((color, index) => {
      			return <ColorChip {...color} key={index} background={this.state.background}/>
      		})}
  <tbody>
  <tr>
  	<td colSpan={this.state.background.length+5} style={{textAlign: 'left'}}>
  		<button className="mdl-button mdl-js-button mdl-button--icon" onClick={this.addForegroundValue}>
  			<i className="material-icons">add_box</i>
		</button>
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

// Uncomment properties you need
// ColorPageComponent.propTypes = {};
// ColorPageComponent.defaultProps = {};

export default ColorPageComponent;
