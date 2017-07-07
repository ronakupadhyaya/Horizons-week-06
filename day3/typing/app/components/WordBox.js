import React from 'react';
import PropTypes from 'prop-types';

const WordBox = ({ wordList }) => {
    // console.log(wordList);
    return (
      <div className="main">
        <div className="wordbox">
          {wordList.map((word) => {
              return <div>{word.split('').map((letter) => <span>{letter}</span>)}</div>;
          })}
        </div>
      </div>
  );
};

WordBox.propTypes = {
    wordList: PropTypes.array
};

export default WordBox;
