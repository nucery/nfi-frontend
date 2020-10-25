import PropTypes from 'prop-types';
import React from 'react';

import classes from './index.module.css';

class Card3React extends React.Component {
  constructor(props) {
    super(props);
    // state
    this.state = {};
  }

  render() {
    return (
      <div className={classes.container}>
        <img alt="" src={this.props.imageUrl} style={{ borderRadius: 8, marginBottom: 18, marginTop: 32, marginLeft: 24, width: 52 }} />
        <div className={classes['container-bottom']}>
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

Card3React.propTypes = {
  // self
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  toUrl: PropTypes.string.isRequired,
};

export const Card3 = Card3React;
