import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import InfoBar from '../components/InfoBar';

class GameContainer extends React.Component {
    onInput = (input) => {
        if (this.props.timer === 0) {
            this.props.onStartGame();
            const time = setInterval(() => this.props.onDecreamentTimer(), 1000);
            setTimeout(() => {
                clearInterval(time);
                this.props.onEndGame();
            }, 60000);
        }

        const lastChar = input[input.length - 1];
        if (lastChar === ' ') {
            this.props.onEmptyType();
        } else {
            this.props.onType(input);
        }
    }

    render() {
        return (
            <div>
                I am the game container!
                <WordBox wordsList={this.props.wordsList} userInput={this.props.userInput} currentIndex={this.props.currentIndex} />
                <TextBox onInput={this.onInput} value={this.props.value} />
                <InfoBar timer={this.props.timer} />
            </div>
        );
    }
}

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onInput: PropTypes.func,
    wordsList: PropTypes.array,
    onStartGame: PropTypes.func,
    onEndGame: PropTypes.func,
    onDecreamentTimer: PropTypes.func,
    timer: PropTypes.number,
    userInput: PropTypes.array,
    onType: PropTypes.func,
    value: PropTypes.string,
    onEmptyType: PropTypes.func,
    currentIndex: PropTypes.array,
};

const mapStateToProps = (state) => {
    return {
        wordsList: state.gameReducer.wordsList,
        timer: state.gameReducer.timer,
        userInput: state.gameReducer.userInput,
        value: state.gameReducer.value,
        currentIndex: state.gameReducer.currentIndex,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onStartGame: () => dispatch({type: 'START_GAME', }),
        onEndGame: () => dispatch({type: 'END_GAME'}),
        onDecreamentTimer: () => dispatch({type: 'DECREATEMENT_TIMER'}),
        onType: (input) => dispatch({type: 'CHAR_ADDED', payload: input}),
        onEmptyType: () => dispatch({type: 'NEXT_WORD'})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
