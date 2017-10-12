import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import InfoBar from '../components/InfoBar';
import GameOver from './GameOver';
let start = true;
class GameContainer extends React.Component  {
    onInput = (input) => {
        // YOUR OWN INPUT FUNCTION HERE
        if(this.props.currentIndex[0] === 0 && this.props.currentIndex[1] === 0) {
            this.interval = setInterval(() => {
                this.props.decrementTimer();
                if(this.props.timeLeft === 0) {
                    this.props.endGame();
                    console.log('game ended: ', this.props.gameOver);
                    clearInterval(this.interval);
                }
            }, 1000);
        }

        if(start) {
            start = false;
            this.props.startGame();
        }
        const inputValue = String.fromCharCode(input.which);
        if(inputValue === '8') {
            console.log('you cannot do this.');
        }  else{
            if(inputValue.trim() !== '') {
                this.props.charAdded(inputValue.trim());
            } else {
                this.props.nextWord();
            }
        }
    };

    render() {
        return (
            <div>

				{ this.props.gameOver ? <div> <WordBox wordList={this.props.wordList}/> <TextBox value={this.onInput}/>
				<InfoBar timeLeft={this.props.timeLeft} score={this.props.totalScore}/> </div> : <GameOver />}

            </div>
        );
    }
}

GameContainer.propTypes = {
    wordList: PropTypes.array,
    newGame: PropTypes.func,
    charAdded: PropTypes.func,
    nextWord: PropTypes.func,
    startGame: PropTypes.func,
    decrementTimer: PropTypes.func,
    endGame: PropTypes.func,
    timeLeft: PropTypes.number,
    currentIndex: PropTypes.array,
    totalScore: PropTypes.number,
    gameOver: PropTypes.number
};

const mapStateToProps = (state) => {
    return {
        // YOUR MAP STATE TO PROPS HERE
        wordList: state.game.wordList,
        currentIndex: state.game.currentIndex,
        userInput: state.game.userInput,
        timeLeft: state.game.timeLeft,
        totalScore: state.game.totalScore,
        gameOver: state.game.gameOver
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
        newGame: () => dispatch({type: 'GET_LIST'}),
        charAdded: (inputLetter) => dispatch({type: 'CHAR_ADDED', letter: inputLetter}),
        nextWord: () => dispatch({type: 'NEXT_WORD'}),
        startGame: () => dispatch({type: 'START_GAME'}),
        decrementTimer: () => dispatch({type: 'DECREMENT_TIMER'}),
        endGame: () => dispatch({type: 'END_GAME'})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
