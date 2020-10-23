import PropTypes from 'prop-types';
import React from 'react';

export class FooterReact extends React.Component {
  constructor(props) {
    super(props);
    // state
    this.state = {};
  }

  render() {
    return (
      <div>footer</div>
    );
  }
}

FooterReact.propTypes = {
  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const Footer = FooterReact;
