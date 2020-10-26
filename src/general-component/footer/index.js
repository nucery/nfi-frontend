import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';


import facebook from '../../static/image/facebook@2x.png';
import instagram from '../../static/image/instagram@2x.png';
import twitter from '../../static/image/twitter@2x.png';
import linkedin from '../../static/image/linkedin@2x.png';
import { uaParser } from '../../utils/ua-parser';
import classes from './index.module.css';

export class FooterReact extends React.Component {
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
        <div
          className={classes['container-band']}
          onClick={() => {
            this.props.history.push('/home');
          }}
          style={{ marginTop: this.isWindows ? 20 : 24 }}
        >
          <span className={classes['text-band']}>
            One-Stop Crypto Bank
          </span>
        </div>
        <div className={classes['container-share']}>
          <div
            className={classes['container-share-icon']}
            onClick={() => {
              // TODO
              window.location.href = 'https://twitter.com/';
            }}
          >
            <img alt="" src={twitter} style={{ height: 18 }} />
          </div>
          <div
            className={classes['container-share-icon']}
            onClick={() => {
              // TODO
              window.location.href = 'https://www.instagram.com/';
            }}
          >
            <img alt="" src={instagram} style={{ height: 18 }} />
          </div>
          <div
            className={classes['container-share-icon']}
            onClick={() => {
              // TODO
              window.location.href = 'https://www.facebook.com/';
            }}
          >
            <img alt="" src={facebook} style={{ height: 18 }} />
          </div>
          <div
            className={classes['container-share-icon']}
            onClick={() => {
              // TODO
              window.location.href = 'https://www.linkedin.com/';
            }}
          >
            <img alt="" src={linkedin} style={{ height: 18 }} />
          </div>
        </div>
        <div className={classes['container-author']}>
          <span className={classes['text-author']}>
            @ 2020 One-Stop Crypto Bank
          </span>
        </div>
      </div >
    );
  }
}

FooterReact.propTypes = {
  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const Footer = withRouter(FooterReact);
