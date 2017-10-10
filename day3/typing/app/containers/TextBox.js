import React from 'react';
import { connect } from 'react-redux';

function TextBox({userInput, nextChar, nextWord}) {
    function keyPress(e) {
        const letter = String.fromCharCode(e.which);
        if (letter === ' ') {
            nextWord();
        } else {
            nextChar(letter);
        }
    }

    return (
        <div className="text-box">
            <input type="text" value={userInput} onKeyPress={keyPress}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        userInput: state.game.userInput
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        nextChar: (c) => dispatch({type: 'CHAR_ADDED', letter: c}),
        nextWord: () => dispatch({type: 'NEXT_WORD'})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TextBox);
