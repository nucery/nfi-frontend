import PropTypes from 'prop-types';
import React from 'react';

import classes from './index.module.css';

class CardReact extends React.Component {
  constructor(props) {
    super(props);
    // state
    this.state = {};
  }

  render() {
    return (
      <div className={classes.container}>
        <div className={classes['container-question']}>
          <span className={classes['text-question']}>
            {this.props.question}
          </span>
        </div>
        <div>
          <span className={classes['text-answer']}>
            {this.props.answer}
          </span>
        </div>
      </div>
    );
  }
}

CardReact.propTypes = {
  // self
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export const Card = CardReact;
