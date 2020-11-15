import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { getViewPortSize } from '../../../../utils/get-view-port-size';
import classes from './index.module.css';
import { Card } from './component/card';

const DepositWithdrawMaskReact = (props) => {
  const { width, height } = getViewPortSize();

  return props.show ? (
    <div
      className={classes['container-outer']}
      style={{ width, height }}
    >
      <Card tokenName={props.tokenName} />
    </div>
  ) : null;
};

DepositWithdrawMaskReact.propTypes = {
  // React Redux
  show: PropTypes.bool.isRequired,
  // self
  tokenName: PropTypes.string.isRequired,
};

export const DepositWithdrawMask = connect(
    (state) => {
      return {
        show: state.depositWithdrawMask,
      };
    },
)(DepositWithdrawMaskReact);

