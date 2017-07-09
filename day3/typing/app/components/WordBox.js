import React from 'react';
import PropTypes from 'prop-types';

const WordBox = ({ wordsList, userInput }) => {
    const wordColor = userInput[userInput.length - 1] === wordsList[userInput.length - 1]
    ? 'correct' : 'wrong';

    return (
      <div className="main">
        <div className="wordbox">
          {wordsList.map((character, index) => {
              if (index === userInput.length - 1) {
                  <span className={wordColor}>  {character}  </span>;
              } else {
                  <span className="grey">  {character}  </span>;
              }
          }
        )}
        </div>
      </div>
  );
};

WordBox.propTypes = {
    wordsList: PropTypes.array,
    userInput: PropTypes.array,
};

export default WordBox;
