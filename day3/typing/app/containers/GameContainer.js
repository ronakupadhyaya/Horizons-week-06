import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import InfoBar from '../components/InfoBar';

class GameContainer extends React.Component {
    onInput = (input) => {
        console.log('INPUT', input);
        if (this.props.timer === 0) {
            this.props.onStartGame();
            const time = setInterval(() => this.props.onDecreamentTimer(), 1000);
            setTimeout(() => {
                clearInterval(time);
                this.props.onEndGame();
            }, 6000);
        }
        this.props.onType(input);
    }

    render() {
        return (
            <div>
                I am the game container!
                <WordBox wordsList={this.props.wordsList} userInput={this.props.userInput} />
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
};

const mapStateToProps = (state) => {
    return {
        wordsList: state.gameReducer.wordsList,
        timer: state.gameReducer.timer,
        userInput: state.gameReducer.userInput,
        value: state.gameReducer.value,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
        onStartGame: () => dispatch({type: 'START_GAME', }),
        onEndGame: () => dispatch({type: 'END_GAME'}),
        onDecreamentTimer: () => dispatch({type: 'DECREATEMENT_TIMER'}),
        onType: (input) => dispatch({type: 'TYPING', payload: input}),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
