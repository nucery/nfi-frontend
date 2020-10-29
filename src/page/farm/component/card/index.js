import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

import { isWindows } from '../../../../utils/is';
import classes from './index.module.css';

// TODO
const dataList = {
  nuc: {
    getTotalDeposit: () => {
      return `1`;
    },
    getPoolRate: () => {
      return `2 NFI / Week`;
    },
  },
  nux: {
    getTotalDeposit: () => {
      return `3`;
    },
    getPoolRate: () => {
      return `4 NFI / Week`;
    },
  },
  eth: {
    getTotalDeposit: () => {
      return `5`;
    },
    getPoolRate: () => {
      return `6 NFI / Week`;
    },
  },
  usdt: {
    getTotalDeposit: () => {
      return `7`;
    },
    getPoolRate: () => {
      return `8 NFI / Week`;
    },
  },
  uni: {
    getTotalDeposit: () => {
      return 9;
    },
    getPoolRate: () => {
      return `10 NFI / Week`;
    },
  },
};

const CardReact = (props) => {
  const data = dataList[`${props.path}`];
  return (
    <div className={classes.container}>
      <div className={classes['container-top']}>
        <div className={classes['container-title']}>
          <span className={classes['text-title']}>
            {props.title}
          </span>
        </div>
        {
          data ? (
            <div
              className={classes['container-button']}
              onClick={() => {
                props.history.push(`/farm/${props.path}`);
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
              {`${data ? (typeof data.getTotalDeposit === 'function' ? data.getTotalDeposit() : '(Not Available)') : '(Not Available)'}`}
            </span>
          </div>
        </div>
        <div className={classes['container-line']}>
          <div>
            <span className={classes['text-detail-title']}>
              Pool getPoolRate
            </span>
          </div>
          <div>
            <span className={classes['text-detail-data']}>
              {`${data ? (typeof data.getPoolRate === 'function' ? data.getPoolRate() : '(Not Available)') : '(Not Available)'}`}
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
  path: PropTypes.string.isRequired,
};

export const Card = withRouter(CardReact);
