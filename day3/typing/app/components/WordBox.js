import React from 'react';
import PropTypes from 'prop-types';

const WordBox = ({wordList}) => {
  // compare userInput with wordList
    return (
          <div className="main">
            <div className="wordbox">
              <span className="correct">some</span>
              <span className="correct">correctly</span>
              <span className="correct">spelled</span>
              <span className="correct">words</span>
              <span className="correct">mi</span><span className="wrong">sta</span><span className="correct">ke</span>
              <span className="correct">wr</span><span className="wrong">o</span><span className="correct">ng</span>
              words that you have not typed yet
              go here
              placeholder text
              placeholder text
              placeholder text
              placeholder text
              {wordList.map(word => <span> {word} </span> )}
            </div>
          </div>
      );
};

WordBox.propTypes = {
    wordList: PropTypes.array,
};

export default WordBox;
