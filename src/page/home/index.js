import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';

import { Footer } from '../../general-component/footer';
import homeCardGroupLeft from '../../static/image/home-card-group-left@2x.png';
import homeCardGroupRight from '../../static/image/home-card-group-right@2x.png';
import { getCellWallWidth } from '../../utils/get-cell-wall-width';
import { removeUrlSlashSuffix } from '../../utils/remove-url-slash-suffix';
import { uaParser } from '../../utils/ua-parser';
import classes from './index.module.css';
import { Card1 } from './component/card-1';
import { Card2 } from './component/card-2';
import { Card3 } from './component/card-3';
import { Header } from './component/header';

class HomeReact extends React.Component {
  constructor(props) {
    super(props);
    // state
    this.state = {};
    //
    this.navHight = 72;
    this.faceHight = 548;
    this.isWindows = uaParser.getOS().name === 'Windows';
  }

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    if (pathname) {
      return (<Redirect to={pathname} />);
    }
    return (
      <div className={classes.wrapper}>
        <div
          className="cell-wall"
          style={{ backgroundImage: 'linear-gradient(#E1E5EE, #FFFFFF)', height: this.faceHight, position: 'absolute', top: this.navHight, width: getCellWallWidth() }}
        >
          <img alt=""
            src={homeCardGroupLeft}
            style={{ left: 0, position: 'absolute', top: 166, width: 120 }}
          />
          <img alt=""
            src={homeCardGroupRight}
            style={{ position: 'absolute', right: 0, top: 112, width: 848 }}
          />
          <div className="cell-membrane">
            <div
              className={classes['container-part-1']}
              style={{
                marginTop: this.isWindows ? 98: 138,
              }}
            >
              <div className={classes['container-title-1']}
                style={{
                  marginBottom: this.isWindows ? -14: 30,
                }}
              >
                <span className={classes['text-title-1']}>
                  OCB
                </span>
              </div>
              <div
                className={classes['container-title-2']}
                style={{
                  marginBottom: this.isWindows ? 10: 22,
                }}
              >
                <span className={classes['text-title-2']}>
                  One-Stop Crypto Bank
                </span>
              </div>
              <div className={classes['container-body']}>
                <span className={classes['text-body']}>
                  OCB aims to create a one-stop encrypted bank, committed to creating a lightweight, open and free financial world where everyone can participate. At this time, we are standing at the starting point of the DeFi explosion, facing the vast future of the DeFi world.
                </span>
              </div>
              <div
                className={classes['container-button-black']}
                onClick={() => {
                  this.props.history.push('/home');
                }}
              >
                <div className={classes['container-button-black-inner']}>
                  <div className={classes['container-button-black-inner']}>
                    <span className={classes['text-button-black']}>
                      START NOW
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="cell-wall"
          style={{ height: this.faceHight, width: getCellWallWidth() }}
        />
        <div
          className="cell-wall nav-fixed"
          style={{ backgroundColor: '#E1E5EE', height: this.navHight, width: getCellWallWidth() }}
        >
          <div className="cell-membrane">
            <Header />
          </div>
        </div>
        <div
          className="cell-wall"
          style={{ height: this.navHight, width: getCellWallWidth() }}
        />
        <div className="cell-wall" style={{ width: getCellWallWidth() }}>
          <div className="cell-membrane">
            <div className="flex-column-middle">
              <div className={classes['container-title-3']} style={{ marginTop: 18 }}>
                <span className={classes['text-title-3']}>
                  How does it work?
                </span>
              </div>
              <div className={classes['container-card-1-group']}>
                <Card1
                  title={'Watch Videos'}
                  body={'Learn about top & emerging crypto projects'}
                  imageUrl={process.env.PUBLIC_URL + '/static/image/watch-video@2x.png'}
                  toUrl={'' /* TODO */}
                />
                <Card1
                  title={'Complete Quiz'}
                  body={'Put your newfound knowledge to the test'}
                  imageUrl={process.env.PUBLIC_URL + '/static/image/complete-quiz@2x.png'}
                  toUrl={'' /* TODO */}
                />
                <Card1
                  title={'Earn Crypto'}
                  body={'Put your newfound knowledge to the test'}
                  imageUrl={process.env.PUBLIC_URL + '/static/image/earn-crypto@2x.png'}
                  toUrl={'' /* TODO */}
                />
              </div>
              <div className={classes['container-title-3']} style={{ marginTop: 34 }}>
                <span className={classes['text-title-3']}>
                  OCB PRODUCT SERIES
                </span>
              </div>
              <div className="container-card-2-group">
                <Card2
                  title={'Farm'}
                  body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra msaecenas accumsan lacus vel facilisis.'}
                  imageUrl={''}
                  buttonUrl={'' /* TODO */}
                />
                <Card2
                  title={'Farm'}
                  body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra msaecenas accumsan lacus vel facilisis.'}
                  imageUrl={''}
                  buttonUrl={'' /* TODO */}
                />
                <Card2
                  title={'Farm'}
                  body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra msaecenas accumsan lacus vel facilisis.'}
                  imageUrl={''}
                  buttonUrl={'' /* TODO */}
                />
              </div>
              <div className={classes['container-title-3']} style={{ marginTop: 22 }}>
                <span className={classes['text-title-3']}>
                  PARTNERS
                </span>
              </div>
              <div className={classes['container-card-3-group']}>
                <Card3
                  title={'Compound'}
                  body={'The protocol for Ethereum money makers'}
                  imageUrl={process.env.PUBLIC_URL + '/static/image/earn-crypto@2x.png'}
                  toUrl={'' /* TODO */}
                />
                <Card3
                  title={'Compound'}
                  body={'The protocol for Ethereum money makers'}
                  imageUrl={process.env.PUBLIC_URL + '/static/image/earn-crypto@2x.png'}
                  toUrl={'' /* TODO */}
                />
                <Card3
                  title={'Compound'}
                  body={'The protocol for Ethereum money makers'}
                  imageUrl={process.env.PUBLIC_URL + '/static/image/earn-crypto@2x.png'}
                  toUrl={'' /* TODO */}
                />
                <Card3
                  title={'Compound'}
                  body={'The protocol for Ethereum money makers'}
                  imageUrl={process.env.PUBLIC_URL + '/static/image/earn-crypto@2x.png'}
                  toUrl={'' /* TODO */}
                />
              </div>
              <div className={classes['container-title-3']} style={{ marginTop: 34 }}>
                <span className={classes['text-title-3']}>
                  Introducing NFI Token
                </span>
              </div>
              <div className={classes['container-tail']}>
                <span className={classes['text-tail']}>
                  CoinMarketCap Earn enables users to receive tokens while learning about a cryptocurrency project. Each user who watches a series of educational videos about a crypto project and successfully completes the quiz will receive a predetermined amount of tokens as a reward, in that respective project’s cryptoasset. CoinMarketCap Earn educational programs are subject to and governed by the CoinMarketCap User Agreement and CoinMarketCap Earn User Agreement. In the event of a conflict between the CoinMarketCap User Agreement and the CoinMarketCap Earn User Agreement, the CoinMarketCap Earn User Agreement prevails.
                </span>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HomeReact.propTypes = {
  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const Home = HomeReact;
