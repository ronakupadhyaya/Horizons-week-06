import React from 'react';
import PropTypes from 'prop-types';
import Box from './Box';

const Board = ({ wordLetters, guessedLetters}) => {
    return (
      <div style={{'display': 'flex'}}>
        {/* PSA: Box in this map should normally be given a key */}
        {wordLetters.map(letter => <Box letter={letter}/>)}
        {guessedLetters.map(letter => <li>{letter}</li>)}
      </div>
  );
};

Board.propTypes = {
    wordLetters: PropTypes.array,
    guessedLetters: PropTypes.array
};

export default Board;
