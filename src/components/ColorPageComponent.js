'use strict';

import React from 'react';

require('styles//ColorPage.css');

import ColorChip from './ColorChipComponent'
import InlineEdit from './InlineEditComponent'

var m = require('exports?componentHandler!material-design-lite/material.js');

class ColorPageComponent extends React.Component {

	constructor(props) {
		super(props)

		this.addForegroundValue = this.addForegroundValue.bind(this)
		this.addBackgroundValue = this.addBackgroundValue.bind(this)
    this.updateBackgroundValue = this.updateBackgroundValue.bind(this)
    this.updateForegroundValue = this.updateForegroundValue.bind(this)

		this.state = {
			foreground: [
				{
					rgb: [45,170,215]
				},
				{
					rgb: [230,0,85]
				},
				{
					rgb: [163,210,11]
				},
				{
					rgb: [242,126,0]
				},
				{
					rgb: [122,32,172]
				},
        {
          rgb: [246, 177, 184]
        },
        {
          rgb: [216, 230, 177]
        },
        {
          rgb: [252, 206, 161]
        },
        {
          rgb: [192, 170, 210]
        }
			],
			background: [
				{
					rgb: [0,0,0]
				},
				{
					rgb: [255,255,255]
				},
				{
					rgb: [45,170,215]
				}
			]
		}
	}


  addForegroundValue(val) {

  	let newArr = [...this.state.foreground];

  	newArr.push({rgb: val})

  	this.setState({
  		foreground: newArr
  	})

	m.upgradeDom()
  }

  addBackgroundValue(val) {

  	let newArr = [...this.state.background];

  	newArr.push({rgb: val})

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

  updateBackgroundValue(val, index){

    let newArr = [...this.state.background];
    newArr[index] = {rgb: val};

    this.setState({
      background: newArr
    })

  }

  updateForegroundValue(val, index){

    let newArr = [...this.state.foreground];
    newArr[index] = {rgb: val};

    this.setState({
      foreground: newArr
    })

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

      {this.state.background.map((color, i)=>{

      	return (<th key={i} className='mdl-data-table__cell--non-numeric' key={i}>
      		<InlineEdit updateValue={this.updateBackgroundValue} text={color.rgb} index={i} pill/>
		</th>)
      })}
      <th className='mdl-data-table__cell--non-numeric'>
        <InlineEdit addNewValue={this.addBackgroundValue}/>
      </th>
    </tr>
  </thead>


  {this.state.foreground.map((color, index) => {
            // let fColor = Color().rgb(color.rgb);
      			return <ColorChip
              text={color.rgb}
              key={index}
              index={index}
              background={this.state.background}
              updateValue={this.updateForegroundValue}/>
      		})}
  <tbody>
  <tr>
  	<td colSpan={this.state.background.length+5} style={{textAlign: 'left'}}>
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

// Uncomment properties you need
// ColorPageComponent.propTypes = {};
// ColorPageComponent.defaultProps = {};

export default ColorPageComponent;
