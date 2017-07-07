import React from 'react';
import PropTypes from 'prop-types';

const WordBox = ({ wordList }) => {
    return (
        <div className="wordbox">
            {wordList.map((word) => <span>{word} </span>)}
        </div>
    );
};

WordBox.propTypes = {
    wordList: PropTypes.array
};

export default WordBox;
