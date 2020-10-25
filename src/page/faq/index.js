import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';

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
        className={classes.wrapper}
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
                  question={'What is Harvest?'}
                  answer={'Harvest automatically farms the highest yield available from the newest DeFi protocols, and optimizes the yidelds that are received using the latest farming techniques.'}
                />
                <Card
                  question={'What is Harvest?'}
                  answer={'Harvest automatically farms the highest yield available from the newest DeFi protocols, and optimizes the yidelds that are received using the latest farming techniques.'}
                />
                <Card
                  question={'What is Harvest?'}
                  answer={'Harvest automatically farms the highest yield available from the newest DeFi protocols, and optimizes the yidelds that are received using the latest farming techniques.'}
                />
                <Card
                  question={'What is Harvest?'}
                  answer={'Harvest automatically farms the highest yield available from the newest DeFi protocols, and optimizes the yidelds that are received using the latest farming techniques.'}
                />
              </div>
              <Footer />
            </div>
          </div>
        </div>
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
