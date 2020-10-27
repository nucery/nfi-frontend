import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';

import { ConnectionMask } from '../../general-component/connection-mask';
import { Footer } from '../../general-component/footer';
import { Header } from '../../general-component/header';
import logo from '../../static/image/logo.png';
import smallLogo from '../../static/image/small-logo.png';
import { isWindows } from '../../utils/is';
import { getCellWallWidth } from '../../utils/get-cell-wall-width';
import { removeUrlSlashSuffix } from '../../utils/remove-url-slash-suffix';

import classes from './index.module.css';
import { Card } from './component/card';

const navHight = 72;

const FarmReact = (props) => {
  const pathname = removeUrlSlashSuffix(props.location.pathname);
  if (pathname) {
    return (<Redirect to={pathname} />);
  }
  return (
    <div
      className="background"
      style={{ width: getCellWallWidth() }}
    >
      <div className="cell-wall nav-fixed" style={{ height: navHight, width: getCellWallWidth() }}>
        <div className="cell-membrane">
          <Header />
        </div>
      </div>
      <div className="cell-wall" style={{ height: navHight, width: getCellWallWidth() }} />
      <div className="cell-wall" style={{ width: getCellWallWidth() }}>
        <div className="cell-membrane">
          <div className={classes['container-part-1']}>
            <div
              className={classes['container-part-1-left']}
              style={{ marginTop: isWindows ? 124 : 154 }}
            >
              <div
                className={classes['container-title-1']}
                style={{ marginBottom: isWindows ? -8 : 38 }}
              >
                <span className={classes['text-title-1']}>
                  One-Stop DEFI
                </span>
              </div>
              <div
                className={classes['container-title-2']}
                style={{ marginBottom: isWindows ? 8 : 26 }}
              >
                <span className={classes['text-title-2']}>
                  FARM
                </span>
              </div>
              <div className={classes['container-body-1']}>
                <span
                  className={classes['text-body-1']}
                  style={{ lineHeight: isWindows ? 0 : 16 }}
                >
                  Earn NFI tokens by staking NFI & NUC V2 SLP Tokens. Note: Current APY includes 2/3rd NFI emission that is locked and will be retroactively disbursed at a later date.
                </span>
              </div>
            </div>
            <img alt="" src={logo} style={{ height: 360, marginTop: 40, marginRight: 168 }} />
          </div>
          <div className="flex-column-middle">
            <div className={classes['card-group']}>
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div className={classes['container-part-2']}>
              <img alt="" src={smallLogo} style={{ marginBottom: isWindows ? 36 : 42, marginTop: 54, height: 63, width: 61 }} />
              <div className={classes['container-title-3']}>
                <span className={classes['text-title-3']}>
                  LEARN MORE ABOUT NFI TOKEN
                </span>
              </div>
              <div className={classes['container-body-2']}>
                <span className={classes['text-body-2']}>
                  Watch the Terra video series before taking the quiz
                </span>
              </div>
              <div
                className={classes['container-button']}
                onClick={() => {
                  window.open('https://ocb-hk.oss-cn-hongkong.aliyuncs.com/OCB-WhitePaper.pdf');
                }}
              >
                <div className={classes['container-button-inner']}>
                  <span className={classes['text-button']}>
                    Download Whitepaper
                  </span>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
      <ConnectionMask />
    </div >
  );
};

FarmReact.propTypes = {
  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const Farm = FarmReact;
