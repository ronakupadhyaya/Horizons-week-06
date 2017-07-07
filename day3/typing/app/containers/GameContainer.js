import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import InfoBar from '../components/InfoBar';
import { startGame, decrementTimer, endGame } from '../actions/index';

class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.timer = -1;
    }

    onInput(input) {
        if(this.timer < 0) {
            // this.props.onStartGame();
            this.timer = setInterval(() => {
                if (this.props.timeLeft === 0) {
                    // this.props.onEndGame();
                    clearInterval(this.timer);
                    this.timer = -1;
                } else {
                    // this.props.onDecrementTimer()
                }
            }, 1000);
        }
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <div className="main">
                    <h1>I am the game container!</h1>
                </div>
                <div className="main">
                    <WordBox wordList={this.props.wordList}/>
                </div>
                <div className="main">
                    <TextBox handleTyping={(input) => this.onInput(input)}/>
                </div>
                <div className="main">
                    <InfoBar time={this.props.timeLeft} score={this.props.score} wordStreak ={this.props.wordStreak}/>
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
    score: PropTypes.number,
    wordStreak: PropTypes.number
};

const mapStateToProps = (state) => {
    return {
        wordList: state.wordList,
        timeLeft: state.timeLeft,
        currentIndex: state.currentIndex,
        score: state.score,
        wordStreak: state.wordStreak
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onStartGame: () => dispatch(startGame()),
        onDecrementTimer: () => dispatch(decrementTimer()),
        onEndGame: () => dispatch(endGame())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
