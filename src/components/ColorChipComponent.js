'use strict';

import React from 'react';

require('styles//ColorChip.css');
var m = require('exports?componentHandler!material-design-lite/material.js');

import WCAG from './WcagComponent'
import InlineEdit from './InlineEditComponent'

var Color = require('color');

class ColorChipComponent extends React.Component {

  constructor(props) {
  	super(props)
    this.state = this.props
    this.handleChange = this.handleChange.bind(this)
    this.updateValue = this.updateValue.bind(this)
  }

handleChange(e) {
  e.preventDefault()
  let newRgb = [...this.props.text]

  newRgb[e.target.id] = parseInt(e.target.value)
  this.updateValue(newRgb, this.props.index)
}

updateValue(value, index){
    this.props.updateValue(value, index)
}

componentDidUpdate(){
    m.upgradeDom();
  }

  render() {

  	let color = Color().rgb(this.props.text)
    let [r,g,b] = color.values.rgb

    const textStyle = {
      color: color.rgbString()
    }

    return (
      <tbody>
        <tr>
          <td colSpan='2' className='mdl-data-table__cell--non-numeric'>
          <InlineEdit updateValue={this.updateValue} text={this.props.text} index={this.props.index} pill/>

          </td>
          <td className='mdl-data-table__cell--non-numeric' style={textStyle}>
          <InlineEdit updateValue={this.updateValue} text={this.props.text} index={this.props.index} />
          </td>
          {this.props.background.map((b, i)=>{

            let background = Color().rgb(b.rgb);

            return (<td className='mdl-data-table__cell--non-numeric' style={{textAlign: 'center'}} key={i}>

              { WCAG.aa(color.hexString(), background.hexString()) ?
                <i className='material-icons'>done</i> :
                <i className='material-icons'>report_problem</i> }
              { WCAG.aa_18(color.hexString(), background.hexString()) ?
                <i className='material-icons'>done</i> :
                <i className='material-icons'>report_problem</i> }
              </td>)
          })}
          <td/>
        </tr>
        <tr>
          <td colSpan={this.props.background.length+5}>
            {[r,g,b].map((color, index)=>{
              return <input className='mdl-slider mdl-js-slider' type='range' min='0' max='255' value={color} key={index} onChange={this.handleChange} id={index}/>
            })}
          </td>
        </tr>
      </tbody>
    );
  }
}

ColorChipComponent.displayName = 'ColorChipComponent';

// Uncomment properties you need
// ColorChipComponent.propTypes = {};
// ColorChipComponent.defaultProps = {};

export default ColorChipComponent;
