import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import InfoBar from '../components/InfoBar';
import * as actions from '../actions/index';

class GameContainer extends React.Component {
    onInput = (input) => {
        if (this.props.timer === 0) {
            this.props.startGame();
            const pid = setInterval(() => this.props.decrementTimer(), 1000);
            setTimeout(() => {
                clearInterval(pid);
                this.props.endGame();
            }, 60000);
        } else if (input.substring(input.length - 1) === ' ') {
            this.props.nextWord();
        } else {
            if (!this.props.userInput[this.props.currentIndex[0]] || input.length > this.props.userInput[this.props.currentIndex[0]].length) {
                this.props.addCharacter(input, this.props.streak, input.substring(input.length - 1) === this.props.wordList[this.props.currentIndex[0]][this.props.currentIndex[1]]);
            }
        }
    }

    render() {
        const value = this.props.userInput[this.props.userInput.length - 1];
        return (
            <div>
                <WordBox
                    wordList={this.props.wordList}
                    userInput={this.props.userInput}
                    currentIndex={this.props.currentIndex}
                />
                <InfoBar
                    timer={this.props.timer}
                    score={this.props.score}
                    streak={this.props.streak}
                />
                <TextBox
                    onInput={this.onInput}
                    value={value ? value.join('') : ''}
                />
            </div>
        );
    }
}

GameContainer.propTypes = {

    badGuesses: PropTypes.number,
    timer: PropTypes.number,
    score: PropTypes.number,
    streak: PropTypes.number,

    wordLetters: PropTypes.array,
    wordList: PropTypes.array,
    currentIndex: PropTypes.array,
    userInput: PropTypes.array,

    onInput: PropTypes.func,
    decrementTimer: PropTypes.func,
    startGame: PropTypes.func,
    endGame: PropTypes.func,
    nextWord: PropTypes.func,
    addCharacter: PropTypes.func,

};

const mapStateToProps = (state) => {
    return {
        wordList: state.wordList,
        timer: state.timer,
        score: state.score,
        streak: state.streak,
        currentIndex: state.currentIndex,
        userInput: state.userInput
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        decrementTimer: () => dispatch(actions.decrementTimer()),
        startGame: () => dispatch(actions.startGame()),
        endGame: () => dispatch(actions.endGame()),
        nextWord: () => dispatch(actions.nextWord()),
        addCharacter: (input, streak, match) => dispatch(actions.addCharacter(input, streak, match))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
