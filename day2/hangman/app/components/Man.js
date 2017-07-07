import React from 'react';
import imgUrls from '../data/data';
import PropTypes from 'prop-types';

const Man = ({ badGuesses, guessedLetters }) => {
    return (
      <div>
        <p>{badGuesses}</p>
        <p>Guessed Letters: {guessedLetters.map((letter) => <span style={letter.correct ? {'color': 'green'} : {'color': 'red'} }>{letter.letter}</span>)}</p>
        <img src={imgUrls[badGuesses]}/>
      </div>
  );
};


Man.propTypes = {
    badGuesses: PropTypes.number,
    guessedLetters: PropTypes.array
};

export default Man;
