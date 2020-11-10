import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { i18n } from '../i18n';
import classes from './index.module.css';

const CommingSoonReact = (props) => {
  const text = i18n(props.language).generalComponent.commingSoon.index;
  return (
    <div className={classes['container-comming-soon']}>
      <span className={classes['text-comming-soon']}>
        {text.commingSoon}
      </span>
    </div>
  );
};

CommingSoonReact.propTypes = {
  // React Redux
  language: PropTypes.string.isRequired,
};

export const CommingSoon = connect(
    (state) => {
      return {
        language: state.language,
      };
    },
)(CommingSoonReact);
