import React from 'react';
import PropTypes from 'prop-types';

const WordBox = ({wordList}) => {
    return(
      <div className="main">
          <div className="wordbox">
               {wordList.map(word =>
                <span>{word.split('').map(letter => <span>{letter}</span>)} </span>)}

          </div>
      </div>
    );
};

WordBox.propTypes = {
    wordList: PropTypes.array
};

export default WordBox;
