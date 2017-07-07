import React from 'react';
import PropTypes from 'prop-types';


const TriedLetters = ({ guessedLetters }) => {
    return (
      <div style={{'display': 'flex'}}>
        {guessedLetters.map((letter, index) => <button key={'guesses' + index}>{letter}</button>)}
      </div>
  );
};

TriedLetters.propTypes = {
    guessedLetters: PropTypes.array
};

export default TriedLetters;
