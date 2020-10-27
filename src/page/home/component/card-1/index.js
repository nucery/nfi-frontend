import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

import { isWindows } from '../../../../utils/is';
import classes from './index.module.css';

const Card1React = (props) => {
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
      <div className={classes['container-left']}>
        <img alt="" src={props.imageUrl} style={{ width: 42 }} />
      </div>
      <div
        className={classes['container-right']}
        style={{
          marginTop: isWindows ? 18 : 22,
        }}
      >
        <div className={classes['container-title']}>
          <span className={classes['text-title']}>
            {props.title}
          </span>
        </div>
        <div>
          <span className={classes['text-body']}>
            {props.body}
          </span>
        </div>
      </div>
    </div>
  );
};

Card1React.propTypes = {
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

export const Card1 = withRouter(Card1React);
