import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';

import { ConnectionMask } from '../../general-component/connection-mask';
import { CommingSoon } from '../../general-component/comming-soon';
import { Footer } from '../../general-component/footer';
import { Header } from '../../general-component/header';
import { getCellWallWidth } from '../../utils/get-cell-wall-width';
import { removeUrlSlashSuffix } from '../../utils/remove-url-slash-suffix';
// import classes from './index.module.css';

const navHight = 72;

const LendReact = (props) => {
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
          <div className="flex-column-middle">
            <CommingSoon />
            <Footer />
          </div>
        </div>
      </div>
      <ConnectionMask />
    </div>
  );
};

LendReact.propTypes = {
  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const Lend = LendReact;
