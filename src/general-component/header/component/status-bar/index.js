import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { useWallet } from 'use-wallet';

import * as actionJs from '../../../../redux/action';
import { store } from '../../../../redux/store';
import { chain } from '../../../../contract/common';
import { isWindows } from '../../../../utils/is';
import { pop } from '../../../connection-mask';
import { i18n } from '../../../i18n';
import classes from './index.module.css';

const StatusBarReact = (props) => {
  const { account, chainId, reset, status } = useWallet();
  const text = i18n(props.language).generalComponent.header.component.statusBar.index;
  return (
    <div className={classes.container}>
      {
        status === 'connected' && (
          <div className={classes['container-account']}>
            <div
              className={classes['container-inner-account']}
              style={{
                marginTop: isWindows ? 6 : 8,
              }}
            >
              <span className={classes['text-account']}>
                {`${account}${chainId === 1 ? '' : ` @ ${chain.networkName}`}`}
              </span>
            </div>
          </div>
        )
      }
      <div
        className={classes['container-button']}
        onClick={() => {
          if (status === 'connected') {
            reset();
          } else {
            pop();
          }
        }}
      >
        <div
          className={classes['container-inner-button']}
          style={{
            marginTop: isWindows ? 6 : 8,
          }}
        >
          <span className={classes['text-button']}>
            {status === 'connected' ? text.disconnectWallet : text.connectWallet}
          </span>
        </div>
      </div>
      <div
        className={classes['container-language-selector']}
        onClick={() => {
          store.dispatch(actionJs.creator(
              actionJs.type.language,
              props.language === 'en'? 'zh-Hans' : 'en',
          ));
        }}
      >
        <div
          className={classes['container-inner-button']}
          style={{
            marginTop: isWindows ? 6 : 8,
          }}
        >
          <span className={classes['text-button']}>
            {text.language}
          </span>
        </div>
      </div>
    </div>
  );
};

StatusBarReact.propTypes = {
  // React Redux
  language: PropTypes.string.isRequired,
};

export const StatusBar = connect(
    (state) => {
      return {
        language: state.language,
      };
    },
)(StatusBarReact);
