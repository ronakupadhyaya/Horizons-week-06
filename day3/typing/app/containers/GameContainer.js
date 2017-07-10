import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
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
    }

    render() {
        return (
            <div>
                I am the game container!
                <WordBox wordList={this.props.wordList} />
                <TextBox onInput={this.onInput.bind(this)} />
                <InfoBar timer={this.props.timer}/>
            </div>
        );
    }
}

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onInput: PropTypes.func,
    wordList: PropTypes.array,
    onStartGame: PropTypes.func,
    onTimer: PropTypes.func,
    onEndGame: PropTypes.func,
    timer: PropTypes.number
};

const mapStateToProps = (state) => {
    return {
        // YOUR MAP STATE TO PROPS HERE
        wordList: state.wordList,
        timer: state.timer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
        onStartGame: () => {
            dispatch(startGame());
        },
        onTimer: () => {
            dispatch(timer());
        },
        onEndGame: () => {
            dispatch(endGame());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
