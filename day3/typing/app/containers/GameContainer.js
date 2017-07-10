import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { start } from '../actions';
import { end } from '../actions';
import { decrement } from '../actions';
import TextBox from '../components/TextBox';
import WordBox from '../components/WordBox';
import InfoBar from '../components/InfoBar';

class GameContainer extends React.Component {
    onInput() {
        // YOUR ON INPUT FUNCTION HERE
        if(!this.started) {
            this.started = true;
            this.props.start();
        }
        const interval = setInterval(() => {
            if (this.props.timer === 0) {
                clearInterval(interval);
                this.props.end();
            } else {
                this.props.decrement();
            }
        }, 1000);
    }


    render() {
        return (
            <div>
                I am the game container!
                    <WordBox first100={this.props.first100} />
                    <TextBox onChange={(input) => this.onInput(input.value)} />
                    <InfoBar timer={this.props.timer} score={this.props.score} streak={this.props.streak} />

            </div>
        );
    }
}


GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    wordList: PropTypes.array,
    timer: PropTypes.number,
    score: PropTypes.number,
    streak: PropTypes.number,
    start: PropTypes.func,
    end: PropTypes.func,
    decrement: PropTypes.func,
    first100: PropTypes.array
};

const mapStateToProps = (newState) => {
    return {
        first100: newState.wordList.words,
        // YOUR MAP STATE TO PROPS HERE
        timer: newState.wordList.timer,
        score: newState.wordList.score,
        streak: newState.wordList.streak
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
        start: () => dispatch(start()),
        decrement: () => dispatch(decrement()),
        end: () => dispatch(end())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
