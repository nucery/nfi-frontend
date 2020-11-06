import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

import { StatusBar } from './component/status-bar';
import classes from './index.module.css';

const HeaderReact = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes['container-left']}>
        <div
          className={classes['container-band']}
          onClick={() => {
            props.history.push('/home');
          }}
        >
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
          <div
            className={classes['container-link']}
            onClick={() => {
              window.open('https://nucery.github.io/#/home', '_self');
            }}
          >
            <span className={classes['text-link']}>
              HOME
            </span>
          </div>
          <div
            className={classes['container-link']}
            onClick={() => {
              // if (props.location.pathname !== '/farm') {
              //   props.history.push('/farm');
              // }
              window.open('https://nucery.github.io/#/farm', '_self');
            }}
          >
            <span
              className={classes['text-link']}
              style={{ color: props.location.pathname.startsWith('/farm') ? '#0063FF' : '#FFFFFF' }}
            >
              FARM
            </span>
          </div>
          <div
            className={classes['container-link']}
            onClick={() => {
              // if (props.location.pathname !== '/valut') {
              //   props.history.push('/valut');
              // }
              window.open('https://nucery.github.io/#/valut', '_self');
            }}
          >
            <span
              className={classes['text-link']}
              style={{ color: props.location.pathname.startsWith('/valut') ? '#0063FF' : '#FFFFFF' }}
            >
              VALUT
            </span>
          </div>
          <div
            className={classes['container-link']}
            onClick={() => {
              // if (props.location.pathname !== '/lend') {
              //   props.history.push('/lend');
              // }
              window.open('https://nucery.github.io/#/lend', '_self');
            }}
          >
            <span
              className={classes['text-link']}
              style={{ color: props.location.pathname.startsWith('/lend') ? '#0063FF' : '#FFFFFF' }}
            >
              LEND
            </span>
          </div>
          <div
            className={classes['container-link']}
            onClick={() => {
              // if (props.location.pathname !== '/faq') {
              //   props.history.push('/faq');
              // }
              window.open('https://nucery.github.io/#/faq', '_self');
            }}
          >
            <span
              className={classes['text-link']}
              style={{ color: props.location.pathname.startsWith('/faq') ? '#0063FF' : '#FFFFFF' }}
            >
              FAQ
            </span>
          </div>
        </div>
      </div>
      <StatusBar />
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
