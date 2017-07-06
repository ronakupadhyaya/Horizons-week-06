import React from 'react';
import imgUrls from '../data/data';
import PropTypes from 'prop-types';

const Man = ({ badGuesses }) => {
    return (
      <div>
          <p>Incorrect Guesses: {badGuesses}</p>
        <img src={imgUrls[badGuesses]}/>
      </div>
  );
};

Man.propTypes = {
    badGuesses: PropTypes.number
};

export default Man;
