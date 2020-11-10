import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useWallet } from 'use-wallet';

import * as actionJs from '../../redux/action';
import { store } from '../../redux/store';
import { getViewPortSize } from '../../utils/get-view-port-size';
import { isWindows } from '../../utils/is';
import { i18n } from '../i18n';
import { Card } from './component/card';
import classes from './index.module.css';

export const pop = (toUrl) => {
  store.dispatch(actionJs.creator(
      actionJs.type.connectionToUrl,
      toUrl ? toUrl : '',
  ));
  setTimeout(() => {
    store.dispatch(actionJs.creator(
        actionJs.type.connectionMask,
        true,
    ));
  }, 50);
};

const ConnectionMaskReact = (props) => {
  const { width, height } = getViewPortSize();
  const { connect, status } = useWallet();
  if (props.show && status === 'connected') {
    setTimeout(() => {
      store.dispatch(actionJs.creator(
          actionJs.type.connectionMask,
          false,
      ));
      if (props.toUrl.length > 0) {
        if (props.toUrl.startsWith('http://') || props.toUrl.startsWith('https://')) {
          window.open(props.toUrl);
        } else if (props.location.pathname !== props.toUrl) {
          props.history.push(props.toUrl);
        }
      }
    }, 100);
  }
  const text = i18n(props.language).generalComponent.connectorMask.index;
  return props.show ? (
    <div
      className={classes['container-outer']}
      style={{ width, height }}
    >
      <div className={classes.container}>
        <div className={classes['container-title']}>
          <span className={classes['text-title']}>
            {text.title}
          </span>
        </div>
        <Card
          name={'NUC Wallet'}
          // imageUrl={process.env.PUBLIC_URL + '/static/image/meta-mask.svg'}
          imageUrl={process.env.PUBLIC_URL + '/static/image/nuc-wallet-logo.svg'}
          onConnect={() => {
            connect('injected');
          }}
        />
        {/* <Card
          name={'WalletConnect'}
          imageUrl={process.env.PUBLIC_URL + '/static/image/wallet-connect.svg'}
          onConnect={() => {
            connect('walletconnect');
          }}
        /> */}
        <div
          className={classes['container-button']}
          onClick={() => {
            store.dispatch(actionJs.creator(
                actionJs.type.connectionMask,
                false,
            ));
          }}
        >
          <div
            className={classes['container-button-inner']}
            style={{
              marginTop: isWindows ? 6 : 8,
            }}
          >
            <span className={classes['text-button']}>
              {text.cancel}
            </span>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

ConnectionMaskReact.propTypes = {
  // React Redux
  show: PropTypes.bool.isRequired,
  toUrl: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const ConnectionMask = connect(
    (state) => {
      return {
        show: state.connectionMask,
        toUrl: state.connectionToUrl,
        language: state.language,
      };
    },
)(withRouter(ConnectionMaskReact));

