'use strict';

import React from 'react';
import {connect} from 'react-redux'
import {addState} from '../actions'
import { Link } from 'react-router'
// import TypeController from './TypeControllerComponent'

import uuid from 'uuid'
const name = new Date()
const sessionId = uuid.v4()

require('styles//Header.css');

class HeaderComponent extends React.Component {

	constructor(props) {
		super(props);
    this.saveState = this.saveState.bind(this)
	}

  saveState() {

    const allStates = [...this.props.allStates]

    const { fontFamilies, responsiveType, colors } = this.props
    const persistedState = Object.assign({name, sessionId}, {fontFamilies}, {responsiveType}, {colors})
    allStates[this.props.activeState] = persistedState

    this.props.dispatch(addState(this.props.activeState, persistedState))
    try {
      const serializedState = JSON.stringify(this.props.allStates)
        localStorage.setItem('state', serializedState)
      } catch (err) {
    // mute
    }
  }

  render() {

    const {allStates} = this.props

    return (
      <div className="demo-layout-waterfall mdl-layout mdl-js-layout">
  <header className="mdl-layout__header mdl-layout__header--waterfall">

    <div className="mdl-layout__header-row">

      <span className="mdl-layout-title">Smart Styler</span><span onClick={this.saveState}>save</span>
      <div className="mdl-layout-spacer"></div>
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                  mdl-textfield--floating-label mdl-textfield--align-right">
       
       {1+1===3 && <label className="mdl-button mdl-js-button mdl-button--icon"
                      htmlFor="waterfall-exp">
                 <i className="material-icons">search</i>
               </label>}
       
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
        <Link className="mdl-navigation__link" to="/dummy-text">Dummy Text</Link>
        <Link className="mdl-navigation__link" to="/color">Color</Link>
      </nav>
    </div>
  </header>
  <div className="mdl-layout__drawer">
      <span className="mdl-layout-title">Typo</span>
      <nav className="mdl-navigation">
      {allStates && allStates.map((state, index) => {
        return (
          <div key={index}>
            <p>{state.sessionId}</p>
          </div>
          )
      })}
      </nav>
    </div>
  <main className="mdl-layout__content">
    
        {this.props.children}
     
  </main>
	</div>
    );
  }
}

HeaderComponent.displayName = 'HeaderComponent';

const mapStateToProps = (state) => {
  return {...state}
}

const ConnectedHeaderComponent = connect(
  mapStateToProps
  // mapDispatchToProps
)(HeaderComponent)

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default ConnectedHeaderComponent;
