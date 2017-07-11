import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import WordBox from '../components/WordBox.js';
import TextBox from '../components/TextBox.js';
import InfoBar from '../components/InfoBar.js';

class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onInput = this.onInput.bind(this);
        this.state = {
            playing: true
        };
    }
    onInput(input) {
        const newWordList = this.props.wordList.map((word)=>word + '+');
        const currentLetter = newWordList[this.props.currentIndex][this.props.currentWordIndex];
        if (this.props.timer === 0) {
            this.props.startGame();
            const timeInterval = setInterval(() => {
                this.props.decrementTimer();
                if (this.props.timer === 0) {
                    this.props.endGame();
                    clearInterval(timeInterval);
                    this.setState({playing: false});
                }
            }, 1000);
        }
        if (input === ' ' && currentLetter === '+') {
            if (this.props.streakWord) {
                this.props.keepStreak();
            }else{
                this.props.endStreak();
            }
            this.props.nextWord(input);
        }else if (input === currentLetter) {
            this.props.addScore();
            this.props.nextLetter(input);
        }else{
            this.props.endStreak();
            this.props.nextLetter(input);
        }
    }
    render() {
        if (!this.state.playing) {
            return(
              <Redirect to="/end" />
            );
        }
        return (
            <div>
                <div>You will have 60 seconds to type as many words as possible</div>
                <div style={{'fontSize': '15px', 'fontStyle': 'italic'}}>To start, simply start typing in the text box below!</div>
                <WordBox wordList={this.props.wordList} inputLetters={this.props.inputLetters} addScore={this.addScore}/>
                <InfoBar timer={this.props.timer} score={this.props.score} streak={this.props.streak}/>
                <TextBox onInput={this.onInput} />
                {
                    // YOUR GAME COMPONENT HERE
                }
            </div>
        );
    }
}

GameContainer.propTypes = {
    streakWord: PropTypes.bool,
    timer: PropTypes.number,
    score: PropTypes.number,
    streak: PropTypes.number,
    currentIndex: PropTypes.number,
    currentWordIndex: PropTypes.number,
    wordList: PropTypes.array,
    inputLetters: PropTypes.array,
    onInput: PropTypes.func,
    decrementTimer: PropTypes.func,
    startGame: PropTypes.func,
    endGame: PropTypes.func,
    keepStreak: PropTypes.func,
    endStreak: PropTypes.func,
    addScore: PropTypes.func,
    nextWord: PropTypes.func,
    nextLetter: PropTypes.func,
    restart: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        wordList: state.gameReducer.wordList,
        inputLetters: state.gameReducer.inputLetters,
        currentIndex: state.gameReducer.currentIndex,
        currentWordIndex: state.gameReducer.currentWordIndex,
        streakWord: state.gameReducer.streakWord,
        timer: state.timerReducer,
        score: state.scoreReducer.score,
        streak: state.scoreReducer.streak
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startGame: () => dispatch({type: 'START_GAME'}),
        decrementTimer: () => dispatch({type: 'DECREMENT_TIMER'}),
        endGame: () => dispatch({type: 'END_GAME'}),
        keepStreak: () => dispatch({type: 'ADD_STREAK'}),
        endStreak: () => dispatch({type: 'END_STREAK'}),
        addScore: () => dispatch({type: 'ADD_SCORE'}),
        nextWord: (input) => dispatch({type: 'NEXT_WORD', input}),
        nextLetter: (input) => dispatch({type: 'NEXT_LETTER', input}),
        restart: () => dispatch({type: 'RESTART_GAME'})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
