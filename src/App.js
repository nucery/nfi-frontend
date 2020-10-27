import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { UseWalletProvider } from 'use-wallet';

import { Farm } from './page/farm';
import { FarmDetail } from './page/farm-detail';
import { Faq } from './page/faq';
import { Home } from './page/home';
import { Lend } from './page/lend';
import { Valut } from './page/valut';
import { store } from './redux/store';

export class App extends React.Component {
  render() {
    return (
      <UseWalletProvider
        chainId={
          process.env.NODE_ENV === 'production' ?
            1 /* yarn build => Ethereum Mainnet */ :
            3 /* yarn start => Ethereum Testnet Ropsten */
        }
        connectors={{
          walletconnect: { rpcUrl: 'https://mainnet.eth.aragon.network/' },
        }}
      >
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
              <Route
                path="/farm/:id"
                exact
                component={(routeProps) => <FarmDetail {...routeProps} />}
              />
              <Route
                path="/valut"
                exact
                component={(routeProps) => <Valut {...routeProps} />}
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
          </BrowserRouter>
        </Provider>
      </UseWalletProvider>
    );
  }
}
