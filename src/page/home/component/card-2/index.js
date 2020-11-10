import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { i18n } from '../../../../general-component/i18n';
import { isWindows } from '../../../../utils/is';
import classes from './index.module.css';

const Card2React = (props) => {
  const text = i18n(props.language).page.home.component.card2.index;
  return (
    <div className={classes.container}>
      <div className={classes['container-left']}>
        <div>
          <div
            className={classes['container-title']}
            style={{
              marginBottom: isWindows ? 4 : 12,
            }}
          >
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
        {
          props.buttonUrl.length > 0 ?
            <div
              className={classes['container-button']}
              onClick={() => {
                if (props.buttonUrl.length > 0) {
                  if (props.buttonUrl.startsWith('http://') || props.buttonUrl.startsWith('https://')) {
                    window.open(props.buttonUrl);
                  } else {
                    props.history.push(props.buttonUrl);
                  }
                }
              }}
            >
              <div className={classes['container-button-inner']}>
                <span className={classes['text-button']}>
                  {text.startNow}
                </span>
              </div>
            </div> :
            <div className={classes['container-button-disabled']}>
              <div className={classes['container-button-inner']}>
                <span className={classes['text-button']}>
                  {text.commingSoon}
                </span>
              </div>
            </div>
        }
      </div>
      <div className={classes['container-right']}>
        <img alt="" src={props.imageUrl} style={{ borderRadius: 14, width: 324 }} />
      </div>
    </div>
  );
};

Card2React.propTypes = {
  // React Redux
  language: PropTypes.string.isRequired,
  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  // self
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
};

export const Card2 = connect(
    (state) => {
      return {
        language: state.language,
      };
    },
)(withRouter(Card2React));
