'use strict';

import React from 'react';
import { encode, decode } from '../../lib/encode'
import {connect} from 'react-redux'
import { addState } from '../actions'

require('styles//ImportPage.css');

class ImportPageComponent extends React.Component {
  render() {
    const data = Object.assign({}, decode(this.props.params.url));
    return (
      <div className='mdl-cell mdl-cell--12-col'>
      <div className="mdl-grid">
      <div className='mdl-cell mdl-cell--8-col'>
        <h1>Ready to import {data.name}?</h1>
      </div>
      <div className='mdl-cell mdl-cell--4-col button-box'>
        <button
          onClick={() => this.props.dispatch(addState(data))}
          className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
          Import Style
        </button>
      </div>
      </div>

      <div className="mdl-grid">
        <div className='mdl-cell mdl-cell--6-col'>
          <strong>Header Font Family</strong>
          <p>{data.fontFamilies.headers}</p>
          <strong>Body Font Family</strong>
          <p>{data.fontFamilies.body}</p>
        </div>
        <div className='mdl-cell mdl-cell--6-col'>
        <strong>Style Name</strong>
          <p>{data.name}</p>
        </div>
      </div>

        <div className='mdl-grid'>

          <div className='mdl-cell mdl-cell--6-col'>
            <p><strong>Foreground Colors</strong></p>
            {data.colors.foreground.map((color, index) => {
              const rgb = `${color.rgb[0]}, ${color.rgb[1]}, ${color.rgb[2]}`
              const colorAverage = (color.rgb.reduce((prev, next) => { return prev + next }, 0) / color.rgb.length)
              const textColor = colorAverage > 100 ? 'black' : 'white';
              return (
                <span
                  style={{
                    backgroundColor: `rgb(${rgb})`,
                    color: textColor
                  }}
                  key={index}
                  className="mdl-chip"
                >
                  <span className="mdl-chip__text">{rgb}</span>
                </span>
                )}
              )
            }
          </div>
          <div className='mdl-cell mdl-cell--6-col'>
            <p><strong>Background Colors</strong></p>
            {data.colors.background.map((color, index) => {
              const rgb = `${color.rgb[0]}, ${color.rgb[1]}, ${color.rgb[2]}`
              const colorAverage = (color.rgb.reduce((prev, next) => { return prev + next }, 0) / color.rgb.length)
              const textColor = colorAverage > 100 ? 'black' : 'white';
              return (
                <span
                  style={{
                    backgroundColor: `rgb(${rgb})`,
                    color: textColor
                  }}
                  key={index}
                  className="mdl-chip"
                >
                  <span className="mdl-chip__text">{rgb}</span>
                </span>
                )})
            }
          </div>
      </div>
      <div className="mdl-grid">
      {['Large', 'Medium', 'Small'].map((label, index) => (
      <div className='mdl-cell mdl-cell--4-col' key={index}>
      <h3>{label} Sizes</h3>
      <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
        <thead>
          <tr>
            <th className="mdl-data-table__cell--non-numeric">Element</th>
            <th className="mdl-data-table__cell--non-numeric">Font Size</th>
            <th className="mdl-data-table__cell--non-numeric">Line Height</th>
          </tr>
        </thead>
        <tbody>
        {data.responsiveType[label.toLowerCase()].map((data, index) => (
          <tr key={index}>
            <td className="mdl-data-table__cell--non-numeric">{data.name}</td>
            <td className="mdl-data-table__cell--non-numeric">{data.size} rem</td>
            <td className="mdl-data-table__cell--non-numeric">{data.lineHeight} em</td>
          </tr>
          ))}
        </tbody>
      </table>
      </div>
        ))}
      </div>
      </div>

    );
  }
}

ImportPageComponent.displayName = 'ImportPageComponent';

const mapStateToProps = (state) => {
  return {...state}
}

const ConnectedImportPageComponent = connect(
  mapStateToProps
  // mapDispatchToProps
)(ImportPageComponent)

// Uncomment properties you need
// ImportPageComponent.propTypes = {};
// ImportPageComponent.defaultProps = {};

export default ConnectedImportPageComponent;
