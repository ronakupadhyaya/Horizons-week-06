import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WordBox extends React.Component {
    render() {
        const userInput = this.props.userInput;
        return (
            <div className="wordbox">
                {this.props.wordList.map((word, wordIndex) => <span key={wordIndex}>{word.split('').map((char, charIndex) => {
                    if (!userInput[wordIndex] ||
                        (userInput[wordIndex] &&
                        !userInput[wordIndex][charIndex]) &&
                        !userInput[wordIndex + 1]) {
                        return (<span key={charIndex} className="inactive">{char}</span>);
                    } else if (userInput[wordIndex] &&
                        userInput[wordIndex][charIndex] === char) {
                        return (<span key={charIndex} className="correct">{char}</span>);
                    }
                    return (<span key={charIndex} className="wrong">{char}</span>);
                })} </span>)}
            </div>
        );
    }
}

WordBox.propTypes = {
    wordList: PropTypes.array,
    userInput: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        wordList: state.wordList,
        userInput: state.userInput,
    };
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WordBox);
