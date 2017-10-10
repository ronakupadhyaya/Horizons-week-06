import React from 'react';
import { connect } from 'react-redux';


class TextBox extends React.Component {
    tick() {
        if (this.props.currentTime <= 0) {
            this.props.endGame();
            clearInterval(this.interval);
            this.interval = null;
        } else {
            this.props.incrementTimer();
        }
    }

    keyPress(e) {
        if (! this.props.gameStarted) {
            this.props.start();
            this.interval = setInterval(this.tick.bind(this), 1000);
        } else {
            const letter = String.fromCharCode(e.which);
            if (letter === ' ') {
                this.props.nextWord();
            } else {
                this.props.nextChar(letter);
            }
        }
    }

    render() {
        const {userInput, gameStarted} = this.props;

        return (
            <div className="text-box">
                <input type="text"
                    value={userInput}
                    onKeyPress={this.keyPress.bind(this)}
                    placeholder={gameStarted ? '' : 'Type something to begin...'}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userInput: state.game.userInput,
        gameStarted: state.game.gameStarted,
        currentTime: state.game.currentTime
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        nextChar: (c) => dispatch({type: 'CHAR_ADDED', letter: c}),
        nextWord: () => dispatch({type: 'NEXT_WORD'}),
        start: () => dispatch({type: 'START_GAME'}),
        endGame: () => dispatch({type: 'END_GAME'}),
        incrementTimer: () => dispatch({type: 'INCREMENT_TIMER'})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TextBox);
