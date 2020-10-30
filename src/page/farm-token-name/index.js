import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useWallet } from 'use-wallet';


import { address, contract, recept } from '../../contract/common';
import * as erc20 from '../../contract/helper/erc20';
import * as pool from '../../contract/helper/pool';
import { ConnectionMask, pop } from '../../general-component/connection-mask';
import { Footer } from '../../general-component/footer';
import { Header } from '../../general-component/header';
import { getCellWallWidth } from '../../utils/get-cell-wall-width';
import { removeUrlSlashSuffix } from '../../utils/remove-url-slash-suffix';
import classes from './index.module.css';

const navHight = 72;

const FarmTokenNameReact = (props) => {
  const { tokenName } = useParams();
  const [allowed, setAllowed] = useState(false);
  const [balance, setBalance] = useState('0');
  const [earned, setEarned] = useState('0');
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
    erc20.getBalance(tokenName, wallet.account).then((result) => {
      setBalance(result);
    });
  };
  useEffect(f2, [balance]);
  const f3 = () => {
    pool.getEarned(tokenName, wallet.account).then((result) => {
      setEarned(result);
    });
  };
  //
  useEffect(f3, [earned]);
  //
  if (!contract[tokenName]) {
    return (<Redirect to={'/farm'} />);
  }
  const pathname = removeUrlSlashSuffix(props.location.pathname);
  if (pathname) {
    return (<Redirect to={pathname} />);
  }
  const tokenNameUpperCase = tokenName.toUpperCase();
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
                <div className={classes['container-middle']}>
                  <div className={classes['container-amount']}>
                    <span className={classes['text-amount']}>
                      {earned}
                    </span>
                  </div>
                  <div className={classes['container-annotation']}>
                    <span className={classes['text-annotation']}>
                      NFI earned
                    </span>
                  </div>
                </div>
                <div className={classes['container-button-group']}>
                  <div
                    className={classes['container-button']}
                    onClick={() => {
                      if (!wallet.account) {
                        pop();
                        return;
                      }
                    }}
                  >
                    <div className={classes['container-button-inner']}>
                      <span className={classes['text-button']}>
                        Harvest
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.container}>
                <div className={classes['container-card-title']}>
                  <span className={classes['text-card-title']}>
                    {tokenNameUpperCase}
                  </span>
                </div>
                <div className={classes['container-middle']}>
                  <div className={classes['container-amount']}>
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
                      <div className={classes['container-button-left']}>
                        <div className={classes['container-button-inner']}>
                          <span className={classes['text-button']}>
                            Deposit
                          </span>
                        </div>
                      </div>
                      <div className={classes['container-button-right']}>
                        <div className={classes['container-button-inner']}>
                          <span className={classes['text-button']}>
                            Withdraw
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                      <div className={classes['container-button-group']}>
                        <div
                          className={classes['container-button']}
                          onClick={() => {
                            if (!wallet.account) {
                              pop();
                              return;
                            }
                            // TODO: bug of sending
                            erc20.postAllowance(tokenName, wallet.account).then((result) => {
                              console.log(result);
                              return Promise.resolve(result);
                            }).then((result) => {
                              if (!result) {
                                return Promise.resolve(null);
                              }
                              return recept(result.transactionHash);
                            }).then((result) => {
                              console.log(result);
                            });
                          }}
                        >
                          <div className={classes['container-button-inner']}>
                            <span className={classes['text-button']}>
                              Wallet Authorization
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                }
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
      <ConnectionMask />
    </div >
  );
};

FarmTokenNameReact.propTypes = {
  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const FarmTokenName = FarmTokenNameReact;
