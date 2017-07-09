// Smart compomnent for running the game
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// Import dumb components
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import InfoBar from '../components/InfoBar';


class GameContainer extends React.Component {
    // Head function for catching each keyboard interaction
    // Passes to textBox to watch keystrokes
    onInput = (input) => {
        // First character press will start the game
        if (!this.props.started) {
            this.runGame();
        }
        // Pass the input on for processing
        this.processInput(input.target.value);
    }

    // Logic for each new input string
    processInput(input) {
        // Latest charatcer catch
        const guess = input.slice(-1);
        // Check if the latest character matches the character on the index
        if(this.props.wordLetters[this.props.onIndex] === guess) {
            // Highlight correct character
            document.getElementById(this.props.onIndex).className = 'correct ';
            // Dispatch correct guess
            this.props.goodGuess(guess);
            // If space character clear the textbox
            if(guess === ' ') {
                this.props.emptyDisplay();
            }
        } else {
            // wrong character highlights wrong
            document.getElementById(this.props.onIndex).className = 'wrong ';
            // Let state know about wrong guess
            this.props.badGuess();
        }
    }

    // runGame called once for game to start
    runGame() {
        // Lets state know to update to started game
        this.props.startGame();
        // Set timer on the second
        this.timer = setInterval(()=>{
            // Timer hits zero ends game
            if(this.props.timeLeft === 1) {
                // Set time to zero
                this.props.decrementTimer();
                // End game event
                this.props.endGame();
                // Clear timer
                clearInterval(this.timer);
            } else {
                // Set state one second lower
                this.props.decrementTimer();
            }
        }, 1000);
    }
    // Render the game
    render() {
        // Once game ends switch to gameover container
        if(this.props.gameOver) {
            return (
              <Redirect push to="/GameOver"/>
            );
        }
        // Render the wordbox, textbox, and infobar
        // Pass in word array, what to display in the textbox, onInput function,
        //   timeLeft for display, and score for display
        return (
            <div>
                <WordBox wordLetters={this.props.wordLetters}/>
                <TextBox value={this.props.inputDisplay} onInput={this.onInput}/>
                <InfoBar timeLeft={this.props.timeLeft} score={this.props.score}/>
            </div>
        );
    }
}

// Validate props for awareness
GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onInput: PropTypes.func,
    startGame: PropTypes.func,
    decrementTimer: PropTypes.func,
    endGame: PropTypes.func,
    timeLeft: PropTypes.number,
    started: PropTypes.bool,
    score: PropTypes.number,
    onIndex: PropTypes.number,
    inputDisplay: PropTypes.string,
    goodGuess: PropTypes.func,
    badGuess: PropTypes.func,
    emptyDisplay: PropTypes.func,
    gameOver: PropTypes.bool
};

// Give game access to state through props
const mapStateToProps = (state) => {
    return {
        wordLetters: state.gameReducer.wordLetters,
        started: state.gameReducer.started,
        timeLeft: state.gameReducer.timeLeft,
        badGuesses: state.gameReducer.badGuesses,
        score: state.gameReducer.score,
        onIndex: state.gameReducer.onIndex,
        inputDisplay: state.gameReducer.inputDisplay,
        gameOver: state.gameReducer.gameOver
    };
};

// Dispatch events for reducer interaction
const mapDispatchToProps = (dispatch) => {
    return {
        startGame: () => dispatch({type: 'START_GAME'}),
        decrementTimer: () => dispatch({type: 'DECREMENT_TIMER'}),
        endGame: () => dispatch({type: 'END_GAME'}),
        goodGuess: (newLetter) => dispatch({type: 'GOOD_GUESS', letter: newLetter}),
        badGuess: () => dispatch({type: 'BAD_GUESS'}),
        emptyDisplay: () => dispatch({type: 'EMPTY_DISPLAY'})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
