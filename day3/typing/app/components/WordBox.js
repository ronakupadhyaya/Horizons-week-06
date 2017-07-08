import React from 'react';
import PropTypes from 'prop-types';

const WordBox = ({ wordList, userInput, currentIndex }) => {
    const wordIndex = currentIndex[0];
    const letterIndex = currentIndex[1];
    let currentLetter = '';
    if (letterIndex > 0) {
        currentLetter = userInput[wordIndex][letterIndex];
    }
    const currentWord = userInput[wordIndex];
    console.log(currentWord);

    return (
        <div className="main">
            <div className="wordbox">
                 {wordList.map(word => {
                     const charArr = word.split('');
                     return (<span>
                           {charArr.map(char => {
                               console.log(char);
                               let elt;
                               if (currentLetter === char) {
                                   elt = <span className="correct">{char}</span>;
                               } else if (currentLetter === '') {
                                   elt = <span className="inactive">{char}</span>;
                               } else if (currentLetter !== char) {
                                   elt = <span className="wrong">{char}</span>;
                               }
                               return elt;
                           })}
                     <span>{' '}</span></span>);
                 })}
            </div>
        </div>
    );
};

WordBox.propTypes = {
    wordList: PropTypes.array,
    currentIndex: PropTypes.array,
    userInput: PropTypes.array
};

export default WordBox;
