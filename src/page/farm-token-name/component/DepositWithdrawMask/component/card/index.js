import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useWallet } from 'use-wallet';

import * as erc20 from '../../../../../../contract/helper/erc20';
import * as pool from '../../../../../../contract/helper/pool';
import * as actionJs from '../../../../../../redux/action';
import { store } from '../../../../../../redux/store';
import { trimAmount } from '../../../../../../utils/trim-amount';
import classes from './index.module.css';

const CardReact = (props) => {
  const wallet = useWallet();
  //
  const [input, setInput] = useState('');
  const [buttonStatus, setButtonStatus] = useState(-1); // -1 === disabled; 0 === processing; 1 === enabled
  //
  const [totalDeposited, setTotalDeposited] = useState('0');
  const [myDeposited, setMyDeposited] = useState('0');
  const [myDepositedAsNumber, setMyDepositedAsNumber] = useState(0);
  const [myBalance, setMyBalance] = useState('0');
  const [myBalanceAsNumber, setMyBalanceAsNumber] = useState(0);
  //
  const f2 = () => {
    erc20.getTotalBalanceOfPool(props.tokenName).then((result) => {
      setTotalDeposited(trimAmount(result));
    });
  };
  useEffect(f2);
  //
  const f3 = () => {
    pool.getUserBalanceInPool(props.tokenName, wallet.account).then((result) => {
      setMyDeposited(trimAmount(result));
      setMyDepositedAsNumber(Number(result));
    });
  };
  useEffect(f3);
  //
  const f4 = () => {
    erc20.getUserBalance(props.tokenName, wallet.account).then((result) => {
      setMyBalance(trimAmount(result));
      setMyBalanceAsNumber(Number(result));
    });
  };
  useEffect(f4);
  //
  const tokenNameUppercase = props.tokenName.toUpperCase();
  return (
    <div className={classes.container}>
      <div className={classes['container-title']}>
        <span className={classes['text-title']}>
          {props.deposit ? 'Deposit' : 'Withdraw'}
        </span>
      </div>
      <div className={classes['container-line-group']}>
        <div className={classes['container-line']}>
          <div>
            <span className={classes['text-detail-title']}>
              Farm APY
            </span>
          </div>
          <div>
            <span className={classes['text-detail-data']}>
              {`50 %`}
            </span>
          </div>
        </div>
        <div className={classes['container-line']}>
          <div>
            <span className={classes['text-detail-title']}>
              Total Deposited
            </span>
          </div>
          <div>
            <span className={classes['text-detail-data']}>
              {totalDeposited}
            </span>
          </div>
        </div>
        <div className={classes['container-line']}>
          <div>
            <span className={classes['text-detail-title']}>
              My Deposited
            </span>
          </div>
          <div>
            <span className={classes['text-detail-data']}>
              {myDeposited}
            </span>
          </div>
        </div>
      </div>
      <div className={classes['container-input']}>
        <div className={classes['container-input-line-1']}>
          <div>
            <span className={classes['text-input-line-1']}>
              Input
            </span>
          </div>
          <div>
            <span className={classes['text-input-line-1']}>
              {`My Balance: ${myBalance}`}
            </span>
          </div>
        </div>
        <div className={classes['container-input-line-2']}>
          <div>
            <input
              className={classes['input']}
              disabled={buttonStatus === 0 ? 'disabled' : ''}
              maxLength="20"
              onChange={(event) => {
                const valueAsNumber = Number(event.target.value);
                if (isNaN(valueAsNumber) || valueAsNumber < 0) {
                  return;
                }
                setInput(event.target.value);
                //
                if (valueAsNumber <= 0) {
                  setButtonStatus(-1);
                  return;
                }
                if (props.deposit) {
                  if (valueAsNumber <= myBalanceAsNumber) {
                    setButtonStatus(1);
                  } else {
                    setButtonStatus(-1);
                  }
                } else { // withdraw
                  if (valueAsNumber <= myDepositedAsNumber) {
                    setButtonStatus(1);
                  } else {
                    setButtonStatus(-1);
                  }
                }
              }}
              type="text"
              value={input}
              size="20"
            />
          </div>
          <div className={classes['container-unit']}>
            <span className={classes['text-unit']}>
              {tokenNameUppercase}
            </span>
          </div>
        </div>
      </div>
      {
        buttonStatus === 1 ? (
          <div
            className={classes['container-button']}
            onClick={() => {
              if (props.deposit) {
                pool.postStake(props.tokenName, wallet.account, input).then((result) => {
                  // transaction finished
                  store.dispatch(actionJs.creator(
                      actionJs.type.depositWithdrawMask,
                      false,
                  ));
                });
                setButtonStatus(0);
              } else { // withdraw
                pool.postWithdraw(props.tokenName, wallet.account, input).then((result) => {
                  // transaction finished
                  store.dispatch(actionJs.creator(
                      actionJs.type.depositWithdrawMask,
                      false,
                  ));
                });
                setButtonStatus(0);
              }
            }}
          >
            <div className={classes['container-button-inner']}>
              <span className={classes['text-button']}>
                {props.deposit ? 'Deposit' : 'Withdraw'}
              </span>
            </div>
          </div>
        ) : (
            <div className={classes['container-button-disabled']}>
              <div className={classes['container-button-inner']}>
                <span className={classes['text-button']}>
                  {buttonStatus === 0 ? 'Processing ...' : (props.deposit ? 'Deposit' : 'Withdraw')}
                </span>
              </div>
            </div>
          )
      }
      <div
        className={classes['container-button']}
        onClick={() => {
          store.dispatch(actionJs.creator(
              actionJs.type.depositWithdrawMask,
              false,
          ));
        }}
      >
        <div className={classes['container-button-inner']}>
          <span className={classes['text-button']}>
            Cancel
          </span>
        </div>
      </div>
    </div>
  );
};

CardReact.propTypes = {
  // React Redux
  deposit: PropTypes.bool.isRequired, // false as withdraw
  // self
  tokenName: PropTypes.string.isRequired,
};

export const Card = connect(
    (state) => {
      return {
        deposit: state.deposit,
      };
    },
)(CardReact);
