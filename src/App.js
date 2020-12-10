import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { UseWalletProvider } from 'use-wallet';

import { FarmTokenName } from './page/farm-token-name';
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
              path="/farm/ht"
              exact
              component={(routeProps) => <FarmTokenName {...routeProps} />}
            />
            <Redirect to="/farm/ht" />
          </Switch>
        </HashRouter>
      </Provider>
    </UseWalletProvider>
  );
};
