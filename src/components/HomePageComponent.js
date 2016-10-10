'use strict';

import React from 'react';

import HeaderComponent from './HeaderComponent';

require('styles//HomePage.css');

class HomePageComponent extends React.Component {
  constructor(props) {
	super(props);
  }

  render() {
    return (
      <HeaderComponent>
        {this.props.children}
      </HeaderComponent>
    );
  }
}

HomePageComponent.displayName = 'HomePageComponent';

// Uncomment properties you need
// HomePageComponent.propTypes = {};
// HomePageComponent.defaultProps = {};

export default HomePageComponent;
