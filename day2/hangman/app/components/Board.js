import React from 'react';
import PropTypes from 'prop-types';
import Box from './Box';

var boxKey = 0;

const Board = ({ wordLetters }) => {
    return (
      <div style={{'display': 'flex'}}>
        {/* PSA: Box in this map should normally be given a key */}
        {wordLetters.map(letter => <Box key={boxKey++} letter={letter}/>)}
      </div>
  );
};

Board.propTypes = {
    wordLetters: PropTypes.array
};

export default Board;
