import PropTypes from 'prop-types';
import React from 'react';
import WordBox from '../components/WordBox.js';
import TextBox from '../components/TextBox.js';
import InfoBar from '../components/InfoBar.js';
import { connect } from 'react-redux';

let noDeleteOrBackspace = true;
let counter = 0;

class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onInputFunc = this.onInputFunc.bind(this);
        this.format = this.format.bind(this);
        this.getScore = this.getScore.bind(this);
    }

    componentDidMount() {
        this.props.getWords();
    }

    getScore() {
        let numRightChars = 0;
        let numWrongChars = 0;
        for (let i = 0; i < this.props.userInput.length; i++) {
            const correctWord = this.props.userInput[i];
            let correctWord2 = correctWord.slice();
            const userWord = this.props.userInput[i];
            if (userWord === correctWord) {
                numRightChars += userWord.length;
                continue;
            }
            for (let j = 0; j < correctWord[j].length; j++) {
                if (!userWord[j]) {
                    break;
                } else if (userWord[j] === correctWord2[0]) {
                    numRightChars++;
                } else if (userWord[j] !== correctWord2[0]) {
                    numWrongChars++;
                }
                correctWord2 = correctWord2.slice(1);
            }
        }
        return [numRightChars, numWrongChars];
    }
    format(index) {
        if (!this.props.userInput[index]) {
            return <span className="inactive" key={counter++} style={{display: 'inline'}}>{this.props.wordList[index]} </span>;
        }
        // user input does exist
        const correctWord = this.props.wordList[index];
        let correctWord2 = correctWord.slice();
        const userWord = this.props.userInput[index];
        if (userWord === correctWord) {
            return <span className="correct" key={counter++} style={{display: 'inline'}}>{this.props.wordList[index]} </span>;
        }
        const result = [];
      //  result.push(<span className="inactive" key={counter++} style={{display: 'inline'}}>);
        for (let i = 0; i < correctWord.length; i++) {
            if (!userWord[i]) {
                if (i === correctWord.length - 1) {
                    result.push(<span className="inactive" key={counter++}>{correctWord[i]} </span>);
                } else {
                    result.push(<span className="inactive" key={counter++}>{correctWord[i]}</span>);
                }
            } else if (userWord[i] === correctWord2[0]) {
                if (i === correctWord.length - 1) {
                    result.push(<span className="correct" key={counter++}>{correctWord[i]} </span>);
                } else {
                    result.push(<span className="correct" key={counter++}>{correctWord[i]}</span>);
                }
            } else if (userWord[i] !== correctWord2[0]) {
                if (i === correctWord.length - 1) {
                    result.push(<span className="wrong" key={counter++}>{correctWord[i]} </span>);
                } else {
                    result.push(<span className="wrong" key={counter++}>{correctWord[i]}</span>);
                }
            }
            correctWord2 = correctWord2.slice(1);
        }
        return result;
    }

    onInputFunc(input) {
      // YOUR ON INPUT FUNCTION HERE
        if (noDeleteOrBackspace) {
            this.props.inputBox(input);
            const newChar = input[input.length - 1];
            if (this.props.pid === 0) {
                const localPid = setInterval(() => this.props.decrementTimer(), 1000);
                this.props.startGame(localPid);
                this.props.charAdded(input);
            } else {
                if (newChar === ' ') {
                    this.props.nextWord();
                } else {
                    this.props.charAdded(input);
                }
            }
        }
    }

    checkKeyFunc(evt) {
        if (evt.keyCode === 8) {
            noDeleteOrBackspace = false;
        } else if (evt.keyCode === 46) {
            noDeleteOrBackspace = false;
        } else {
            noDeleteOrBackspace = true;
        }
    }

    render() {
        if (this.props.timer <= 0) {
            clearInterval(this.props.pid);
        }
        return (
          <div>
              <WordBox format={this.format} userInput={this.props.userInput} wordList={this.props.wordList}/>
              <InfoBar score={(this.getScore()[0] + this.props.streakCount) - this.getScore()[1]} streak={this.props.streakCount} timer={this.props.timer}/>
              <TextBox checkKey={this.checkKeyFunc} theInput={this.props.input} onInput={this.onInputFunc}/>
          </div>
        );
    }
}

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onInput: PropTypes.func,
    startGame: PropTypes.func,
    wordList: PropTypes.array,
    pid: PropTypes.number,
    timer: PropTypes.number,
    decrementTimer: PropTypes.func,
    getWords: PropTypes.func,
    nextWord: PropTypes.func,
    input: PropTypes.string,
    inputBox: PropTypes.func,
    charAdded: PropTypes.func,
    userInput: PropTypes.array,
    streakCount: PropTypes.number
};

const mapStateToProps = (state) => {
    return {
        // YOUR MAP STATE TO PROPS HERE
        wordList: state.user.wordList,
        pid: state.timer.pid,
        timer: state.timer.timer,
        totalScore: state.user.totalScore,
        streakCount: state.user.streakCount,
        letter: state.user.letter,
        input: state.user.inputBox, // what is currently in the input box
        userInput: state.user.userInput // the words that the user has entered
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
        getWords: () => dispatch({type: 'GET_WORDS'}),
        startGame: (pid) => dispatch({type: 'START_GAME', pid: pid}),
        decrementTimer: () => dispatch({type: 'DECREMENT_TIMER'}),
        endGame: () => dispatch({type: 'END_GAME'}),
        charAdded: (char) => dispatch({type: 'CHAR_ADDED', char: char}),
        nextWord: () => dispatch({type: 'NEXT_WORD'}),
        inputBox: (input) => dispatch({type: 'INPUT_BOX', inputBox: input})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
