import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

export class HeaderReact extends React.Component {
  constructor(props) {
    super(props);
    // state
    this.state = {};
  }

  render() {
    return (
      <div>header</div>
    );
  }
}

HeaderReact.propTypes = {
  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const Header = withRouter(HeaderReact);
