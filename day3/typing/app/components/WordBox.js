import React from 'react';
import PropTypes from 'prop-types';

class WordBox extends React.Component {
    render() {
        const userInput = this.props.userInput;
        return (
            <div className="wordbox">
                {this.props.wordList.map((word, wordIndex) => <span>{word.split('').map((char, charIndex) => {
                    if (!userInput[wordIndex] ||
                        userInput[wordIndex] &&
                        !userInput[wordIndex][charIndex]) {
                        return (<span className="inactive">{char}</span>);
                    } else if (userInput[wordIndex] &&
                        userInput[wordIndex][charIndex] === char) {
                        return (<span className="correct">{char}</span>);
                    }
                    return (<span className="wrong">{char}</span>);
                })} </span>)}
            </div>
        );
    }
}

WordBox.propTypes = {
    wordList: PropTypes.array,
    userInput: PropTypes.array,
    onCorrectGuess: PropTypes.func,
    onBadGuess: PropTypes.func
};

export default WordBox;
