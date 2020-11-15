import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { isWindows } from '../../utils/is';
import { i18n } from '../i18n';
import classes from './index.module.css';

const twitterUrl = '';
const instagramUrl = '';
const facebookUrl = '';
const linkedinUrl = '';

const FooterReact = (props) => {
  const text = i18n(props.language).generalComponent.footer.index;
  return (
    <div className={classes.container}>
      <div
        className={classes['container-band']}
        onClick={() => {
          if (props.location.pathname !== '/home') {
            props.history.push('/home');
          }
        }}
        style={{ marginTop: isWindows ? 20 : 24 }}
      >
        <span className={classes['text-band']}>
          {`${process.env.REACT_APP_ENV === 'production' ? '' : '[TEST]'} ${text.left}`}
        </span>
      </div>
      <div className={classes['container-share']}>
        {
          twitterUrl.length > 0 &&
          <div
            className={classes['container-share-icon']}
            onClick={() => {
              window.open(twitterUrl);
            }}
          >
            <img alt="" src={`${process.env.PUBLIC_URL}/static/image/twitter-2x.png`} style={{ height: 18 }} />
          </div>
        }
        {
          instagramUrl.length > 0 &&
          <div
            className={classes['container-share-icon']}
            onClick={() => {
              window.open(instagramUrl);
            }}
          >
            <img alt="" src={`${process.env.PUBLIC_URL}/static/image/instagram-2x.png`} style={{ height: 18 }} />
          </div>
        }
        {
          facebookUrl.length > 0 &&
          <div
            className={classes['container-share-icon']}
            onClick={() => {
              window.open(facebookUrl);
            }}
          >
            <img alt="" src={`${process.env.PUBLIC_URL}/static/image/facebook-2x.png`} style={{ height: 18 }} />
          </div>
        }
        {
          linkedinUrl.length > 0 &&
          <div
            className={classes['container-share-icon']}
            onClick={() => {
              window.open(linkedinUrl);
            }}
          >
            <img alt="" src={`${process.env.PUBLIC_URL}/static/image/linkedin-2x.png`} style={{ height: 18 }} />
          </div>
        }
      </div>
      <div className={classes['container-author']}>
        <span className={classes['text-author']}>
          {text.right}
        </span>
      </div>
    </div >
  );
};

FooterReact.propTypes = {
  // React Redux
  language: PropTypes.string.isRequired,
  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const Footer = connect(
    (state) => {
      return {
        language: state.language,
      };
    },
)(withRouter(FooterReact));
