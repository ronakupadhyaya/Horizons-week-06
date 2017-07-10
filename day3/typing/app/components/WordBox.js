import React from 'react';
import PropTypes from 'prop-types';

const WordBox = ({ wordList, userInput }) => {
    const html = [];
    for(let i = 0; i < wordList.length; i++) {
        for(let j = 0; j < wordList[i].length; j++) {
            if (userInput.length > 0) {
                if (userInput.length > i && userInput[i].length > j) {
                    if(userInput[i][j] === wordList[i][j]) {
                        // character matches
                        html.push(<span className="correct">{wordList[i][j]}</span>);
                    } else {
                        // character does not match
                        html.push(<span className="wrong">{wordList[i][j]}</span>);
                    }
                } else {
                    // no character inputted
                    html.push(<span className="inactive">{wordList[i][j]}</span>);
                }
            } else {
                // if userInput is empty, push all letters to be inactive
                html.push(<span className="inactive">{wordList[i][j]}</span>);
            }
        }
        // push a space after every letter in wordList
        html.push(<span className="inactive">{' '}</span>);
    }

    return (
        <div className="main">
            <div className="wordbox">
              {html}
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
