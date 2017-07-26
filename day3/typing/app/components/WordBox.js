import React from 'react';
import PropTypes from 'prop-types';

const WordBox = ({ wordList, userInput }) => {
    return (
        <div className="wordbox">
            {wordList.map((word, index) => (<span key={word} className={word === userInput[index] ? 'right' : 'inactive'}>{word} </span>))}
        </div>
    );
};

WordBox.propTypes = {
    wordList: PropTypes.array,
    userInput: PropTypes.array
};

export default WordBox;
