import React from 'react';
import PropTypes from 'prop-types';

const WordBox = ({ wordsList }) => {
    return (
      <div className="main">
        <div className="wordbox">
          {wordsList.map((character) => <span>{character}</span>)}
        </div>
      </div>
  );
};

WordBox.propTypes = {
    wordsList: PropTypes.array,
};

export default WordBox;
