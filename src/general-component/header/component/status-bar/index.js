import React from 'react';
import { useWallet } from 'use-wallet';

import { chain } from '../../../../contract/common';
import { isWindows } from '../../../../utils/is';
import { pop } from '../../../connection-mask';
import classes from './index.module.css';

const StatusBarReact = () => {
  const { account, chainId, reset, status } = useWallet();
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
            {status === 'connected' ? 'Disconnect Wallet' : 'Connect Wallet'}
          </span>
        </div>
      </div>
    </div>
  );
};

export const StatusBar = StatusBarReact;
