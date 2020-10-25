import PropTypes from 'prop-types';
import React from 'react';

import facebook from '../../static/image/facebook@2x.png';
import instagram from '../../static/image/instagram@2x.png';
import twitter from '../../static/image/twitter@2x.png';
import linkedin from '../../static/image/linkedin@2x.png';
import classes from './index.module.css';

export class FooterReact extends React.Component {
  constructor(props) {
    super(props);
    // state
    this.state = {};
  }

  render() {
    return (
      <div className={classes.container}>
        <div className={classes['container-band']}>
          <span className={classes['text-band']}>
            <div>
              One-Stop Crypto Bank
            </div>
          </span>
        </div>
        <div className={classes['container-share']}>
          <div className={classes['container-share-icon']}>
            <img src={twitter} style={{ height: 18 }} />
          </div>
          <div className={classes['container-share-icon']}>
            <img src={instagram} style={{ height: 18 }} />
          </div>
          <div className={classes['container-share-icon']}>
            <img src={facebook} style={{ height: 18 }} />
          </div>
          <div className={classes['container-share-icon']}>
            <img src={linkedin} style={{ height: 18 }} />
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

export const Footer = FooterReact;
