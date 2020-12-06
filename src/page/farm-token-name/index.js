import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { useWallet } from 'use-wallet';

import { address, contract } from '../../contract/common';
import * as erc20 from '../../contract/helper/erc20';
import * as pool from '../../contract/helper/pool';
import { ConnectionMask, pop } from '../../general-component/connection-mask';
import { Footer } from '../../general-component/footer';
import { Header } from '../../general-component/header';
import { i18n } from '../../general-component/i18n';
import * as actionJs from '../../redux/action';
import { store } from '../../redux/store';
import { isWindows } from '../../utils/is';
import { getCellWallWidth } from '../../utils/get-cell-wall-width';
import { removeUrlSlashSuffix } from '../../utils/remove-url-slash-suffix';
import { trimAmount } from '../../utils/trim-amount';
import classes from './index.module.css';
import { DepositWithdrawMask } from './component/deposit-withdraw-mask';

const navHight = 72;

const FarmTokenNameReact = (props) => {
  const { tokenName } = useParams();
  //
  const [allowed, setAllowed] = useState(false);
  const [balance, setBalance] = useState('0');
  const [earned, setEarned] = useState('0');
  //
  const [authorizationStatus, setAuthorizationStatus] = useState(1); // 0 === processing; 1 === enabled
  const [depositStatus, setDepositStatus] = useState(1); // -1 === disabled; 0 === processing; 1 === enabled
  const [harvestStatus, setHarvestStatus] = useState(-1); // -1 === disabled; 0 === processing; 1 === enabled
  const [withdrawStatus, setWithdrawStatus] = useState(1); // -1 === disabled; 0 === processing; 1 === enabled
  const wallet = useWallet();
  //
  const f1 = () => {
    erc20.isAllowed(tokenName, wallet.account, address[tokenName].pool).then((result) => {
      setAllowed(result);
    });
  };
  useEffect(f1);
  //
  const f2 = () => {
    pool.getUserBalanceInPool(tokenName, wallet.account).then((result) => {
      setBalance(trimAmount(result));
      setWithdrawStatus(result === '0' ? -1 : 1);
    });
  };
  useEffect(f2);
  //
  const f3 = () => {
    if (harvestStatus === 0) {
      return;
    }

    pool.getEarned(tokenName, wallet.account).then((result) => {
      setEarned(trimAmount(result));
      setHarvestStatus(result === '0' ? -1 : 1);
    });

    const intervalId = setInterval( () => {
      pool.getEarned(tokenName, wallet.account).then((result) => {
        setEarned(trimAmount(result));
        setHarvestStatus(result === '0' ? -1 : 1);
      });
    }, 20000);
    return () => {
      clearInterval(intervalId);
    };
  };
  useEffect(f3, [harvestStatus, authorizationStatus, earned, balance]);
  //
  const f4 = () => {
    pool.getIsOpen(tokenName).then((result) => {
      setDepositStatus(result ? 1 : -1);
    });
  };
  useEffect(f4);
  //
  if (!contract[tokenName]) {
    return (<Redirect to={'/farm'} />);
  }
  const pathname = removeUrlSlashSuffix(props.location.pathname);
  if (pathname) {
    return (<Redirect to={pathname} />);
  }
  const tokenNameUpperCase = tokenName.toUpperCase();
  const text = i18n(props.language).page.farmTokenName.index;
  return (
    <div
      className="background"
      style={{ width: getCellWallWidth() }}
    >
      <div className="cell-wall nav-fixed" style={{ height: navHight, width: getCellWallWidth() }}>
        <div className="cell-membrane">
          <Header />
        </div>
      </div>
      <div className="cell-wall" style={{ height: navHight, width: getCellWallWidth() }} />
      <div className="cell-wall" style={{ width: getCellWallWidth() }}>
        <div className="cell-membrane">
          <div className="flex-column-middle">
            <div className={classes['container-outer']}>
              <div className={classes.container}>
                <div className={classes['container-card-title']}>
                  <span className={classes['text-card-title']}>
                    NFI
                  </span>
                </div>
                <div
                  className={classes['container-middle']}
                  style={{
                    marginTop: isWindows ? -10 : 24,
                  }}
                >
                  <div className={classes['container-amount']}
                    style={{
                      marginBottom: isWindows ? 2 : 16,
                    }}
                  >
                    <span className={classes['text-amount']}>
                      {earned}
                    </span>
                  </div>
                  <div className={classes['container-annotation']}>
                    <span className={classes['text-annotation']}>
                      {text.nfiEarned}
                    </span>
                  </div>
                </div>
                <div className={classes['container-button-group']}>
                  {
                    harvestStatus === 1 ? (
                      <div
                        className={classes['container-button']}
                        onClick={() => {
                          if (!wallet.account) {
                            pop();
                            return;
                          }
                          pool.postGetReward(tokenName, wallet.account).then((result) => {
                            // transaction finished
                            setHarvestStatus(-1);
                          });
                          setHarvestStatus(0);
                        }}
                      >
                        <div className={classes['container-button-inner']}>
                          <span className={classes['text-button']}>
                            {text.harvest}
                          </span>
                        </div>
                      </div>
                    ) : (
                        <div className={classes['container-button-disabled']}>
                          <div className={classes['container-button-inner']}>
                            <span className={classes['text-button']}>
                              {harvestStatus === 0 ? 'Processing ...' : 'Harvest'}
                            </span>
                          </div>
                        </div>
                      )
                  }
                </div>
              </div>
              <div className={classes.container}>
                <div className={classes['container-card-title']}>
                  <span className={classes['text-card-title']}>
                    {tokenNameUpperCase}
                  </span>
                </div>
                <div
                  className={classes['container-middle']}
                  style={{
                    marginTop: isWindows ? -10 : 24,
                  }}
                >
                  <div className={classes['container-amount']}
                    style={{
                      marginBottom: isWindows ? 2 : 16,
                    }}
                  >
                    <span className={classes['text-amount']}>
                      {balance}
                    </span>
                  </div>
                  <div className={classes['container-annotation']}>
                    <span className={classes['text-annotation']}>
                      {`${tokenNameUpperCase} stacked`}
                    </span>
                  </div>
                </div>
                {
                  allowed ? (
                    <div className={classes['container-button-group']}>
                      {
                        depositStatus === 1 ? (
                          <div
                            className={classes['container-button-left']}
                            onClick={() => {
                              store.dispatch(actionJs.creator(
                                  actionJs.type.deposit,
                                  true,
                              ));
                              setTimeout(() => {
                                store.dispatch(actionJs.creator(
                                    actionJs.type.depositWithdrawMask,
                                    true,
                                ));
                              }, 100);
                            }}
                          >
                            <div className={classes['container-button-inner']}>
                              <span className={classes['text-button']}>
                                {text.deposit}
                              </span>
                            </div>
                          </div>
                        ) : (
                            <div className={classes['container-button-left-disabled']}>
                              <div className={classes['container-button-inner']}>
                                <span className={classes['text-button']}>
                                  {text.deposit}
                                </span>
                              </div>
                            </div>
                          )
                      }
                      {
                        withdrawStatus === 1 ? (
                          <div
                            className={classes['container-button-right']}
                            onClick={() => {
                              store.dispatch(actionJs.creator(
                                  actionJs.type.deposit,
                                  false,
                              ));
                              setTimeout(() => {
                                store.dispatch(actionJs.creator(
                                    actionJs.type.depositWithdrawMask,
                                    true,
                                ));
                              }, 100);
                            }}
                          >
                            <div className={classes['container-button-inner']}>
                              <span className={classes['text-button']}>
                                {text.withdraw}
                              </span>
                            </div>
                          </div>
                        ) : (
                            <div className={classes['container-button-right-disabled']}>
                              <div className={classes['container-button-inner']}>
                                <span className={classes['text-button']}>
                                  {text.withdraw}
                                </span>
                              </div>
                            </div>
                          )
                      }
                    </div>
                  ) : (
                      <div className={classes['container-button-group']}>
                        {
                          authorizationStatus ? (
                            <div
                              className={classes['container-button']}
                              onClick={() => {
                                if (!wallet.account) {
                                  pop();
                                  return;
                                }
                                erc20.postAllowance(tokenName, wallet.account).then((result) => {
                                  // transaction finished
                                });
                                setAuthorizationStatus(0);
                              }}
                            >
                              <div className={classes['container-button-inner']}>
                                <span className={classes['text-button']}>
                                  {text.walletAuthorization}
                                </span>
                              </div>
                            </div>
                          ) : (
                              <div className={classes['container-button-disabled']}>
                                <div className={classes['container-button-inner']}>
                                  <span className={classes['text-button']}>
                                    {text.processing}
                                  </span>
                                </div>
                              </div>
                            )
                        }
                      </div>
                    )
                }
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
      <ConnectionMask tokenName={tokenName} />
      <DepositWithdrawMask tokenName={tokenName} />
    </div >
  );
};

FarmTokenNameReact.propTypes = {
  // React Redux
  language: PropTypes.string.isRequired,
  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const FarmTokenName = connect(
    (state) => {
      return {
        language: state.language,
      };
    },
)(FarmTokenNameReact);
