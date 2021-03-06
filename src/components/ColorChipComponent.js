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
    this.state = {
      openEdits: false,
      originalColor: ''
    }

    this.openEdits = this.openEdits.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.updateValue = this.updateValue.bind(this)
    this.darken = this.darken.bind(this)
    this.lighten = this.lighten.bind(this)
    this.reset = this.reset.bind(this)
    this.remove = this.remove.bind(this)
  }

openEdits(e){
  e.preventDefault()
  this.setState({openEdits: !this.state.openEdits})
}

handleChange(e) {
  e.preventDefault()
  let newRgb = [...this.props.text]

  newRgb[e.target.id] = parseInt(e.target.value)
  this.updateValue(newRgb, this.props.index)
}

darken(e) {
  e.preventDefault()

  let color = Color().rgb(this.props.text)

  color.darken(0.1)

  let newRgb = [ ...color.rgbArray()]
  this.updateValue(newRgb, this.props.index)
}

lighten(e) {
  e.preventDefault()

  let color = Color().rgb(this.props.text)

  color.lighten(0.1)

  let newRgb = [ ...color.rgbArray()]
  this.updateValue(newRgb, this.props.index)
}

updateValue(value, index){
    this.props.updateValue(value, index)
}

remove() {
  this.props.remove(this.props.index)
}

reset() {
  this.updateValue(this.state.originalColor.rgbArray(), this.props.index)
}

componentDidUpdate(){
    m.upgradeDom();
  }

  componentDidMount(){
    this.setState({originalColor: Color().rgb(this.props.text)})
  }

  render() {

  	let color = Color().rgb(this.props.text)
    let [r,g,b] = color.values.rgb

    const textStyle = {
      color: color.rgbString()
    }
    
    let labels = ['R','G','B']
    
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
              <table className='mdl-data-table mdl-js-data-table'><tbody>
              <tr style={{background: background.rgbString(), color: color.rgbString()}}>
                <td colSpan="4" className='mdl-data-table__cell--non-numeric'>
                <span style={{fontSize: 18.6}}>14pt Text&nbsp;</span>
                <span style={{fontSize: 24}}>18pt Text</span>
                </td>
              </tr>
              <tr>
                <td>14pt</td>
                <td>18pt</td>
                <td>
                <i id={`contrast${i}${color.hexString()}`} className="material-icons">tonality</i>
                <div className="mdl-tooltip" data-mdl-for={`contrast${i}${color.hexString()}`}>
                  Contrast
                </div>
                </td>
                <td>
                <i id={`diference${i}${color.hexString()}`} className="material-icons">invert_colors</i>
                <div className="mdl-tooltip" data-mdl-for={`diference${i}${color.hexString()}`}>
                  Color Difference
                </div>
                </td>
              </tr>
              <tr>
              { WCAG.aa(color.hexString(), background.hexString()) ?
                <td><i className='material-icons'>done</i></td> :
                <td><i className='material-icons'>report_problem</i></td> }
              { WCAG.aa_18(color.hexString(), background.hexString()) ?
                <td><i className='material-icons'>done</i></td> :
                <td><i className='material-icons'>report_problem</i></td> }
              { WCAG.hexBrightnessDifference(color.hexString(), background.hexString()) ?
                <td><i className='material-icons'>done</i></td> :
                <td><i className='material-icons'>report_problem</i></td> }
              { WCAG.hexColorDifference(color.hexString(), background.hexString()) ?
                <td><i className='material-icons'>done</i></td> :
                <td><i className='material-icons'>report_problem</i></td> }
                </tr>
                </tbody></table>
              </td>)
          })}
          <td>
            <button className="mdl-button mdl-js-button mdl-button--icon" onClick={this.openEdits}>
              <i className="material-icons">tune</i>
            </button>
            <button className="mdl-button mdl-js-button mdl-button--icon" onClick={this.remove}>
              <i className="material-icons">close</i>
            </button>
          </td>
        </tr>
        {this.state.openEdits && <tr>
          
          <td colSpan={this.props.background.length+5} className='rgb-sliders mdl-data-table__cell--non-numeric'>
          <div>
          <div className="swatches">
            <div style={{background: this.state.originalColor.rgbString(), width: 50, height: 50}}
                onClick={this.reset} />
            <div style={{background: color.rgbString(), width: 50, height: 50}} />
          </div>
            {[r,g,b].map((color, index)=>{
              return (
                <div className="inputBlock" key={index}>
                <label>{labels[index]}</label>
                <input
                  className='mdl-slider mdl-js-slider'
                  type='range'
                  min='0'
                  max='255'
                  value={color}
                  onChange={this.handleChange}
                  id={index}/>
              </div>)
            })}
            <div className="inputBlock brightnessControls">
                <button className="mdl-button mdl-js-button mdl-button--icon" onClick={this.lighten}>
                    <i className="material-icons">wb_sunny</i>
                </button>
                <button className="mdl-button mdl-js-button mdl-button--icon" onClick={this.darken}>
                    <i className="material-icons">brightness_2</i>
                </button>
            </div>
            </div>
          </td>

        </tr>}
      </tbody>
    );
  }
}

ColorChipComponent.displayName = 'ColorChipComponent';

// Uncomment properties you need
// ColorChipComponent.propTypes = {};
// ColorChipComponent.defaultProps = {};

export default ColorChipComponent;
