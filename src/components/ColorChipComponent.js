'use strict';

import React from 'react';

require('styles//ColorChip.css');

import WCAG from './WcagComponent'

var Color = require('color');

class ColorChipComponent extends React.Component {
  
  constructor(props) {
  	super(props)
    this.state = this.props
    this.handleChange = this.handleChange.bind(this)
  }

handleChange(e) {
  e.preventDefault()
  let newRgb = [...this.state.rgb]
  newRgb[e.target.id] = parseInt(e.target.value);
  
  this.setState({
    rgb: [...newRgb]
  })
  

}

  render() {

  	let {hex, rgb, cmyk, rgba} = this.state

    hex,rgb,cmyk,rgba
  	
  	let color = Color().rgb(rgb)
    let [r,g,b] = color.values.rgb

    const backgroundColor = {
      background: color.rgbString(),
      color: color.light() ? 'black' : 'white'
    }

    const textStyle = {
      color: color.rgbString()
    }

    return (
      <tbody>
        <tr>
          <td colSpan='2' className='mdl-data-table__cell--non-numeric'>
          <span className='mdl-chip' style={backgroundColor}>
            <span className='mdl-chip__text'>{color.rgbString()}</span>
          </span>
          
          </td>
          <td className='mdl-data-table__cell--non-numeric' style={textStyle}>
          {color.hexString()}
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
        </tr>
        <tr>
          <td colSpan={this.props.background.length+4}>
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
