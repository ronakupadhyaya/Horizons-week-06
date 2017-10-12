import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import InfoBar from '../components/InfoBar';
import GameOver from '../components/GameOver';

class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onInput.bind(this);//
    }
    handleStart() {
        this.props.onStart();
        this.interval = setInterval(() => {
            this.props.onDecrement();
            if (this.props.timeLeft === 0 || (this.props.currentIndex[0] === this.props.wordList.length - 1 && this.props.currentIndex[1] === this.props.wordList[this.props.wordList.length - 1].length)) {
                clearInterval(this.interval);
                this.props.onEnd();
            }
        }, 1000);
    }
    onInput(input) {
        if (input === ' ') {
            this.props.onSpace();
        }else{
            this.props.onLetter(input);
        }
    }

    render() {
        return (
            <div>
                {this.props.gameOver ? <div><GameOver totalScore={this.props.totalScore}/></div> :
                  (<div>
                    <button className="startButton" onClick={() => this.handleStart()}>Start New Game</button>
                    <div className="wordbox"><WordBox wordList={this.props.wordList}/></div>
                    <div><TextBox currentIndex={this.props.currentIndex} userInput={this.props.userInput} input={(letter) => this.onInput(letter)}/></div>
                    <div><InfoBar timeLeft={this.props.timeLeft} totalScore={this.props.totalScore}/></div>
                  </div>)
                }
            </div>
        );
    }
}

GameContainer.propTypes = {
    wordList: PropTypes.array,
    currentIndex: PropTypes.array,
    userInput: PropTypes.string,
    onLetter: PropTypes.func,
    onSpace: PropTypes.func,
    timeLeft: PropTypes.number,
    onStart: PropTypes.func,
    onEnd: PropTypes.func,
    onDecrement: PropTypes.func,
    totalScore: PropTypes.number,
    gameOver: PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        wordList: state.gameReducer[0],
        currentIndex: state.gameReducer[1],
        userInput: state.gameReducer[2],
        timeLeft: state.gameReducer[3],
        totalScore: state.gameReducer[4],
        gameOver: state.gameReducer[5]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLetter: (letter) => dispatch({type: 'CHAR_ADDED', letter: letter}),
        onSpace: () => dispatch({type: 'NEXT_WORD'}),
        onStart: () => dispatch({type: 'START_GAME'}),
        onDecrement: () => dispatch({type: 'DECREMENT_TIMER'}),
        onEnd: () => dispatch({type: 'END_GAME'})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
