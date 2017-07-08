import React from 'react';
import PropTypes from 'prop-types';
// import Box from './Box';

const WordBox = ({ wordList, userInput}) => {
    const letterList = wordList.join(' ').split('');
    const inputLetters = userInput.join(' ').split('');
    return (
      <div className="wordBox">
          {letterList.map((char, i) => {
              let classname = 'char';
              if(char !== ' ' && i < inputLetters.length) {
                  if(inputLetters[i] === char) {
                      classname = 'correct';
                  } else {
                      classname = 'wrong';
                  }
              }
              return (<span className={classname}>{char}</span>);
          })}
      </div>
  );
};

WordBox.propTypes = {
    wordList: PropTypes.array,
    userInput: PropTypes.array
};

export default WordBox;
