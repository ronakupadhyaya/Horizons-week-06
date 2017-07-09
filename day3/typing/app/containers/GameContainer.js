import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/game_container_components/WordBox';
import TextBox from '../components/game_container_components/TextBox';
import InfoBar from '../components/game_container_components/InfoBar';
import {Redirect} from 'react-router-dom';
import { startGame, decrementTimer, addChar, nextWord, correctGuess, badGuess, addToStreakCount, cancelStreak} from '../actions/index';


class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnded: false
        };
    }

    componentDidMount() {
        this.intervalId = -1;
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    onInput(char) {
        const ci = this.props.currentIndex;
        const wordList = this.props.wordList;
        const userCurrWordIndex = ci[0];
        const userCurrCharIndex = ci[1];
        if (this.intervalId === -1 ) {
            this.props.onStartGame();
            this.intervalId = setInterval(() => {
                if (this.props.timeLeft === 0) {
                    this.props.onCancelStreak(this.props.streakCount[0]);
                    this.setState({isEnded: true});
                } else {
                    this.props.onDecrementTimer();
                }
            }, 1000);
        }
        if (char === ' ') {
            this.props.onNextWord();
            let isStreak = true;
            const currWord = wordList[userCurrWordIndex];
            for (let i = 0; i < currWord.length; i++) {
                if (this.props.userInput[userCurrWordIndex][i] !== wordList[userCurrWordIndex][i]) {
                    isStreak = false;
                    this.props.onBadGuess();
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
                this.props.onCancelStreak(this.props.streakCount[0]);
            }
        }
    }

    render() {
        if (this.state.isEnded) {
            if (!localStorage.getItem('leaders')) {
                return (<Redirect to="/register" />);
            } else {
                const leaders = JSON.parse(localStorage.getItem('leaders'));
                const leaderArray = Object.keys(leaders).map(key => leaders[key]);
                if (leaderArray.length < 10 ||
                    leaderArray.some(player => player.score < this.props.totalScore)) {
                    return (<Redirect to="/register" />);
                } else {
                    return (<Redirect to="/end" />);
                }
            }
        }
        return (
            <div>
                <h1>Typing Game</h1>
                <div className="wordBox">
                    <WordBox />
                </div>
                <div className="textBox">
                    <TextBox
                        onInput={(input) => this.onInput(input)}
                    />
                </div>
                <div className="infoBar">
                    <InfoBar />
                </div>
            </div>
        );
    }
}

GameContainer.propTypes = {
    wordList: PropTypes.array,
    timeLeft: PropTypes.number,
    currentIndex: PropTypes.array,
    streakCount: PropTypes.array,
    userInput: PropTypes.array,
    totalScore: PropTypes.number,
    onStartGame: PropTypes.func,
    onDecrementTimer: PropTypes.func,
    onAddChar: PropTypes.func,
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
        streakCount: state.streakCount,
        userInput: state.userInput,
        totalScore: state.totalScore
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onStartGame: () => dispatch(startGame()),
        onDecrementTimer: () => dispatch(decrementTimer()),
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
