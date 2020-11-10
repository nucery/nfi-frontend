import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { ConnectionMask } from '../../general-component/connection-mask';
import { Footer } from '../../general-component/footer';
import { Header } from '../../general-component/header';
import { i18n } from '../../general-component/i18n';
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
  const text = i18n(props.language).page.farm.index;
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
                  {text.title1}
                </span>
              </div>
              <div
                className={classes['container-title-2']}
                style={{ marginBottom: isWindows ? 8 : 26 }}
              >
                <span className={classes['text-title-2']}>
                  {text.title2}
                </span>
              </div>
              <div className={classes['container-body-1']}>
                <span className={classes['text-body-1']}>
                  {text.body1}
                </span>
              </div>
            </div>
            <img alt="" src={logo} style={{ height: 360, marginTop: 40, marginRight: 168 }} />
          </div>
          <div className="flex-column-middle">
            <div className={classes['card-group']}>
              <Card
                title={'NUC'}
                tokenName={'nuc'}
              />
              <Card
                title={'NUX'}
                tokenName={'nux'}
              />
              <Card
                title={'ETH'}
                tokenName={'eth'}
              />
              <Card
                title={'USDT'}
                tokenName={'usdt'}
              />
              <Card
                title={'UNI'}
                tokenName={'uni'}
              />
            </div>
            <div className={classes['container-part-2']}>
              <img alt="" src={smallLogo} style={{ marginBottom: isWindows ? 36 : 42, marginTop: 54, height: 63, width: 61 }} />
              <div className={classes['container-title-3']}>
                <span className={classes['text-title-3']}>
                  {text.title3}
                </span>
              </div>
              <div className={classes['container-body-2']}>
                <span className={classes['text-body-2']}>
                  {text.body2}
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
                    {text.download}
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
  // React Redux
  language: PropTypes.string.isRequired,
  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const Farm = connect(
    (state) => {
      return {
        language: state.language,
      };
    },
)(FarmReact);
