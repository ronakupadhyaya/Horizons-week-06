import PropTypes from 'prop-types';
import React from 'react';
// import { connect } from 'react-redux';

const WordBox = ({ words }) => {
    return (
      <div className="word-box">
        {words.map(word => (
          word.map(letter => (
            <span className={letter.status}>{letter.letter}</span>
          )).concat(<span> </span>)
        ))}
      </div>
    );
};

WordBox.propTypes = {
    words: PropTypes.array
};

export default WordBox;
