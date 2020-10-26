import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';

import { Footer } from '../../general-component/footer';
import { Header } from '../../general-component/header';
import coin from '../../static/image/coin@2x.png';
import smallCoin from '../../static/image/small-coin@2x.png';
import { getCellWallWidth } from '../../utils/get-cell-wall-width';
import { removeUrlSlashSuffix } from '../../utils/remove-url-slash-suffix';
import classes from './index.module.css';
import { Card } from './component/card';

class FarmReact extends React.Component {
  constructor(props) {
    super(props);
    // state
    this.state = {};
    //
    this.navHight = 72;
  }

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    if (pathname) {
      return (<Redirect to={pathname} />);
    }
    return (
      <div className="background">
        <div className="cell-wall nav-fixed" style={{ height: this.navHight, width: getCellWallWidth() }}>
          <div className="cell-membrane">
            <Header />
          </div>
        </div>
        <div className="cell-wall" style={{ height: this.navHight, width: getCellWallWidth() }} />
        <div className="cell-wall" style={{ width: getCellWallWidth() }}>
          <div className="cell-membrane">
            <div className={classes['container-part-1']}>
              <div className={classes['container-part-1-left']}>
                <div className={classes['container-title-1']}>
                  <span className={classes['text-title-1']}>
                    One-Stop DEFI
                  </span>
                </div>
                <div className={classes['container-title-2']}>
                  <span className={classes['text-title-2']}>
                    FARM
                  </span>
                </div>
                <div className={classes['container-body-1']}>
                  <span className={classes['text-body-1']}>
                    Earn NFI tokens by staking NFI & NUC V2 SLP Tokens. Note: Current APY includes 2/3rd NFI emission that is locked and will be retroactively disbursed at a later date.
                  </span>
                </div>
              </div>
              <img alt="" src={coin} style={{ marginTop: 40, marginRight: 62, height: 376, width: 453 }} />
            </div>
            <div className="flex-column-middle">
              <div className={classes['card-group']}>
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
              <div className={classes['container-part-2']}>
                <img alt="" src={smallCoin} style={{ marginBottom: 42, marginTop: 54, height: 63, width: 61 }} />
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
                <div className={classes['container-button-group']}>
                  <div
                    className={classes['container-button-left']}
                    onClick={() => {
                      // TODO
                    }}
                  >
                    <div className={classes['container-button-left-inner']}>
                      <span className={classes['text-button-left']}>
                        Read FAQ
                      </span>
                    </div>
                  </div>
                  <div
                    className={classes['container-button-right']}
                    onClick={() => {
                      // TODO
                    }}
                  >
                    <div className={classes['container-button-right-inner']}>
                      <span className={classes['text-button-right']}>
                        Take the quiz!
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FarmReact.propTypes = {
  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const Farm = FarmReact;
