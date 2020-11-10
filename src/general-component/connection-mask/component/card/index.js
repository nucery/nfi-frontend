import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { isWindows } from '../../../../utils/is';
import { i18n } from '../../../i18n';
import classes from './index.module.css';

const CardReact = (props) => {
  const text = i18n(props.language).generalComponent.connectorMask.component.card.index;
  return (
    <div className={classes.container}>
      <div className={classes['container-left']}>
        <img alt="" src={props.imageUrl} style={{ height: 36, marginLeft: 24 }} />
        <div className={classes['container-name']}>
          <span className={classes['text-name']}>
            {props.name}
          </span>
        </div>
      </div>
      <div className={classes['container-right']}>
        <div
          className={classes['container-button']}
          onClick={props.onConnect}
        >
          <div
            className={classes['container-button-inner']}
            style={{
              marginTop: isWindows ? 6 : 8,
            }}
          >
            <span className={classes['text-button']}>
              {text.connect}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

CardReact.propTypes = {
  // React Redux
  language: PropTypes.string.isRequired,
  // self
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onConnect: PropTypes.func.isRequired,
};


export const Card = connect(
    (state) => {
      return {
        language: state.language,
      };
    },
)(CardReact);
