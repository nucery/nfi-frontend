import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';

import { Footer } from '../../general-component/footer';
import { Header } from '../../general-component/header';
import { getCellWallWidth } from '../../utils/get-cell-wall-width';
import { removeUrlSlashSuffix } from '../../utils/remove-url-slash-suffix';
import classes from './index.module.css';

class LendReact extends React.Component {
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
              <div>content</div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LendReact.propTypes = {
  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const Lend = LendReact;
