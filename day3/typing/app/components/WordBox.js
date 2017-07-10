import PropTypes from 'prop-types';
import React from 'react';

const WordBox = ({wordList}) => {
    const oldWords = [...wordList];
    const newWords = [];
    oldWords.forEach((word) => {
        let aWord = word.split('');
        aWord = aWord.map(letter => <span>{letter}</span>);
        newWords.push(aWord);
        newWords.push(<span>{' '}</span>);
    });
    return (
        <div className="main">
            <div className="wordbox">
                <div>
                    {newWords}
                </div>
                <span className="correct">some</span>
                <span className="correct">correctly</span>
                <span className="correct">spelled</span>
                <span className="correct">words</span>
                <span className="correct">mi</span><span className="wrong">sta</span><span className="correct">ke</span>
                <span className="correct">wr</span><span className="wrong">o</span><span className="correct">ng</span>
                words that you have not typed yet
                go here
                placeholder text
                placeholder text
                placeholder text
                placeholder text
            </div>
        </div>
    );
};

WordBox.propTypes = {
    wordList: PropTypes.array
};

export default WordBox;
