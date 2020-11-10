import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { UseWalletProvider } from 'use-wallet';

import { Farm } from './page/farm';
import { FarmTokenName } from './page/farm-token-name';
import { Faq } from './page/faq';
import { Home } from './page/home';
import { Lend } from './page/lend';
import { Vault } from './page/vault';
import { store } from './redux/store';

import { chain } from './contract/common';

export const App = () => {
  return (
    <UseWalletProvider
      chainId={chain.id}
      connectors={{ walletconnect: { rpcUrl: chain.rpcUrl } }}
    >
      <Provider store={store}>
        <HashRouter>
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
            <Route
              path="/farm/:tokenName"
              exact
              component={(routeProps) => <FarmTokenName {...routeProps} />}
            />
            <Route
              path="/vault"
              exact
              component={(routeProps) => <Vault {...routeProps} />}
            />
            <Route
              path="/lend"
              exact
              component={(routeProps) => <Lend {...routeProps} />}
            />
            <Route
              path="/faq"
              exact
              component={(routeProps) => <Faq {...routeProps} />}
            />
            <Redirect to="/home" />
          </Switch>
        </HashRouter>
      </Provider>
    </UseWalletProvider>
  );
};
