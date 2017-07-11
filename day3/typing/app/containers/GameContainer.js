import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import InfoBar from '../components/InfoBar';

class GameContainer extends React.Component {
    notStartedGame = true;
    userInput = [];
    onInput(input) {
        console.log(input);
        if (this.notStartedGame) {
            this.props.onStart(input);
            this.intervalId = setInterval(() => {
                if (this.props.timer === 0) {
                    this.props.onEnd();
                    clearInterval(this.intervalId);
                } else {
                    this.props.onTick();
                }
            }, 1000);
            this.notStartedGame = false;
        } else {
            this.props.onInput(input);
        }
    }
    render() {
        return (
            <div className = "flexcontainer">
                I am the game container!
                <InfoBar timer={this.props.timer}/>
                <WordBox wordList={this.props.wordList} userList={this.props.input}/>
                <TextBox onType={(input) => this.onInput(input)} onSpace={() => this.props.onSpace()} />
            </div>
        );
    }
}

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onInput: PropTypes.func,
    wordList: PropTypes.array,
    timer: PropTypes.number,
    input: PropTypes.array,
    onStart: PropTypes.func,
    onTick: PropTypes.func,
    onEnd: PropTypes.func,
    onSpace: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        wordList: state.wordList,
        timer: state.timer,
        input: state.input
    };
};

const mapDispatchToProps = (  dispatch  ) => {
    return {
        onStart: (input) => dispatch({type: 'START_GAME', input: input}),
        onTick: () => dispatch({type: 'DECREMENT_TIMER'}),
        onEnd: () => dispatch({type: 'END_GAME'}),
        onInput: (input) => dispatch({type: 'USER_INPUT', input: input}),
        onSpace: () => dispatch({type: 'NEW_WORD'})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
