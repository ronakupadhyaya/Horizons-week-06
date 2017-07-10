import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import InfoBar from '../components/InfoBar';

import { startGame, timer, endGame, typing } from '../actions/index';

class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wordCount: 0,
            streakCount: 0
        };
        this.onInput = this.onInput.bind(this);
        this.onTypingMain = this.onTypingMain.bind(this);
        // this.setScore = this.setScore.bind(this);
        // this.setStreak = this.setStreak.bind(this);
    }

    onInput() {
        this.intervalId = setInterval(() => {
            if (this.props.timer === 0) {
                this.props.onEndGame();
                clearInterval(this.intervalId);
            } else {
                this.props.onTimer();
            }
        }, 1000);
    }
// let's try again
    onTypingMain(input) {
        // dispatch action
        this.props.onTyping(input);

        // Calculate streak
        // Go through each user input
        let streakFind = 0;
        let streakCount = 1;
        this.props.userInput.forEach((word, index) => {
            // If there is an actual word (not just empty space)
            if (!!word.trim()) {
                // If that word is equal to a corresponding word in the box
                if (word.trim() === this.props.wordList[index]) {
                    // Add one to the streak
                    streakFind++;
                    // If the streak is now greater, update the streak
                    if(streakFind > streakCount) {
                        streakCount = streakFind;
                    }
                    // If you the streak gets interupted, set the finder to zero
                } else {
                    streakFind = 0;
                }
            }
        });

        // now calculate wordCount
        // calculate wordCount
        let wordCount = 0;
        this.props.wordList.map((word, index) => {
            if (!!this.props.userInput[index]) {
                if(word === this.props.userInput[index].trim()) {
                    wordCount += 1;
                }
            }
        });

        this.setState({
            streakCount: streakCount,
            wordCount: wordCount
        });
    }

    // setScore(score) {
    //     this.setState({ wordCount: score });
    // }
    // setStreak(streak) {
    //     this.setState({ streakCount: streak });
    // }

    render() {
        return (
            <div>
                <WordBox
                  wordList={this.props.wordList}
                  userInput={this.props.userInput}
                  // setScore={this.setScore}
                  // setStreak={this.setStreak}
                />
                <TextBox
                  onInput={this.onInput}
                  onTyping={this.onTypingMain}
                />
                <InfoBar
                  timer={this.props.timer}
                  score={this.state.wordCount}
                  streak={this.state.streakCount}
                />
            </div>
        );
    }
}

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    timer: PropTypes.number,
    onInput: PropTypes.func,
    wordList: PropTypes.array,
    onStartGame: PropTypes.func,
    onTimer: PropTypes.func,
    onEndGame: PropTypes.func,
    onTyping: PropTypes.func,
    userInput: PropTypes.array,
    setScore: PropTypes.func,
    setStreak: PropTypes.func,
};

// do you have slack on your phone?
//yup phone call through slack, this is weird hahaha jo is staring cause i am
speaking without
// audio
//haha what?

const mapStateToProps = (state) => {
    return {
        wordList: state.wordList,
        timer: state.timer,
        userInput: state.userInput
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onStartGame: () => {
            dispatch(startGame());
        },
        onTimer: () => {
            dispatch(timer());
        },
        onEndGame: () => {
            dispatch(endGame());
        },
        onTyping: (letters) => {
            dispatch(typing(letters));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
