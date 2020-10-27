import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { useWallet } from 'use-wallet';

import * as actionJs from '../../redux/action';
import { store } from '../../redux/store';
import { getViewPortSize } from '../../utils/get-view-port-size';
import { isWindows } from '../../utils/is';
import { Card } from './component/card';
import classes from './index.module.css';

const ConnectionMaskReact = (props) => {
  const { width, height } = getViewPortSize();
  const { connect, status } = useWallet();
  if (status === 'connected') {
    setTimeout(() => {
      store.dispatch(actionJs.creator(
          actionJs.type.connectionMask,
          false,
      ));
    }, 100);
  }
  return props.show ? (
    <div
      className={classes['container-outer']}
      style={{ width, height }}
    >
      <div className={classes.container}>
        <div className={classes['container-title']}>
          <span className={classes['text-title']}>
            Connect to
          </span>
        </div>
        <Card
          name={'Metamask'}
          imageUrl={process.env.PUBLIC_URL + '/static/image/meta-mask.svg'}
          onConnect={() => {
            connect('injected');
          }}
        />
        <Card
          name={'WalletConnect'}
          imageUrl={process.env.PUBLIC_URL + '/static/image/wallet-connect.svg'}
          onConnect={() => {
            connect('walletconnect');
          }}
        />
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
              Cancel
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
};

export const ConnectionMask = connect(
    (state) => {
      return {
        show: state.connectionMask,
      };
    },
)(ConnectionMaskReact);
