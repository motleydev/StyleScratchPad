'use strict';

import React from 'react';

import { Link } from 'react-router'


require('styles//Header.css');

class HeaderComponent extends React.Component {

	constructor(props) {
		super(props);
	}

  render() {
    return (
      <div className="demo-layout-waterfall mdl-layout mdl-js-layout">
  <header className="mdl-layout__header mdl-layout__header--waterfall">
    
    <div className="mdl-layout__header-row">
    
      <span className="mdl-layout-title">Title</span>
      <div className="mdl-layout-spacer"></div>
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                  mdl-textfield--floating-label mdl-textfield--align-right">
        <label className="mdl-button mdl-js-button mdl-button--icon"
               htmlFor="waterfall-exp">
          <i className="material-icons">search</i>
        </label>
        <div className="mdl-textfield__expandable-holder">
          <input className="mdl-textfield__input" type="text" name="sample"
                 id="waterfall-exp" />
        </div>
      </div>
    </div>
    
    <div className="mdl-layout__header-row">
      <div className="mdl-layout-spacer"></div>
    
      <nav className="mdl-navigation">
      	<Link className="mdl-navigation__link" to="/typography">Typography</Link>
        <Link className="mdl-navigation__link" to="/color">Color</Link>
        <a className="mdl-navigation__link" href="">Link</a>
        <a className="mdl-navigation__link" href="">Link</a>
      </nav>
    </div>
  </header>
  <div className="mdl-layout__drawer">
    <span className="mdl-layout-title">Title</span>
    <nav className="mdl-navigation">
      <a className="mdl-navigation__link" href="">Link</a>
      <a className="mdl-navigation__link" href="">Link</a>
      <a className="mdl-navigation__link" href="">Link</a>
      <a className="mdl-navigation__link" href="">Link</a>
    </nav>
  </div>
  <main className="mdl-layout__content">
    <div className="page-content">

        {this.props.children}
     </div>
  </main>
	</div>
    );
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
