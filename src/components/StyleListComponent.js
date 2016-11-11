'use strict';

import React from 'react';

require('styles//StyleList.css');

class StyleListComponent extends React.Component {
	constructor(props) {
		super(props)
		this.setActiveState = this.setActiveState.bind(this)
	}

	setActiveState(){

	}	
    render() {
    	const { styles } = this.props
    	console.log(styles)
        return (
          <ul className="demo-list-two mdl-list">
          	{styles.map((style, index) => (
          		<li className="mdl-list__item mdl-list__item--two-line">
    						<span className="mdl-list__item-primary-content">
      						
      						<span>{style.name}</span>
      						<span className="mdl-list__item-sub-title">62 Episodes</span>
    						</span>
    						<span className="mdl-list__item-secondary-content">
      						<span className="mdl-list__item-secondary-info">Share</span>
      						<a className="mdl-list__item-secondary-action" href="#">
      							<i className="material-icons">reply</i>
      						</a>
    						</span>
  						</li>
          	))}
          	<li></li>
					</ul>
        );
    }
}

StyleListComponent.displayName = 'StyleListComponent';

// Uncomment properties you need
// StyleListComponent.propTypes = {};
// StyleListComponent.defaultProps = {};

export default StyleListComponent;
