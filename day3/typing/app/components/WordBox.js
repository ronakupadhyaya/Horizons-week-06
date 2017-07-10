import React from 'react';
import PropTypes from 'prop-types';
import Word from './word';

const WordBox = ({ wordsList, userInput}) => {
    const boxes = wordsList.map((correctWord, i) => {
        const userWord = userInput[i];
        return (<Word key={i} correctWord={correctWord} userWord={userWord}/>);
    });
    return (
      <div className="main">
        <div className="wordbox">
          {boxes}
        </div>
      </div>
  );
};

WordBox.propTypes = {
    wordsList: PropTypes.array,
    userInput: PropTypes.array,
    currentIndex: PropTypes.array,
};

export default WordBox;
