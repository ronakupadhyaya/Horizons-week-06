import React from 'react';
import imgUrls from '../data/data';
import PropTypes from 'prop-types';

const Man = ({ badGuesses, guesses }) => {
    return (
      <div>
        <p>{badGuesses} Guesses: {guesses}</p>
        <img src={imgUrls[badGuesses]}/>
      </div>
  );
};

Man.propTypes = {
    badGuesses: PropTypes.number,
    guesses: PropTypes.array
};

export default Man;
