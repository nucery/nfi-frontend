import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

import { uaParser } from '../../../../utils/ua-parser';
import classes from './index.module.css';

class Card2React extends React.Component {
  constructor(props) {
    super(props);
    // state
    this.state = {};
    //
    this.isWindows = uaParser.getOS().name === 'Windows';
  }

  render() {
    return (
      <div className={classes.container}>
        <div className={classes['container-left']}>
          <div>
            <div
              className={classes['container-title']}
              style={{
                marginBottom: this.isWindows ? 4 : 12,
              }}
            >
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
          <div
            className={classes['container-button']}
            onClick={() => {
              if (this.props.buttonUrl.length > 0) {
                if (this.props.buttonUrl.startsWith('http://') || this.props.buttonUrl.startsWith('https://')) {
                  window.location.href = this.props.buttonUrl;
                } else {
                  this.props.history.push(this.props.buttonUrl);
                }
              }
            }}
          >
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

export const Card2 = withRouter(Card2React);
