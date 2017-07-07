import React from 'react';
import imgUrls from '../data/data';
import PropTypes from 'prop-types';

const Man = ({ badGuesses, guessedLetters}) => {
    return (
      <div>
        <p>{badGuesses}</p>
        <img src={imgUrls[badGuesses]}/>
        <div>
            {guessedLetters.map(letter => <span>{letter.toUpperCase()}  </span>)}
        </div>
      </div>
  );
};

Man.propTypes = {
    badGuesses: PropTypes.number,
    guessedLetters: PropTypes.array
};

export default Man;
