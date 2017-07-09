import React from 'react';
import PropTypes from 'prop-types';

const WordBox = ({ wordLetters }) => {
    const letterElements = [];
    wordLetters.forEach((letter, index)=>{
        letterElements.push(<span id={index} key={index}>{letter}</span>);
    });
    return (
    <div className="main">
      <div className="wordbox">
        {letterElements}
      </div>
    </div>
  );
};

WordBox.propTypes = {
    wordLetters: PropTypes.array
};

export default WordBox;
