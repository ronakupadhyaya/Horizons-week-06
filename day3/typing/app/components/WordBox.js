import React from 'react';
import PropTypes from 'prop-types';

class WordBox extends React.Component {
    constructor(props) {
        super(props);
        console.log('in constructor');
        const initialJSX = this.props.wordList.map((word, wIndex) => <span key={wIndex}>{word.split('').map((char, cIndex) => (<span key={cIndex} className="inactive">{char}</span>))}</span>);
        console.log(initialJSX);
        this.state = {
            jsx: [initialJSX]
        };
    }

    render() {
        console.log('jsx', this.state.jsx);
        console.log('hi');
        return (
            // <div className="wordbox">{this.state.jsx}</div>
            <div className="wordbox">
                {this.props.wordList.map((word, wordIndex) => <span>{word.split('').map((char, charIndex) => {
                    console.log('user letter', );
                    if (!this.props.userInput[wordIndex] || this.props.userInput[wordIndex] && !this.props.userInput[wordIndex][charIndex]) {
                        return (<span className="inactive">{char}</span>);
                    } else if (this.props.userInput[wordIndex] && this.props.userInput[wordIndex][charIndex] === char) {
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
    userInput: PropTypes.array
};

export default WordBox;
