import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';

import { Footer } from '../../general-component/footer';
import homeCardGroupLeft from '../../static/image/home-card-group-left@2x.png';
import homeCardGroupRight from '../../static/image/home-card-group-right@2x.png';
import { getCellWallWidth } from '../../utils/get-cell-wall-width';
import { isWindows } from '../../utils/is';
import { removeUrlSlashSuffix } from '../../utils/remove-url-slash-suffix';
import classes from './index.module.css';
// import { Card1 } from './component/card-1';
import { Card2 } from './component/card-2';
import { Card3 } from './component/card-3';
import { Header } from './component/header';

const navHight = 72;
const faceHight = 548;

const HomeReact = (props) => {
  const pathname = removeUrlSlashSuffix(props.location.pathname);
  if (pathname) {
    return (<Redirect to={pathname} />);
  }
  return (
    <div className={classes.wrapper}>
      <div
        className="cell-wall"
        style={{ backgroundImage: 'linear-gradient(#E1E5EE, #FFFFFF)', height: faceHight, position: 'absolute', top: navHight, width: getCellWallWidth() }}
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
              marginTop: isWindows ? 98: 138,
            }}
          >
            <div className={classes['container-title-1']}
              style={{
                marginBottom: isWindows ? -14: 30,
              }}
            >
              <span className={classes['text-title-1']}>
                  OCB
              </span>
            </div>
            <div
              className={classes['container-title-2']}
              style={{
                marginBottom: isWindows ? 10: 22,
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
                props.history.push('/farm');
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
        style={{ height: faceHight, width: getCellWallWidth() }}
      />
      <div
        className="cell-wall nav-fixed"
        style={{ backgroundColor: '#E1E5EE', height: navHight, width: getCellWallWidth() }}
      >
        <div className="cell-membrane">
          <Header />
        </div>
      </div>
      <div
        className="cell-wall"
        style={{ height: navHight, width: getCellWallWidth() }}
      />
      <div className="cell-wall" style={{ width: getCellWallWidth() }}>
        <div className="cell-membrane">
          <div className="flex-column-middle">
            {
              null
              // <div className={classes['container-title-3']} style={{ marginTop: 18 }}>
              //   <span className={classes['text-title-3']}>
              //     How does it work?
              //   </span>
              // </div>
              // <div className={classes['container-card-1-group']}>
              //   <Card1
              //     title={'Watch Videos'}
              //     body={'Learn about top & emerging crypto projects'}
              //     imageUrl={process.env.PUBLIC_URL + '/static/image/watch-video@2x.png'}
              //     toUrl={''}
              //   />
              //   <Card1
              //     title={'Complete Quiz'}
              //     body={'Put your newfound knowledge to the test'}
              //     imageUrl={process.env.PUBLIC_URL + '/static/image/complete-quiz@2x.png'}
              //     toUrl={''}
              //   />
              //   <Card1
              //     title={'Earn Crypto'}
              //     body={'Put your newfound knowledge to the test'}
              //     imageUrl={process.env.PUBLIC_URL + '/static/image/earn-crypto@2x.png'}
              //     toUrl={''}
              //   />
              // </div>
            }
            <div className={classes['container-title-3']} style={{ marginTop: 18 /* 34 */ }}>
              <span className={classes['text-title-3']}>
                  OCB PRODUCT SERIES
              </span>
            </div>
            <div className="container-card-2-group">
              <Card2
                title={'Farm'}
                body={'OCB seeks to generate governance token NFI in a fair way, so that over 60% of NFI comes from liquid mining which will encourage a large number of users and funds to participate in its system. In the future, the community will vote to determine more liquid mining and behavioral mining methods.'}
                imageUrl={process.env.PUBLIC_URL + '/static/image/home-farm.png'}
                buttonUrl={'/farm'}
              />
              <Card2
                title={'Valut'}
                body={'OCB Vault is an income aggregator that automatically selects the highest return of each DeFi product in market in order to to maximize the income for the holding assets in a non-destructive way.'}
                imageUrl={process.env.PUBLIC_URL + '/static/image/home-valut.png'}
                buttonUrl={'' /* Add path or URL here to enable button. */}
              />
              <Card2
                title={'Financial Insurance'}
                body={'In addition to insurance, adds the aggregated farm and earn of the underwriting pool and the insured pool, which allows the insurer to obtain additional income on the basis of their income, and also allows the insured a certain benefit by transferring some risks to the insurance pool.'}
                imageUrl={process.env.PUBLIC_URL + '/static/image/home-financial-insurance.png'}
                buttonUrl={'' /* Add path or URL here to enable button. */}
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
                body={'The protocol for Ethereum money markets'}
                imageUrl={process.env.PUBLIC_URL + '/static/image/compound.png'}
                toUrl={''}
              />
              <Card3
                title={'Aave'}
                body={'An open-source, decentralized non-custodial money market protocol on Ethereum. '}
                imageUrl={process.env.PUBLIC_URL + '/static/image/aave.png'}
                toUrl={''}
              />
              <Card3
                title={'Uniswap V2'}
                body={'An enhanced DEX protocol built on the AMM algorithm and liquidity pools.'}
                imageUrl={process.env.PUBLIC_URL + '/static/image/uniswap-v2.png'}
                toUrl={''}
              />
              <Card3
                title={'Curve'}
                body={'AMM based liquidity pool protocol specialized in stablecoin and stable pairs.'}
                imageUrl={process.env.PUBLIC_URL + '/static/image/curve.png'}
                toUrl={''}
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
};

HomeReact.propTypes = {
  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const Home = HomeReact;
