import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import WordBox from '../components/WordBox.js';
import TextBox from '../components/TextBox.js';
import InfoBar from '../components/InfoBar.js';

import { startGame, timer, endGame } from '../actions/index';

class GameContainer extends React.Component {
    onInput() {
        // YOUR ON INPUT FUNCTION HERE
        this.props.onStartGame();
        this.intervalId = setInterval(() => {
            if(this.props.timer === 0) {
                this.props.onEndGame();
                clearInterval(this.intervalId);
            }else {
                this.props.onTimer();
            }
        }, 1000);
=======

class GameContainer extends React.Component {
    onInput(input) {
        // YOUR ON INPUT FUNCTION HERE
>>>>>>> 442651ce66adbdb2ac1a491b5a808af3d8ab4e8a
    }

    render() {
        return (
            <div>
                I am the game container!
<<<<<<< HEAD
                <WordBox wordList={this.props.wordList} />
                <TextBox onInput={this.onInput.bind(this)} />
                <InfoBar timer={this.props.timer}/>
=======
                {
                    // YOUR GAME COMPONENT HERE
                }
>>>>>>> 442651ce66adbdb2ac1a491b5a808af3d8ab4e8a
            </div>
        );
    }
}

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
<<<<<<< HEAD
    onInput: PropTypes.func,
    wordList: PropTypes.array,
    onStartGame: PropTypes.func,
    onTimer: PropTypes.func,
    onEndGame: PropTypes.func,
    timer: PropTypes.number
=======
    onInput: PropTypes.func
>>>>>>> 442651ce66adbdb2ac1a491b5a808af3d8ab4e8a
};

const mapStateToProps = (state) => {
    return {
        // YOUR MAP STATE TO PROPS HERE
<<<<<<< HEAD
        wordList: state.wordList,
        timer: state.timer
=======
>>>>>>> 442651ce66adbdb2ac1a491b5a808af3d8ab4e8a
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
<<<<<<< HEAD
        onStartGame: () => {
            dispatch(startGame());
        },
        onTimer: () => {
            dispatch(timer());
        },
        onEndGame: () => {
            dispatch(endGame());
        }
=======
>>>>>>> 442651ce66adbdb2ac1a491b5a808af3d8ab4e8a
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
