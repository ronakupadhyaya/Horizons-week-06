import PropTypes from 'prop-types';
import React from 'react';

const Word = (props) => {
  return (
    <span className="word">
      {props.word.map( (charObj, index) => {
        return <span key={index} className={charObj.status}>{charObj.letter}</span>;
      } )}
      {/* Adding an empty space between words */}
      <span> </span>
    </span>
  );
};

Word.propTypes = {
  word: PropTypes.array, // array of charObj {letter: `l`, status: `correct` `incorrect` or `pending`}
};

export default Word;
