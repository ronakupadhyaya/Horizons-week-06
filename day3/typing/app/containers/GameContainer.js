import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import InfoBar from '../components/InfoBar';
import GameOver from '../containers/GameOver';
class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        // this.props.createGame();
        this.onInput = this.onInput.bind(this);
    }

    onInput(input) {
        // YOUR ON INPUT FUNCTION HERE
        const letter = String.fromCharCode(input);
        let counter = 0;
        const decrementTimer = this.props.decrementTimer;

        const currentWord = this.props.currentIndex[0];
        if(letter !== ' ') {
            this.props.addChar(letter);
        } else{
            this.props.nextWord();
        }
        if(this.props.currentIndex[0] === 0 && this.props.currentIndex[1] === 0) {
            let timeLeft = 10;
            counter++;
            const gameOver = this.props.endGame;
            this.interval = setInterval(() => {
                decrementTimer();

                timeLeft--;
                console.log('timeLeft', timeLeft);
                if(timeLeft <= 0) {
                    console.log('what');
                    clearInterval(this.interval);
                    gameOver();
                }
                if(currentWord === 100) {
                    clearInterval(this.interval);
                    gameOver();
                }
            }, 1000);
        }
    }

    render() {
        let output = [];
        for(let i = 0; i < this.props.wordList.length; i++) {
            const word = this.props.wordList[i];
            for(let j = 0; j < word.length; j++) {
                const letter = word[j];
                switch(letter.status) {
                    case 'pending':
                        output.push(<span>{letter.letter}</span>);
                        break;
                    case 'correct':
                        output.push(<span className="correct">{letter.letter}</span>);
                        break;
                    case 'incorrect':
                        output.push(<span className="wrong">{letter.letter}</span>);
                        break;
                    default:
                        output.push(<span>{letter.letter}</span>);
                }
            }
            output.push(<span> </span>);
        }
        const {userInput, timeLeft, score, startGame, gameOver} = this.props;
        if(gameOver) {
            return (
              <GameOver />
            );
        }
        return (
            <div>
                I am the game container!

                    <WordBox wordList={output} />
                    <TextBox userInput={userInput} onInput = {this.onInput} />
                    <InfoBar timeLeft={timeLeft} startGame={startGame} gameOver={gameOver} score={score}/>
            </div>
        );
    }
}

GameContainer.propTypes = {
    wordList: PropTypes.array,
    userInput: PropTypes.string,
    addChar: PropTypes.func,
    currentIndex: PropTypes.array,
    nextWord: PropTypes.func,
    timeLeft: PropTypes.number,
    startGame: PropTypes.func,
    endGame: PropTypes.func,
    decrementTimer: PropTypes.func,
    score: PropTypes.number,
    gameOver: PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        wordList: state.gameState.wordList,
        userInput: state.gameState.userInput,
        currentIndex: state.gameState.currentIndex,
        timeLeft: state.gameState.timeLeft,
        score: state.gameState.score,
        gameOver: state.gameState.gameOver
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
        addChar: (char) => dispatch({type: 'CHAR_ADDED', letter: char}),
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
