import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import InfoBar from './InfoBar';

const WordBox = ({ wordList, userInput, timer }) => {
    const highlightedLetters = [];
    const userInputArray = userInput.join('').split('');
    const wordListArray = wordList.join(' ').split('');
    let index = 0;
    let wordStreak = 0;
    let score = 0;
    for ( ; index < wordListArray.length; index++) {
        console.log(index);
        console.log(userInputArray.length);
        const letter = wordListArray[index];
        if (index > userInputArray.length || index < 0) {
            break;
        }
        if (letter === ' ') {
            wordStreak++;
        }
        if (wordListArray[index - 1] !== userInputArray[index - 1]) {
            wordStreak = 0;
        }
        if (letter === userInputArray[index]) {
            score++;
            highlightedLetters.push(<span className="right-highlight">{letter}</span>);
        } else if (index === userInputArray.length) {
            console.log('current!!');
            highlightedLetters.push(<span className="current-highlight">{letter}</span>);
        } else {
            highlightedLetters.push(<span className="wrong-highlight">{letter}</span>);
        }
    }
    for ( ; index < wordListArray.length; index++) {
        const letter = wordListArray[index];
        highlightedLetters.push(<span className="grey">{letter}</span>);
    }

    return (
        <div>
            <div className="main">
                <div className="wordbox">
                    {_.map(highlightedLetters)}
                </div>
            </div>
            <InfoBar timer={timer} streak={wordStreak} score={score}/>
        </div>
    );
};

WordBox.propTypes = {
    wordList: PropTypes.array,
    userInput: PropTypes.array,
    timer: PropTypes.number
};

export default WordBox;
