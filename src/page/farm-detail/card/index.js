import PropTypes from 'prop-types';
import React from 'react';

import classes from './index.module.css';

class CardReact extends React.Component {
  constructor(props) {
    super(props);
    // state
    this.state = {
      input: '',
    };
  }

  render() {
    return (
      <div className={classes.container}>
        <div className={classes['container-title']}>
          <span className={classes['text-title']}>
            Add Liquidity
          </span>
        </div>
        <div className={classes['container-line-group']}>
          <div className={classes['container-line']}>
            <div>
              <span className={classes['text-detail-title']}>
                Total Deposited
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
                Farm APY
              </span>
            </div>
            <div>
              <span className={classes['text-detail-data']}>
                {`50 %`}
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
                {`Balance: 100,0000`}
              </span>
            </div>
          </div>
          <div className={classes['container-input-line-2']}>
            <div>
              <input
                className={classes['input']}
                maxLength="20"
                onChange={(event) => {
                  this.setState({ input: event.target.value });
                }}
                type="text"
                value={this.state.input}

              />
            </div>
            <div className={classes['container-unit']}>
              <span className={classes['text-unit']}>
                NUC
              </span>
            </div>
          </div>
        </div>
        <div className={classes['container-button']}>
          <div className={classes['container-button-inner']}>
            <span className={classes['text-button']}>
              Deposit
            </span>
          </div>
        </div>
      </div>
    );
  }
}

CardReact.propTypes = {
  // self
  id: PropTypes.string.isRequired,
};

export const Card = CardReact;
