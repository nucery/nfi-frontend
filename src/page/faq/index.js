import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';

import { ConnectionMask } from '../../general-component/connection-mask';
import { Footer } from '../../general-component/footer';
import { Header } from '../../general-component/header';
import { getCellWallWidth } from '../../utils/get-cell-wall-width';
import { removeUrlSlashSuffix } from '../../utils/remove-url-slash-suffix';
import { Card } from './component/card';
import classes from './index.module.css';

class FaqReact extends React.Component {
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
      <div
        className="background"
        style={{ width: getCellWallWidth() }}
      >
        <div className="cell-wall nav-fixed" style={{ height: this.navHight, width: getCellWallWidth() }}>
          <div className="cell-membrane">
            <Header />
          </div>
        </div>
        <div className="cell-wall" style={{ height: this.navHight, width: getCellWallWidth() }} />
        <div className="cell-wall" style={{ width: getCellWallWidth() }}>
          <div className="cell-membrane">
            <div className="flex-column-middle">
              <div className={classes['container-title']}>
                <span className={classes['text-title']}>
                  FAQ
                </span>
              </div>
              <div className={classes['card-group']}>
                <Card
                  question={'What is DeFi?'}
                  answer={'DeFi is the creation of basic financial primitives that are implemented on top of permissionless blockchains. Its common goal is to re-create financial services used in the traditional financial system and operate these in a decentralised way, without intermediaries, on top of a transparent and trustless blockchain network. Imagine taking out a mortgage without needing a bank.'}
                />
                <Card
                  question={'Why combine traditional financial services with blockchain?'}
                  answer={'When Bitcoin was introduced in 2008, it was to offer a completely new alternative to the financial world. Ten years later, Bitcoin has a place as a major alternative asset and continues to be the leading digital currency in a thriving crypto space. However, a mass-market adoption beyond a thriving alternative investment market is yet to be seen.\nMany concepts that have been successfully applied in banking for centuries have powered the move through industrialization to today\'s digital age. For example, the possibility of taking out loans to invest or to bridge short-term credit requirements or payment difficulties is a legitimate financial product.'}
                />
                <Card
                  question={'Most popular DeFi use cases'}
                  answer={'DeFi lending protocols such as Compound Finance already offer significantly higher interest than traditional bank account savings. While these services do have a fundamentally different risk profile (more on that later), they work with a very similar economic model to traditional banks - you the lender, supply a cryptocurrency into a lending pool (smart contract), which collects interest from the borrowers, who take out the loans against the deposit of collateral.'}
                />
                <Card
                  question={'Liquidity Mining & Yield Farming'}
                  answer={'Another emerging trend in the DeFi space has been ‘Yield Farming’. Broadly, yield farming is the effort to put crypto assets to work and generate the most returns possible on those assets. For example, when users exchange tokens for each other on a decentralized exchange, this is only possible if other users have provided this liquidity.\nFor this service (and the associated risk), they are rewarded with a portion of the transaction fees and depending on the underlying protocol with native governance tokens. This type of process, called "Liquidity Mining", is available in various DeFi applications. ‘Yield farming’ is the crypto community name given to maximizing this return.'}
                />
                <Card
                  question={'What is a smart contract? What are its advantages? '}
                  answer={'A smart contract is an algorithm within a cryptocurrency’s blockchain. In our case, Ethereum is our first choice among those on which it is possible to create smart contracts. The main purpose of such contracts is the automation of the relationship, the opportunity to make a commitment self-executing. '}
                />
              </div>
              <Footer />
            </div>
          </div>
        </div>
        <ConnectionMask />
      </div>
    );
  }
}

FaqReact.propTypes = {
  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const Faq = FaqReact;
