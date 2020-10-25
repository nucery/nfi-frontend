import PropTypes from 'prop-types';
import React from 'react';

import classes from './index.module.css';

class Card1React extends React.Component {
  constructor(props) {
    super(props);
    // state
    this.state = {};
  }

  render() {
    return (
      <div className={classes.container}>
        <div className={classes['container-left']}>
          <img alt="" src={this.props.imageUrl} style={{ width: 42 }} />
        </div>
        <div className={classes['container-right']}>
          <div className={classes['container-title']}>
            <span className={classes['text-title']}>
              {this.props.title}
            </span>
          </div>
          <div>
            <span className={classes['text-body']}>
              {this.props.body}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

Card1React.propTypes = {
  // self
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  toUrl: PropTypes.string.isRequired,
};

export const Card1 = Card1React;
