import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import * as actionJs from '../../../../../../redux/action';
import { store } from '../../../../../../redux/store';
import { isWindows } from '../../../../../../utils/is';
import { i18n } from '../../../../../../general-component/i18n';
import classes from './index.module.css';

const StatusBarReact = (props) => {
  const text = i18n(props.language).generalComponent.header.component.statusBar.index;
  return (
    <div className={classes.container}>
      <div
        className={classes['container-language-selector']}
        onClick={() => {
          store.dispatch(actionJs.creator(
              actionJs.type.language,
              props.language === 'en'? 'zh-Hans' : 'en',
          ));
        }}
      >
        <div
          className={classes['container-inner-button']}
          style={{
            marginTop: isWindows ? 6 : 8,
          }}
        >
          <span className={classes['text-button']}>
            {text.language}
          </span>
        </div>
      </div>
    </div>
  );
};

StatusBarReact.propTypes = {
  // React Redux
  language: PropTypes.string.isRequired,
};

export const StatusBar = connect(
    (state) => {
      return {
        language: state.language,
      };
    },
)(StatusBarReact);
