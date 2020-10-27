import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './index.module.css';

const Card3React = (props) => {
  return (
    <div
      className={classes.container}
      onClick={() => {
        if (props.toUrl.length > 0) {
          if (props.toUrl.startsWith('http://') || props.toUrl.startsWith('https://')) {
            window.open(props.toUrl);
          } else {
            props.history.push(props.toUrl);
          }
        }
      }}
    >
      <img alt="" src={props.imageUrl} style={{ borderRadius: 8, marginBottom: 18, marginTop: 26, marginLeft: 24, width: 52 }} />
      <div className={classes['container-bottom']}>
        <div className={classes['container-title']}>
          <span className={classes['text-title']}>
            {props.title}
          </span>
        </div>
        <div className={classes['container-text']}>
          <span className={classes['text-body']}>
            {props.body}
          </span>
        </div>
      </div>
    </div>
  );
};

Card3React.propTypes = {
  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  // self
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  toUrl: PropTypes.string.isRequired,
};

export const Card3 = withRouter(Card3React);
