import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import InfoBar from '../components/InfoBar';

class GameContainer extends React.Component {

    onInput(input) {
        // YOUR ON INPUT FUNCTION HERE
        console.log('users typing', input, input.value);
        const val = input.value;
        if(val.length > 0) {
            if(val[val.length - 1] !== ' ') {
                console.log('user inputed space, about to trigger charadded action');
                this.props.onNewChar(val); // THIS SHOULD call with new word as payload
            } else {
                input.value = '';
                this.props.onNextWord(input);
            }
        }
    }

    render() {
        return (
            <div>
                I am the game container!
                <WordBox wordList={this.props.wordList} userInput={this.props.userInput} currentIndex={this.props.currentIndex}/>
                {/* <div className="scoring score">Score: </div> */}
                <TextBox onInput={(input) => this.onInput(input)} onStartTyping={() => this.onUserTyping}/>
                {/* <div className="scoring">
                    <div className="timer">Time Remaining: </div>
                    <div className="wordstreak">Word Streak: </div>
                </div> */}
                <InfoBar />
                {
                    // YOUR GAME COMPONENT HERE
                }

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
    onNextWord: PropTypes.func

};

const mapStateToProps = (state) => {
    return {
        wordList: state.wordTracking.wordList,
        onUserTyping: PropTypes.func,
        userInput: state.wordTracking.userInput,
        currentIndex: state.wordTracking.currentIndex,
        totalScore: state.totalScore,
        streakCount: state.streakCount
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
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
