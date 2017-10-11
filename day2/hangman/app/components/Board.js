import React from 'react';
import PropTypes from 'prop-types';
import Box from './Box';

const Board = ({ wordLetters, guesses }) => {
    return (
      <div>
      <div style={{'display': 'flex'}}>
        {/* PSA: Box in this map should normally be given a key */}
        {wordLetters.map(letter => <Box letter={letter}/>)}
      </div>
      <div>
        <p> Number of Guesses: {guesses.length} </p>
        <p> Guesses: {guesses} </p>
      </div>
      </div>
  );
};

Board.propTypes = {
    wordLetters: PropTypes.array,
    guesses: PropTypes.array
};

export default Board;
