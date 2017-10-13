import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class TextBox extends React.Component {
    onInput(input) {
        if (this.props.currentIndex.wordIndex === 0 && this.props.currentIndex.letterIndex === 0) {
            this.props.startGame();
        }
        if (input === ' ') {
            this.props.newWord();
        } else {
            this.props.addChar(input);
        }
    }

    render() {
        return (
            <input
                type="text"
                value={this.props.userInput}
                onKeyPress={(e) => this.onInput(String.fromCharCode(e.which))}
            />
        );
    }
}

TextBox.propTypes = {
    userInput: PropTypes.string,
    currentIndex: PropTypes.object,
    addChar: PropTypes.func,
    newWord: PropTypes.func,
    startGame: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        userInput: state.game.userInput,
        currentIndex: state.game.currentIndex
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addChar: (input) => dispatch({type: 'ADD_CHAR', letter: input}),
        newWord: () => dispatch({type: 'NEW_WORD'}),
        startGame: () => dispatch({type: 'START_GAME'}),
    };
};

TextBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(TextBox);

export default TextBox;
