import React from 'react';
import imgUrls from '../data/data';
import PropTypes from 'prop-types';

const Man = ({ badGuesses, guessedLetters }) => {
    return (
      <div>
        <p>{badGuesses} bad guesses: {guessedLetters}</p>
        <img src={imgUrls[badGuesses]}/>
      </div>
  );
};

Man.propTypes = {
    badGuesses: PropTypes.number,
    guessedLetters: PropTypes.array
};

export default Man;
