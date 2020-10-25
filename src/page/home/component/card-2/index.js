import PropTypes from 'prop-types';
import React from 'react';

import classes from './index.module.css';

class Card2React extends React.Component {
  constructor(props) {
    super(props);
    // state
    this.state = {};
  }

  render() {
    return (
      <div className={classes.container}>
        <div className={classes['container-left']}>
          <div>
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
          <div className={classes['container-button']}>
            <div className={classes['container-button-inner']}>
              <span className={classes['text-button']}>
                START NOW
              </span>
            </div>
          </div>
        </div>
        <div className={classes['container-right']}>
          <img alt="" src={this.props.imageUrl} style={{ borderRadius: 14, width: 324 }} />
        </div>
      </div>
    );
  }
}

Card2React.propTypes = {
  // self
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
};

export const Card2 = Card2React;
