import React from 'react';
import imgUrls from '../data/data';
import PropTypes from 'prop-types';

let key = 0;
const Man = ({ badGuesses, guessedLetters }) => {
    return (
      <div>
        <p>{badGuesses}</p>
        <img src={imgUrls[badGuesses]}/>
        <ul> Guessed letters:
            {guessedLetters.map((letter) => (<li key={key++}> {letter} </li>)
                                )}
        </ul>
      </div>
  );
};

Man.propTypes = {
    badGuesses: PropTypes.number,
    guessedLetters: PropTypes.array,
};

export default Man;
