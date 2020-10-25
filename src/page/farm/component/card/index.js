// import PropTypes from 'prop-types';
import React from 'react';

import classes from './index.module.css';

class CardReact extends React.Component {
  constructor(props) {
    super(props);
    // state
    this.state = {};
  }

  render() {
    return (
      <div className={classes.container}>
        <div className={classes['container-top']}>
          <div className={classes['container-title']}>
            <span className={classes['text-title']}>
              NUC - ETH
            </span>
          </div>
          <div className={classes['container-button']}>
            <div className={classes['container-button-inner']}>
              <span className={classes['text-button']}>
                Deposit
              </span>
            </div>
          </div>
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
                {`$ 391,312,312`}
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
                {`300,000 NFI / Week`}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CardReact.propTypes = {};

export const Card = CardReact;
