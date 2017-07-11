import React from 'react';
import PropTypes from 'prop-types';

const WordBox = ({wordList, userInput}) => {
    const a = wordList.join(' ');
    const list = a.split('');
    return(
    <div className="wordbox">
      {list.map((letter, index) => letter !== ' ' ?
      ( userInput[index] ? (letter === userInput[index] ?
        <span className="letter" style={{color: 'blue'}}>{letter}</span>
          : <span className="letter" style={{color: 'red'}}>{letter}</span>)
        : <span className="letter" style={{color: 'black'}}>{letter}</span>)
      : <span> </span> )}
    </div>
  );
};

WordBox.propTypes = {
    wordList: PropTypes.array,
    userInput: PropTypes.array,
};

export default WordBox;
