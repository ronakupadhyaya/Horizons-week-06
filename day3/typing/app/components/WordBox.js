import React from 'react';
import PropTypes from 'prop-types';

const WordBox = ({ wordList }) => {
    let output = [];
    for (let i = 0; i < wordList.length; i++) {
        const word = wordList[i];
        for (let j = 0; j < word.length; j++) {
            const letter = word[j];
            output.push(<span className={letter.status}>{letter.letter}</span>);
        }
        output.push(<span> </span>);
    }
    return (
        <div className="word-box">{output}</div>
    );
};

WordBox.propTypes = {
    wordList: PropTypes.array
};

export default WordBox;
