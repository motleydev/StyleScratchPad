'use strict';

import React from 'react';

import Color from 'color'

require('styles//InlineEdit.css');

var m = require('exports?componentHandler!material-design-lite/material.js');

class InlineEditComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      editMode: false
    }

    this.toggleEdit = this.toggleEdit.bind(this)
    this.submitValue = this.submitValue.bind(this)
    this.addValue = this.addValue.bind(this)

  }

  toggleEdit(){
    this.setState({editMode: !this.state.editMode})

  }

  submitValue(e){
    e.preventDefault()

    this.toggleEdit()

    let color = Color(e.target.value).rgbArray()

    if (this.props.text) {
      this.props.updateValue(color, this.props.index)
    } else {
      this.props.addNewValue(color)
    }


  }

  addValue(e) {
    e.preventDefault()
    this.toggleEdit()
  }

  componentDidUpdate() {
    if(this.state.editMode) {
      this.colorInput.focus()
      m.upgradeDom()
    }
  }


  render() {

    let {editMode} = this.state;

    let color = Color(this.props.text)

    let backgroundColor = {
         background: color.rgbString(),
         color: color.light() ? 'black' : 'white'
     }

    return (

      <span>
        {
          !this.props.text && !this.state.editMode ?
          <button className="mdl-button mdl-js-button mdl-button--icon" onClick={this.addValue}>
            <i className="material-icons">add_box</i>
          </button> :

          !editMode ?
          this.props.pill ?
          <span className='mdl-chip' onDoubleClick={this.toggleEdit} style={backgroundColor}>
            <span className='mdl-chip__text'>{color.rgbString()}</span>
          </span> :
          <span onDoubleClick={this.toggleEdit}>{color.hexString()}</span> :
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input"
              type="text"
              id="sample1"
              onBlur={this.submitValue}
              defaultValue={this.props.text ? color.rgbString() : ''}
              style={{width: 'auto'}}
              ref={(ref) => this.colorInput = ref} />
            <label className="mdl-textfield__label" htmlFor="sample1">#hex, rgb, hsl, etc…</label>
          </div>
        }

      </span>

    );
  }
}

InlineEditComponent.displayName = 'InlineEditComponent';

// Uncomment properties you need
// InlineEditComponent.propTypes = {};
// InlineEditComponent.defaultProps = {};

export default InlineEditComponent;
