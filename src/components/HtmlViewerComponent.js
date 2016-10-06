"use strict";

import React from "react";

require("styles//HtmlViewer.css");

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
      <div className="htmlviewer-component">


      </div>
    );
  }
}

HtmlViewerComponent.displayName = "HtmlViewerComponent";

// Uncomment properties you need
// HtmlViewerComponent.propTypes = {};
// HtmlViewerComponent.defaultProps = {};

export default HtmlViewerComponent;
