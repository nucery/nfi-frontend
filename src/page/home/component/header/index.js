import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './index.module.css';

const HeaderReact = (props) => {
  return (
    <div className={classes.container} >
      <div className={classes['container-left']}>
        <div className={classes['container-band']} >
          <span className={classes['text-band']}>
              One-Stop Crypto Bank
          </span>
        </div>
        <div className={classes['container-link-group']}>
          <div className={classes['container-link']}>
            <span className={classes['text-link']}>
                |
            </span>
          </div>
          <div className={classes['container-link']} >
            <span className={classes['text-link']}>
                HOME
            </span>
          </div>
          <div
            className={classes['container-link']}
            onClick={() => {
              props.history.push('/farm');
            }}
          >
            <span className={classes['text-link']}>
                FARM
            </span>
          </div>
          <div
            className={classes['container-link']}
            onClick={() => {
              props.history.push('/valut');
            }}
          >
            <span className={classes['text-link']}>
                VALUT
            </span>
          </div>
          <div
            className={classes['container-link']}
            onClick={() => {
              props.history.push('/lend');
            }}
          >
            <span className={classes['text-link']}>
                LEND
            </span>
          </div>
          <div
            className={classes['container-link']}
            onClick={() => {
              props.history.push('/faq');
            }}
          >
            <span className={classes['text-link']}>
                FAQ
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

HeaderReact.propTypes = {
  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const Header = withRouter(HeaderReact);