import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import InputLine from '../components/InputLine';
import InfoBar from '../components/InfoBar1';

class GameContainer extends React.Component {

    onInput(input) {
        // YOUR ON INPUT FUNCTION HERE

        // score logic
        let a = this.props.wordList;
        a = a.join(' ');
        a = a.split('');
        const newl = input[input.length - 1];
        this.props.addInput(newl);
        if(newl === a[this.props.currentIndex]) {
            console.log('up');
            this.props.scoreUp();
        }else{
            console.log('down');
            // this.props.scoreDown();
        }

        // timer logic
        let interval;
        if(this.props.time === 60) {
            this.props.startGame();
            interval = setInterval(function temp() {
                this.props.decrementTimer();
                if (this.props.time === 0) {
                    this.props.endGame();
                    clearInterval(interval);
                }
            }.bind(this), 1000);
        }

        // streak logic

        if(newl === ' ') {
            const length = a.indexOf(' ', this.props.currentIndex + 1) - this.props.currentIndex;
            if(this.props.streak.length + this.props.streak.startScore === this.props.score) {
                this.props.hitStreak(this.props.score, length);
            }else {
                for(let i = 0; i < this.props.streak.amount; i++) {
                    this.props.scoreUp();
                }
                this.props.resetStreak(this.props.score, length);
            }
        }
    }

    render() {
        return (
            <div>
                I am the game container!
                <WordBox wordList={this.props.wordList} userInput={this.props.userInput}/>
                <InputLine infunction={(input)=>this.onInput(input)} />
                <InfoBar time={this.props.time} score={this.props.score}/>
            </div>
        );
    }
}

GameContainer.propTypes = {
    wordList: PropTypes.array,
    startGame: PropTypes.func,
    decrementTimer: PropTypes.func,
    time: PropTypes.number,
    endGame: PropTypes.func,
    score: PropTypes.number,
    userInput: PropTypes.array,
    addInput: PropTypes.func,
    nextWord: PropTypes.func,
    scoreUp: PropTypes.func,
    scoreDown: PropTypes.func,
    currentIndex: PropTypes.number,
    streak: PropTypes.obj,
    hitStreak: PropTypes.func,
    resetStreak: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        // YOUR MAP STATE TO PROPS HERE
        wordList: state.game,
        time: state.time,
        score: state.score,
        userInput: state.userInput,
        currentIndex: state.currentIndex,
        streak: state.streak
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startGame: ()=>{
            dispatch({type: 'START_GAME'});
        },
        endGame: ()=>{
            dispatch({type: 'END_GAME'});
        },
        decrementTimer: ()=>{
            dispatch({type: 'DECREMENT_TIMER'});
        },
        addInput: (letter)=>{
            dispatch({type: 'CHAR_ADDED', letter: letter});
        },
        scoreUp: ()=>{
            dispatch({type: 'UP_SCORE'});
        },
        scoreDown: ()=>{
            dispatch({type: 'DOWN_SCORE'});
        },
        hitStreak: (startScore, length)=>{
            dispatch({type: 'STREAK_HIT', startScore: startScore, length: length });
        },
        resetStreak: (startScore, length)=>{
            dispatch({type: 'STREAK_RESET', startScore: startScore, length: length});
        },

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
