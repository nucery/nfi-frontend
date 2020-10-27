import React from 'react';

import classes from './index.module.css';

const CommingSoonReact = () => {
  return (
    <div className={classes['container-comming-soon']}>
      <span className={classes['text-comming-soon']}>
        Coming Soon
      </span>
    </div>
  );
};

export const CommingSoon = CommingSoonReact;
