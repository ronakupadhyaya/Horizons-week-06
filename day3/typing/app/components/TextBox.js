import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';


const TextBox = ({ userInput, currentIndex, addChar, nextWord, startGame, timeLeft, decrement, endGame }) => {
    let interval;
    function timeCheck() {
        console.log(timeLeft);
        if (timeLeft <= 0) {
            console.log('WTF');
            clearInterval(interval);
            endGame();
        }
    }
    const onInput = (val) => {
        if (currentIndex) {
            const v = val.trim();
            if (v) {
                addChar(v);
            } else {
                nextWord();
            }
        } else {
            startGame();
            interval = setInterval(() => {
                decrement();
                timeCheck();
            }, 1000);
        }
    };
    return (
        <input type="text" value={userInput}
          placeholder={currentIndex ? null : 'Type to start...'}
          onKeyPress={(event) => onInput(String.fromCharCode(event.which))}
        />
    );
};

TextBox.propTypes = {
    userInput: PropTypes.string,
    onInput: PropTypes.func,
    currentIndex: PropTypes.array,
    addChar: PropTypes.func,
    nextWord: PropTypes.func,
    startGame: PropTypes.func,
    timeLeft: PropTypes.number,
    decrement: PropTypes.func,
    endGame: PropTypes.func,
};

const mapStateToProps = state => ({
    currentIndex: state.game.currentIndex,
    userInput: state.userInput,
    timeLeft: state.timeLeft,
});

const mapDispatchToProps = dispatch => ({
    addChar: letter => dispatch({type: 'CHAR_ADDED', letter}),
    nextWord: () => dispatch({type: 'NEXT_WORD'}),
    startGame: () => dispatch({type: 'START_GAME'}),
    decrement: () => dispatch({type: 'DECREMENT_TIMER'}),
    endGame: () => dispatch({type: 'END_GAME'}),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextBox);
