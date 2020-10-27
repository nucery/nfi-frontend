import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './index.module.css';

class Card3React extends React.Component {
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
              window.open(this.props.toUrl);
            } else {
              this.props.history.push(this.props.toUrl);
            }
          }
        }}
      >
        <img alt="" src={this.props.imageUrl} style={{ borderRadius: 8, marginBottom: 18, marginTop: 26, marginLeft: 24, width: 52 }} />
        <div className={classes['container-bottom']}>
          <div className={classes['container-title']}>
            <span className={classes['text-title']}>
              {this.props.title}
            </span>
          </div>
          <div className={classes['container-text']}>
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

export const Card3 = withRouter(Card3React);
