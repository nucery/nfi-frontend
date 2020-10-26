import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './index.module.css';

class Card1React extends React.Component {
  constructor(props) {
    super(props);
    // state
    this.state = {};
  }

  render() {
    return (
      <div
        className={classes.container}
        onClick={() => {
          if (this.props.toUrl.length > 0) {
            if (this.props.toUrl.startsWith('http://') || this.props.toUrl.startsWith('https://')) {
              window.location.href = this.props.toUrl;
            } else {
              this.props.history.push(this.props.toUrl);
            }
          }
        }}
      >
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
