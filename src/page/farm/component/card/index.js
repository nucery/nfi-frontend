import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { address } from '../../../../contract/common';
import * as erc20 from '../../../../contract/helper/erc20';
import * as pool from '../../../../contract/helper/pool';
import { isWindows } from '../../../../utils/is';
import classes from './index.module.css';

const CardReact = (props) => {
  const [totalDeposit, setTotalDeposit] = useState('');
  const [poolRate, setPoolRate] = useState('');
  useEffect(() => {
    if (address[props.tokenName]) {
      erc20.getTotalBalance(props.tokenName).then((result) => {
        setTotalDeposit(result);
      });
    } else {
      setTotalDeposit('(Not Available)');
    }
  }, [totalDeposit]);
  useEffect(() => {
    if (address[props.tokenName]) {
      pool.getRewardRate(props.tokenName).then((result) => {
        setPoolRate(`${result} NFI / Week`);
      });
    } else {
      setPoolRate('(Not Available)');
    }
  }, [poolRate]);
  return (
    <div className={classes.container}>
      <div className={classes['container-top']}>
        <div className={classes['container-title']}>
          <span className={classes['text-title']}>
            {props.title}
          </span>
        </div>
        {
          address[props.tokenName] ? (
            <div
              className={classes['container-button']}
              onClick={() => {
                props.history.push(`/farm/${props.tokenName}`);
              }}
            >
              <div
                className={classes['container-button-inner']}
                style={{
                  marginTop: isWindows ? 3 : 5,
                }}
              >
                <span className={classes['text-button']}>
                  Deposit
                </span>
              </div>
            </div>
          ) : (
              <div className={classes['container-button-disabled']}>
                <div
                  className={classes['container-button-inner']}
                  style={{
                    marginTop: isWindows ? 3 : 5,
                  }}
                >
                  <span className={classes['text-button']}>
                    Not Available
                  </span>
                </div>
              </div>
            )
        }
      </div>
      <div className={classes['container-bottom']}>
        <div className={classes['container-line']}>
          <div>
            <span className={classes['text-detail-title']}>
              Total Deposit
            </span>
          </div>
          <div>
            <span className={classes['text-detail-data']}>
              {totalDeposit}
            </span>
          </div>
        </div>
        <div className={classes['container-line']}>
          <div>
            <span className={classes['text-detail-title']}>
              Pool Rate
            </span>
          </div>
          <div>
            <span className={classes['text-detail-data']}>
              {poolRate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

CardReact.propTypes = {
  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  // self
  title: PropTypes.string.isRequired,
  tokenName: PropTypes.string.isRequired,
};

export const Card = withRouter(CardReact);
