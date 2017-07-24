import React from 'react';
import PropTypes from 'prop-types';

const WordBox = ({ wordList, inputList, onInput, currentInput }) => (
  <div>
    <div className="wordbox">
      {wordList.map((word, i) => {
          if (i < inputList.length) {
              if(word === inputList[i]) {
                  return <span className="correct">{word + ' '}</span>;
              }

              return <span className="wrong">{word + ' '}</span>;
          }

          return <span>{word + ' '}</span>;
      })}
    </div>
    <input name="wordInput" onChange={(e) => onInput(e.target.value)} value={currentInput} />
  </div>
);

WordBox.propTypes = {
    wordList: PropTypes.array,
    inputList: PropTypes.array,
    onInput: PropTypes.func,
    currentInput: PropTypes.string,
};

export default WordBox;
