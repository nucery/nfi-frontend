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
        <div className={classes['container-answer']}>
          {
            this.props.answer.split('\n').map((str, index) => {
              return (
                <div className={classes['container-answer-paragraph']} key={index}>
                  <span className={classes['text-answer']}>
                    {str}
                  </span>
                </div>
              );
            })
          }
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
