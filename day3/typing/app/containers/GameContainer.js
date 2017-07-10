import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import InfoBar from '../components/InfoBar';


class GameContainer extends React.Component {
    onInput(input) {
        const char = input[input.length - 1];
        if (this.props.timer === 0) {
            this.props.onStart();
            this.intervalId = setInterval(() => {
                if (this.props.timer === 0) {
                    this.props.onEnd();
                    clearInterval(this.intervalId);
                } else {
                    this.props.onDecrement();
                }
            }, 1000);
        }
        if (char === ' ') {
            this.props.onNextWord();
        } else {
            this.props.onNextChar(input);
        }
    }
    render() {
        return (
          <div>
                <WordBox wordList={this.props.wordList} userInput={this.props.userInput} currentIndex={this.props.currentIndex}/>
                <TextBox onType={(input) => this.onInput(input)} />
                <InfoBar timer={this.props.timer} streak={this.props.streak}
                  score={this.props.score}/>
          </div>
      );
    }
}

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    onInput: PropTypes.func,
    wordList: PropTypes.array,
    timer: PropTypes.number,
    streak: PropTypes.number,
    score: PropTypes.number,
    onStart: PropTypes.func,
    onDecrement: PropTypes.func,
    onEnd: PropTypes.func,
    userInput: PropTypes.array,
    onNextChar: PropTypes.func,
    onNextWord: PropTypes.func,
    currentIndex: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        wordList: state.gameState.wordList,
        timer: state.gameState.timer,
        streak: state.gameState.streak,
        score: state.gameState.score,
        userInput: state.gameState.userInput,
        currentIndex: state.gameState.currentIndex
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onStart: () => dispatch({type: 'START_GAME'}),
        onDecrement: () => dispatch({type: 'DECREMENT_TIMER'}),
        onEnd: () => dispatch({type: 'END_GAME'}),
        onNextChar: (input) => dispatch({type: 'CHAR_ADDED', input}),
        onNextWord: () => dispatch({type: 'NEXT_WORD'})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
