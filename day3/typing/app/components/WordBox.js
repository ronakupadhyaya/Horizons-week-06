import React from 'react';
import PropTypes from 'prop-types';

const WordBox = ({ wordList, userInput, currentIndex }) => {
    return (
        <div className="wordbox">
            {
                wordList.map((word, wordIdx) => (
                    <span>{word.map((letter, letterIdx) => {
                        let className = '';
                        if (userInput.length !== 0 && currentIndex.length ) {
                            if ((wordIdx === currentIndex[0] && letterIdx === currentIndex[1])) {
                                className = 'current';
                            } else if (userInput[wordIdx] && userInput[wordIdx][letterIdx] === letter) {
                                className = 'correct';
                            } else if (wordIdx < currentIndex[0] || (wordIdx === currentIndex[0] ? letterIdx < currentIndex[1] : false)) {
                                className = 'wrong';
                            }
                        }
                        return <span className={className}>{letter}</span>;
                    })} </span>
                ))
            }
        </div>
    );
};

WordBox.propTypes = {
    wordList: PropTypes.array,
    userInput: PropTypes.array,
    currentIndex: PropTypes.array,
};

export default WordBox;
