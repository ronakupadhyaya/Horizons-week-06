import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import InfoBar from '../components/InfoBar';
import { startGame, decrementTimer, endGame, addChar, nextWord, correctGuess, badGuess, addToStreakCount, cancelStreak} from '../actions/index';


class GameContainer extends React.Component {
    onInput(char) {
        const ci = this.props.currentIndex;
        const wordList = this.props.wordList;
        const userCurrWordIndex = ci[0];
        const userCurrCharIndex = ci[1];
        this.props.onStartGame();
        // this.intervalId = setInterval(() => {
        //     this.props.timeLeft === 0 ? this.props.onEndGame() : this.props.onDecrementTimer();
        // }, 1000);
        if (this.props.timeLeft > 0) {
            if (char === ' ') {
                this.props.onNextWord();
                let isStreak = true;
                const currWord = wordList[userCurrWordIndex];
                for (let i = 0; i < currWord.length; i++) {
                    if (this.props.userInput[userCurrWordIndex][i] !== wordList[userCurrWordIndex][i]) {
                        isStreak = false;
                    }
                }
                if (isStreak) {
                    this.props.onAddToStreakCount();
                }
            } else {
                this.props.onAddChar(char);
                if (char === wordList[userCurrWordIndex][userCurrCharIndex]) {
                    this.props.onCorrectGuess();
                } else {
                    this.props.onBadGuess();
                    console.log('streak count', this.props.streakCount[0]);
                    this.props.onCancelStreak(this.props.streakCount[0]);
                }
            }
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
                        onCorrectGuess={() => this.props.onCorrectGuess()}
                        onBadGuess={() => this.props.onBadGuess()}
                    />
                </div>
                <div className="textBox">
                    <TextBox
                        onInput={(input) => this.onInput(input)}
                    />
                </div>
                <div className="infoBar">
                    <InfoBar
                        timeLeft={this.props.timeLeft}
                        totalScore={this.props.totalScore}
                        streakCount ={this.props.streakCount}
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
    streakCount: PropTypes.array,
    onEndGame: PropTypes.func,
    onStartGame: PropTypes.func,
    onDecrementTimer: PropTypes.func,
    onAddChar: PropTypes.func,
    currentIndex: PropTypes.array,
    userInput: PropTypes.array,
    onNextWord: PropTypes.func,
    onCorrectGuess: PropTypes.func,
    onBadGuess: PropTypes.func,
    onAddToStreakCount: PropTypes.func,
    onCancelStreak: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        wordList: state.wordList,
        timeLeft: state.timeLeft,
        currentIndex: state.currentIndex,
        totalScore: state.totalScore,
        streakCount: state.streakCount,
        userInput: state.userInput,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onStartGame: () => dispatch(startGame()),
        onDecrementTimer: () => dispatch(decrementTimer()),
        onEndGame: () => dispatch(endGame()),
        onAddChar: (char) => dispatch(addChar(char)),
        onNextWord: () => dispatch(nextWord()),
        onCorrectGuess: () => dispatch(correctGuess()),
        onBadGuess: () => dispatch(badGuess()),
        onAddToStreakCount: () => dispatch(addToStreakCount()),
        onCancelStreak: (streakPoints) => dispatch(cancelStreak(streakPoints)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
