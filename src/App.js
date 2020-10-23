import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Farm } from './page/farm';
import { Home } from './page/home';

import { store } from './redux/store';

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              exact
              component={() => <Redirect to="/home" />}
            />
            <Route
              path="/home"
              exact
              component={(routeProps) => <Home {...routeProps} />}
            />
            <Route
              path="/farm"
              exact
              component={(routeProps) => <Farm {...routeProps} />}
            />
            <Redirect to="/home" />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
