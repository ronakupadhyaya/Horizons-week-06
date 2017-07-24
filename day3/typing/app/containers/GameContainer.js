import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import InfoBar from '../components/InfoBar';

import * as actions from '../actions/index';

class GameContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            intervalId: null,
        };

        this.onInput = this.onInput.bind(this);
    }

    componentWillReceiveProps() {
        if (this.props.timer <= 0) {
            clearInterval(this.state.intervalId);
            this.props.endGame();
        }
    }

    onInput(input) {
        // YOUR ON INPUT FUNCTION HERE
        if (!this.props.isGameStarted) {
            this.props.startGame();

            const newIntervalId = setInterval(this.props.decrementTimer, 1000);

            this.setState({
                intervalId: newIntervalId,
            });
        } else {
            console.log(input);
        }
    }

    render() {
        return (
            <div>
                I am the game container!
                {
                    // YOUR GAME COMPONENT HERE
                }
                <InfoBar timer={this.props.timer} />
                <WordBox wordList={this.props.wordList} />
                <TextBox onInput={this.onInput} />
            </div>
        );
    }
}

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onInput: PropTypes.func,
    wordList: PropTypes.array,
    isGameStarted: PropTypes.bool,
    decrementTimer: PropTypes.func,
    startGame: PropTypes.func,
    endGame: PropTypes.func,
    timer: PropTypes.number,
};

const mapStateToProps = (state) => {
    return {
        // YOUR MAP STATE TO PROPS HERE
        wordList: state.game.wordList,
        isGameStarted: state.game.isGameStarted,
        timer: state.game.timer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
        startGame: () => dispatch(actions.startGame()),
        endGame: () => dispatch(actions.endGame()),
        decrementTimer: () => dispatch(actions.decrementTimer())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
