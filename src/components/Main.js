require('normalize.css/normalize.css');
require('styles//App.css');

import React from 'react';

import TypoPageComponent from './TypoPageComponent';
import DummyTextComponent from './DummyTextComponent';
import ColorPageComponent from './ColorPageComponent';
import HomePageComponent from './HomePageComponent';
import ImportPageComponent from './ImportPageComponent';

import { Router, Route, browserHistory, IndexRoute } from 'react-router'

class AppComponent extends React.Component {

  render() {

    return (
   	<Router history={browserHistory}>
    	<Route path="/" component={HomePageComponent}>
    		<IndexRoute component={TypoPageComponent} />
      		<Route path="typography" component={TypoPageComponent} />
          <Route path="dummy-text" component={DummyTextComponent} />
      		<Route path="color" component={ColorPageComponent} />
          <Route path="import(/:url)" component={ImportPageComponent} />
    	</Route>
  	</Router>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
