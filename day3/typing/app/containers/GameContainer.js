import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import InfoBar from '../components/InfoBar';
import { startGame, decrementTimer, endGame, addChar, nextWord } from '../actions/index';


class GameContainer extends React.Component {
    onInput(char) {
        console.log('input in gc', char);
        this.props.onStartGame();
        // this.intervalId = setInterval(() => {
        //     this.props.timeLeft === 0 ? this.props.onEndGame() : this.props.onDecrementTimer();
        // }, 1000);
        if (this.props.timeLeft > 0) {
            char === ' ' ? this.props.onNextWord() : this.props.onAddChar(char);
        }
    }

    render() {
        return (
            <div>
                <div className="main">
                    <h1>I am the game container!</h1>
                </div>
                <div className="wordBox">
                    <WordBox
                        wordList={this.props.wordList}
                        userInput={this.props.userInput}
                    />
                </div>
                <div className="textBox">
                    <TextBox onInput={(input) => this.onInput(input)}/>
                </div>
                <div className="infoBar">
                    <InfoBar
                        time={this.props.timeLeft}
                        score={this.props.totalScore}
                        wordStreak ={this.props.streakCount}
                    />
                </div>
            </div>
        );
    }
}

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onInput: PropTypes.func,
    wordList: PropTypes.array,
    timeLeft: PropTypes.number,
    totalScore: PropTypes.number,
    streakCount: PropTypes.number,
    onEndGame: PropTypes.func,
    onStartGame: PropTypes.func,
    onDecrementTimer: PropTypes.func,
    onAddChar: PropTypes.func,
    currentIndex: PropTypes.array,
    userInput: PropTypes.array,
    onNextWord: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        wordList: state.wordList,
        timeLeft: state.timeLeft,
        currentIndex: state.currentIndex,
        totalScore: state.score,
        streakCount: state.wordStreak,
        userInput: state.userInput,
        badGuesses: state.badGuesses,
        correctGuesses: state.correctGuesses
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onStartGame: () => dispatch(startGame()),
        onDecrementTimer: () => dispatch(decrementTimer()),
        onEndGame: () => dispatch(endGame()),
        onAddChar: (char) => dispatch(addChar(char)),
        onNextWord: () => dispatch(nextWord())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
