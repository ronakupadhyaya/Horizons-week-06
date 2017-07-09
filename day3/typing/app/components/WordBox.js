import React from 'react';
import PropTypes from 'prop-types';

const WordBox = ({ wordsList, userInput }) => {
    const wordColor = userInput[userInput.length - 1] === wordsList[userInput.length - 1]
    ? 'correct' : 'wrong';

    return (
      <div className="main">
        <div className="wordbox">
          {wordsList.map((character, index) => {
              console.log(character);
              const color =  (index === userInput.length - 1) ? wordColor : 'inactive';
              return <span className={color} key={index}>  {character}  </span>;
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
