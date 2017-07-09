import React from 'react';
import PropTypes from 'prop-types';

const WordBox = ({ wordList, userInput, currentIndex }) => {
    // const wordIndex = currentIndex[0];
    // const letterIndex = currentIndex[1];
    let letterBool = null;

    for(let i = 0; i < wordList.length; i++) {
        for(let j = 0; j < wordList[i].length; j++) {
            if (userInput[i]) {
                console.log(wordList[i][j]);
                if (userInput[currentIndex[0]][currentIndex[1]] === wordList[i][j]) {
                    letterBool = true;
                } else {
                    letterBool = false;
                }
            }
        }
    }

    return (
        <div className="main">
            <div className="wordbox">
                 {wordList.map(word => {
                     const charArr = word.split('');
                     return (<span>
                           {charArr.map(char => {
                               let elt;
                               if (letterBool) {
                                   elt = <span className="correct">{char}</span>;
                               } else if (letterBool === null) {
                                   elt = <span className="inactive">{char}</span>;
                               } else if (letterBool === false) {
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
