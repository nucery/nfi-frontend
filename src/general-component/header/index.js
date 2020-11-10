import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { url } from '../../general-component/url';
import { i18n } from '../i18n';
import { StatusBar } from './component/status-bar';
import classes from './index.module.css';

const HeaderReact = (props) => {
  const text = i18n(props.language).generalComponent.header.index;
  return (
    <div className={classes.container}>
      <div className={classes['container-left']}>
        <div
          className={classes['container-band']}
          onClick={() => {
            window.open(`${url().base}/#/home`, '_self');
          }}
        >
          <span className={classes['text-band']}>
            {text.brand}
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
              window.open(`${url().base}/#/home`, '_self');
            }}
          >
            <span className={classes['text-link']}>
              {text.home}
            </span>
          </div>
          <div
            className={classes['container-link']}
            onClick={() => {
              window.open(`${url().base}/#/farm`, '_self');
            }}
          >
            <span
              className={classes['text-link']}
              style={{ color: props.location.pathname.startsWith('/farm') ? '#0063FF' : '#FFFFFF' }}
            >
              {text.farm}
            </span>
          </div>
          <div
            className={classes['container-link']}
            onClick={() => {
              window.open(`${url().base}/#/vault`, '_self');
            }}
          >
            <span
              className={classes['text-link']}
              style={{ color: props.location.pathname.startsWith('/vault') ? '#0063FF' : '#FFFFFF' }}
            >
              {text.vault}
            </span>
          </div>
          <div
            className={classes['container-link']}
            onClick={() => {
              window.open(`${url().base}/#/lend`, '_self');
            }}
          >
            <span
              className={classes['text-link']}
              style={{ color: props.location.pathname.startsWith('/lend') ? '#0063FF' : '#FFFFFF' }}
            >
              {text.lend}
            </span>
          </div>
          <div
            className={classes['container-link']}
            onClick={() => {
              window.open(`${url().base}/#/faq`, '_self');
            }}
          >
            <span
              className={classes['text-link']}
              style={{ color: props.location.pathname.startsWith('/faq') ? '#0063FF' : '#FFFFFF' }}
            >
              {text.faq}
            </span>
          </div>
        </div>
      </div>
      <StatusBar />
    </div>
  );
};

HeaderReact.propTypes = {
  // React Redux
  language: PropTypes.string.isRequired,
  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const Header = connect(
    (state) => {
      return {
        language: state.language,
      };
    },
)(withRouter(HeaderReact));
