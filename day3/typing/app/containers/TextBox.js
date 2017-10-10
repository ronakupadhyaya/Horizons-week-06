import React from 'react';
import { connect } from 'react-redux';

function TextBox({userInput, start, nextChar, gameStarted, nextWord}) {
    let interval;
    function keyPress(e) {
        if (! gameStarted) {
            start();
        } else {
            const letter = String.fromCharCode(e.which);
            if (letter === ' ') {
                nextWord();
            } else {
                nextChar(letter);
            }
        }
    }

    return (
        <div className="text-box">
            <input type="text"
                value={userInput}
                onKeyPress={keyPress}
                placeholder={gameStarted ? '' : 'Type something to begin...'}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        userInput: state.game.userInput,
        gameStarted: state.game.gameStarted
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        nextChar: (c) => dispatch({type: 'CHAR_ADDED', letter: c}),
        nextWord: () => dispatch({type: 'NEXT_WORD'}),
        start: () => dispatch({type: 'START_GAME'}),
        tick: () => dispatch({type: 'INCREMENT_TIMER'})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TextBox);
