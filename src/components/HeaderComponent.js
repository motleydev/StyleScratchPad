'use strict';

import React from 'react';
import {connect} from 'react-redux'
import {
  addState,
  updateState,
  updateStateName,
  removeState,
  updateCurrentState,
  replaceTypeSettings,
  replaceColorSettings,
  hydrateState,
  replaceFontFamilies } from '../actions'
import { Link } from 'react-router'
import StyleList from './StyleListComponent'
import { loadState } from '../../lib/loadState'

import moment from 'moment'
// import TypeController from './TypeControllerComponent'

import uuid from 'uuid'
const date = moment().format('DD/MM/YY h:mm a')
const sessionId = uuid.v4()

require('styles//Header.css');

class HeaderComponent extends React.Component {

	constructor(props) {
		super(props);
    this.saveState = this.saveState.bind(this)
    this.saveNew = this.saveNew.bind(this)
    this.updateState = this.updateState.bind(this)
    this.removeState = this.removeState.bind(this)
    this.updateName = this.updateName.bind(this)
	}

  componentDidMount() {
    const { allStates, activeState } = this.props
    const hydratedState = loadState()

    if (hydratedState) {
      this.props.dispatch(hydrateState(hydratedState))
    }

    const active = allStates.length > 0 ? allStates.length - 1 : 0
    this.props.dispatch(updateCurrentState(active))
  }

  updateState(index, styles) {

     const replaceState = () => {
      return dispatch => {
        dispatch(replaceTypeSettings(styles.responsiveType))
        dispatch(replaceColorSettings(styles.colors))
        dispatch(replaceFontFamilies(styles.fontFamilies))
        dispatch(updateCurrentState(index))
      }
    }

    replaceState()(this.props.dispatch)
  }

  updateName(e) {
    this.props.dispatch(updateStateName(this.props.activeState, e.target.value))
  }

  removeState(index) {
    this.props.dispatch(removeState(index))
  }

  saveState(e) {
    e.preventDefault()
    const allStates = [...this.props.allStates]

    const { fontFamilies, responsiveType, colors, activeState } = this.props
    const persistedState = Object.assign(
      {name: `Style ${activeState}`, sessionId, date},
      {fontFamilies},
      {responsiveType},
      {colors},
      {activeState}
      )
    // allStates[this.props.activeState] = persistedState

    this.props.dispatch(updateState(this.props.activeState, persistedState))
  }

  saveNew(e) {
    e.preventDefault()

    const { fontFamilies, responsiveType, colors, activeState } = this.props
    const persistedState = Object.assign(
      {name: `Style ${activeState}`, sessionId, date},
      {fontFamilies},
      {responsiveType},
      {colors},
      {activeState}
      )

    const changeActiveAddNew = () => {

      const { allStates, activeState } = this.props
      return dispatch => {
        dispatch(addState(persistedState))
      }
    }

    changeActiveAddNew()(this.props.dispatch)

  }

  render() {

    const {allStates, activeState} = this.props

    return (
      <div className="demo-layout-waterfall mdl-layout mdl-js-layout">
  <header className="mdl-layout__header mdl-layout__header--waterfall">

    <div className="mdl-layout__header-row">

      <span className="mdl-layout-title">Smart Styler</span>
      {this.props.allStates.length > 0 && <a href="/" onClick={this.saveState}>
        Save Changes
      </a>}
      <a href="/" onClick={this.saveNew}>
        Save New
      </a>
      <div className="mdl-layout-spacer"></div>
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                  mdl-textfield--floating-label mdl-textfield--align-right">

        <div className="mdl-textfield__expandable-holder">
          <input className="mdl-textfield__input" type="text" name="sample"
                 id="waterfall-exp" />
        </div>
      </div>
    </div>

    <div className="mdl-layout__header-row">
      <div className="mdl-layout-spacer"></div>

      <nav className="mdl-navigation">
        {allStates[activeState] && <div className="mdl-textfield mdl-js-textfield">
          <input
            className="mdl-textfield__input"
            type="text"
            onChange={this.updateName}
            value={allStates[activeState].name} />
          <label className="mdl-textfield__label" htmlFor="sample1">Text...</label>
        </div>}
      	<Link className="mdl-navigation__link" to="/typography">Typography</Link>
        <Link className="mdl-navigation__link" to="/dummy-text">Dummy Text</Link>
        <Link className="mdl-navigation__link" to="/color">Color</Link>
      </nav>
    </div>
  </header>
  <div className="mdl-layout__drawer">
      <span className="mdl-layout-title">Styles</span>
      <nav className="mdl-navigation">
      {allStates && <StyleList styles={allStates} updateState={this.updateState} removeState={this.removeState} />}
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
