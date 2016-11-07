'use strict';

import React from 'react';
import Style from './StyleComponent'

var styleguideBoilerplate = require('html!../sources/styleguide.html');

require('styles//HtmlViewer.css');

class HtmlViewerComponent extends React.Component {

  constructor(props) {
    super(props);

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(e) {
    e.preventDefault();
    return;
  }

  render() {
    return (
      <div className='mdl-cell mdl-cell--8-col'>
      <Style />
      <div className='contentContainer' dangerouslySetInnerHTML={{__html: this.props.html}} />

      </div>
    );
  }
}

HtmlViewerComponent.displayName = 'HtmlViewerComponent';

// Uncomment properties you need
// HtmlViewerComponent.propTypes = {};
// HtmlViewerComponent.defaultProps = {};

export default HtmlViewerComponent;
