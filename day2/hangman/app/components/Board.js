import React from 'react';
import PropTypes from 'prop-types';
import Box from './Box';

const Board = ({ wordLetters }) => {
    return (
      <div style={{'display': 'flex'}}>
        {wordLetters.map(letter => <Box letter={letter}/>)}
      </div>
  );
};

Board.propTypes = {
    wordLetters: PropTypes.array
};

export default Board;
