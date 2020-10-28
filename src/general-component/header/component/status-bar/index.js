import React, {useEffect, useState} from 'react';
import { useWallet } from 'use-wallet';

import * as actionJs from '../../../../redux/action';
import { store } from '../../../../redux/store';
import { isWindows } from '../../../../utils/is';
import classes from './index.module.css';
import {stakePool, getBalance} from "../../../../nfi/send";


const StatusBarReact = () => {
  const { account, chainId, networkName, reset, status } = useWallet();
  let [ba, setBa] = useState(0)

  useEffect(() => {
    if (account) {
      getBalance("nux", account).then(result => {
        console.log(result)
        setBa(result)
      })
    }
    }, [account])
  //
  // let balance = 0; 
  // if (account) {
  //   getBalance("nux", account).then(result => {
  //     console.log(result)
  //     balance = result
  //   })
  // }

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
                {`${account}${chainId === 1 ? '' : ` @ ${networkName + ba}`}`}
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
            store.dispatch(actionJs.creator(
                actionJs.type.connectionMask,
                true,
            ));
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
