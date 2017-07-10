import React from 'react';
import PropTypes from 'prop-types';

const WordBox = ({ first100 }) => {
    console.log(first100);
    return (
      <div className="main">
        <div className="wordbox">
          {
            first100.map(
              (word) => {
                  return <div>{word.split().map((letter) => <span key={word}>{letter}</span>)}</div>;
              }
            )
          }
        </div>
      </div>
  );
};

WordBox.propTypes = {
    first100: PropTypes.array
};

export default WordBox;
