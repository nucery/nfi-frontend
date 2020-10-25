import React from 'react';

import classes from './index.module.css';

class CommingSoonReact extends React.Component {
  constructor(props) {
    super(props);
    // state
    this.state = {};
  }

  render() {
    return (
      <div className={classes['container-comming-soon']}>
        <span className={classes['text-comming-soon']}>
          Coming Soon
        </span>
      </div>
    );
  }
}

CommingSoonReact.propTypes = {};

export const CommingSoon = CommingSoonReact;
