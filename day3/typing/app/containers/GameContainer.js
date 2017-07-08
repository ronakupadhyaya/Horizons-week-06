import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';

class GameContainer extends React.Component {
    onInput(input) {
        this.props.userInput.push(input);
        if (this.props.timer === 60) {
            this.props.onStartGame();
            this.intervalId = setInterval(() => {
                if (this.props.timer === 0) {
                    this.props.onEndGame();
                    clearInterval(this.intervalId);
                } else {
                    this.props.onDecrementTimer();
                }
            }, 1000);
        }
    }
    render() {
        return (
            <div>
                I am the game container!
                <WordBox wordList={this.props.wordList} userInput={this.props.userInput} timer={this.props.timer}/>
                <TextBox onType={(input) => this.onInput(input)}/>
            </div>
        );
    }
}

GameContainer.propTypes = {
    wordList: PropTypes.array,
    timer: PropTypes.number,
    userInput: PropTypes.array,
    onInput: PropTypes.func,
    onStartGame: PropTypes.func,
    onDecrementTimer: PropTypes.func,
    onEndGame: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        wordList: state.wordList,
        userInput: state.userInput,
        timer: state.timer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onStartGame: () => dispatch({ type: 'START_GAME' }),
        onDecrementTimer: () => dispatch({ type: 'DECREMENT_TIMER' }),
        onEndGame: () => dispatch({ type: 'END_GAME' })
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
