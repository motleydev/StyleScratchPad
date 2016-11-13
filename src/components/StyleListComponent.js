'use strict';

import React from 'react'
import { encode, decode } from '../../lib/encode'
import copy from 'copy-to-clipboard';

require('styles//StyleList.css');

class StyleListComponent extends React.Component {
	constructor(props) {
		super(props)
		// this.setActiveState = this.setActiveState.bind(this)
	}

  shareLink(index, e) {
    e.preventDefault()
    const payload = encode(this.props.styles[index])
    const url = `${window.location.origin}/import/${payload}`
    try {
      copy(url)
    } catch(err) {
      console.log('not able to copy')
    }
  }

	setActiveState(index, e){
    e.preventDefault()
    this.props.updateState(index, this.props.styles[index])
	}

  removeState(index, e) {
    e.preventDefault()
    this.props.removeState(index)
  }

  render() {
    	const { styles } = this.props
        return (
          <ul className="demo-list-two mdl-list">
          	{styles.map((style, index) => {
              return (
                 <li key={index} className="mdl-list__item mdl-list__item--two-line">
                 <div>
                   <span className="mdl-list__item-primary-content">
                     <span>{style.name}</span>
                     <span className="mdl-list__item-sub-title">{style.date}</span>
                   </span>
                   <span className="mdl-list__item-secondary-content">
                     <span className="mdl-list__item-secondary-info">Apply Style</span>
                     <button onClick={(e) => this.setActiveState(index, e)} className="mdl-button mdl-js-button mdl-button--icon">
                        <i className="material-icons">arrow_forward</i>
                    </button>
                   </span>
                   </div>
                   <div>
                   <span className="mdl-list__item-primary-content secondary-content">
                   <span>
                     <button onClick={(e) => this.removeState(index, e)} id="delete" className="mdl-button mdl-js-button mdl-button--icon">
                        <i className="material-icons">delete</i>
                    </button>
                    </span>
                    <span>
                    <button onClick={(e) => this.shareLink(index, e)} className="mdl-button mdl-js-button">
                        <span className="mdl-list__item-sub-title">Copy Share URL</span>
                    </button>
                    </span>
                    </span>
                   </div>
                 </li>
              )})}
					</ul>
        );
    }
}

StyleListComponent.displayName = 'StyleListComponent';

// Uncomment properties you need
// StyleListComponent.propTypes = {};
// StyleListComponent.defaultProps = {};

export default StyleListComponent;
