import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import InfoBar from '../components/InfoBar';

class GameContainer extends React.Component {
    countStreak(correctWords) {
        const totalStreaks = [];
        let currentStreak = 0;
        let prevId = -2;
        for (let i = 0; i < correctWords.length; i++) {
            const wordDivId = parseInt(correctWords[i].id, 10);
            console.log(typeof prevId, typeof wordDivId, prevId, wordDivId);
            if(prevId + 1 !== wordDivId) {
                console.log('streak is over, pushing to total streaks', totalStreaks, currentStreak);
                totalStreaks.push(currentStreak);// += 1;
                currentStreak = 1;
            } else {
                currentStreak += 1;
                console.log('just incremeneted streak', currentStreak);
            }
            prevId = wordDivId;
        }
        console.log(totalStreaks);
        totalStreaks.splice(0, 1);
        const streakSum = totalStreaks.reduce((sum, val) => {
            const points = sum + ((2 * val + 1) / 2 );
            return points;
        }, 0);
        // console.log(streakSum);
        return streakSum;
    }

    onInput(input) {
        const correctLetters = document.getElementsByClassName('correctChar').length;
        const correctWords = document.getElementsByClassName('correctWord');
        const streakSum = this.countStreak(correctWords);
        this.props.onUpdateScore(this.countStreak(correctWords), 0);
        // console.log('streaksum in oninput', streakSum);
        // const streakSum = streakArray.reduce((sum, val) => sum + val, 0);
        console.log('the current streak is ', streakSum);
        if(this.props.userInput.length === 0) {
            this.props.onUserTyping();
            const timeInterval = setInterval(() => {
                // console.log('calling timer decrement', streakSum);
                this.props.onTimerDec();
                if (this.props.timeLeft === 0) {
                    this.props.onEndGame();
                    clearInterval(timeInterval);
                }
            }, 1000);
        }
        // console.log('number of spans with correct class', document.getElementsByClassName('correct').length);
        // console.log('TRYONG TO FIND START', this.props.userInput.length);
        // console.log('userInput', this.props.userInput, ' with current word of length ', input.value.length, 'at index [' + this.props.currentIndex[0], this.props.currentIndex[1] + ']');
        const val = input.value;
        // console.log('onInput current index [' + );
        if(val.length > 0) {
            if(val[val.length - 1] !== ' ') {
                this.props.onNewChar(val); // THIS SHOULD call with new word as payload
            } else {
                input.value = '';
                this.props.onNextWord(input);
            }
        }else {
            console.log('input value was size 0');
        }
    }

    render() {
        const correctLetters = document.getElementsByClassName('correctChar').length;
        const correctWords = document.getElementsByClassName('correctWord').length;
        return (
            <div>
                <div>{'Correct letters: ' + correctLetters}</div>
                <div>{'Correct Words: ' + correctWords}</div>
                I am the game container!
                <WordBox wordList={this.props.wordList} userInput={this.props.userInput}/>
                <TextBox onInput={(input) => this.onInput(input)} onStartTyping={() => this.onUserTyping}/>
                <InfoBar timeLeft={this.props.timeLeft} totalScore={this.props.totalScore} streakCount={this.props.streakCount}/>
            </div>
        );
    }
}

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onInput: PropTypes.func,
    wordList: PropTypes.array,
    onUserTyping: PropTypes.func,
    userInput: PropTypes.array,
    currentIndex: PropTypes.array,
    totalScore: PropTypes.number,
    streakCount: PropTypes.number,
    onNewChar: PropTypes.func,
    onNextWord: PropTypes.func,
    timeLeft: PropTypes.number,
    onTimerDec: PropTypes.func,
    onEndGame: PropTypes.func,
    onUpdateScore: PropTypes.func

};

const mapStateToProps = (state) => {
    return {
        wordList: state.wordTracking.wordList,
        onUserTyping: PropTypes.func,
        userInput: state.wordTracking.userInput,
        currentIndex: state.wordTracking.currentIndex,
        totalScore: state.scoreTime.totalScore,
        streakCount: state.scoreTime.streakCount,
        timeLeft: state.scoreTime.timeLeft
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUserTyping: () => {
            dispatch({type: 'START_GAME'});
        },
        onEndGame: () => {
            dispatch({type: 'END_GAME'});
        },
        onTimerDec: () => {
            dispatch({type: 'DECREMENT_TIMER'});
        },
        onNewChar: (input) => {
            dispatch({type: 'CHAR_ADDED', word: input});
        },
        onNextWord: (inputBox) => {
            dispatch({type: 'NEXT_WORD', inputBox: inputBox});
        },
        onUpdateScore: (streak, score) => {
            dispatch({type: 'CHANGE_SCORE', streak: streak, score: score});
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
