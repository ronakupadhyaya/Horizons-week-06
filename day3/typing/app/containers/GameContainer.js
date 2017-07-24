import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import WordBox from '../components/WordBox';
import InfoBar from '../components/InfoBar';

import {
  startGame,
  endGame,
  decrementTimer,
  characterAdded,
  nextWord,
} from '../actions/index';

class GameContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            intervalId: '',
        };

        this.onInput = this.onInput.bind(this);
    }

    componentWillReceiveProps() {
        if (this.props.isGameStarted && this.props.timerValue <= 0) {
            clearInterval(this.state.intervalId);
            this.props.endGame();
        }
    }

    onInput(input) {
        // YOUR ON INPUT FUNCTION HERE
        if (!this.props.isGameStarted) {
            this.props.startGame();
            this.setState({
                intervalId: setInterval(this.props.decrementTimer, 1000)
            });
        } else if (input[input.length - 1] === ' ') {
            this.props.nextWord();
        } else {
            this.props.characterAdded(input);
        }
    }

    render() {
        return (
            <div>
                I am the game container!
                {' '}
                <InfoBar timerValue={this.props.timerValue} />
                <WordBox wordList={this.props.wordList} inputList={this.props.inputList} onInput={this.onInput} currentInput={this.props.currentInput} />
            </div>
        );
    }
}

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onInput: PropTypes.func,
    wordList: PropTypes.array,
    inputList: PropTypes.array,
    isGameStarted: PropTypes.bool,
    startGame: PropTypes.func,
    endGame: PropTypes.func,
    decrementTimer: PropTypes.func,
    timerValue: PropTypes.number,
    currentInput: PropTypes.string,
    characterAdded: PropTypes.func,
    nextWord: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        wordList: state.game.wordList,
        inputList: state.game.inputList,
        isGameStarted: state.game.isGameStarted,
        timerValue: state.game.timerValue,
        currentInput: state.game.currentInput,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
        startGame: () => dispatch(startGame()),
        endGame: () => dispatch(endGame()),
        decrementTimer: () => dispatch(decrementTimer()),
        characterAdded: (word) => dispatch(characterAdded(word)),
        nextWord: () => dispatch(nextWord()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GameContainer);
