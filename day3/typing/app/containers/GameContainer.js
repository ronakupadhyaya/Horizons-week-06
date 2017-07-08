import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import InfoBar from '../components/InfoBar';
import { startGame, decrementTime, endGame, changeFirstIndex, changeSecondIndex, keepInput, newInput } from '../actions/index';

class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: this.props.timer,
            userInput: [],
            totalScore: 0,
            streakCount: 0,
            currentInput: ''
        };
    }

    onInput = (input) => {
        const self = this;
        // const newIndex = [...self.state.currentIndex];
        // const userInput = [...self.state.userInput];
        // console.log(input.charAt(input.length - 1));
        if (input.length < self.props.currentInput.length) {
            self.props.keepInput(self.props.currentInput);
            return;
        }
        if (input.charAt(input.length - 1).trim() !== '') {
            if (!self.interval) {
                // userInput.push(input);
                self.props.startGame();
                self.interval = setInterval(()=> {
                    self.props.decrementTime();
                    self.setState({timer: --self.state.timer});
                    if (self.state.timer === 0) {
                        self.props.endGame();
                        clearInterval(self.interval);
                    }
                }, 1000);
            }
            self.props.changeSecondIndex();
            self.props.keepInput(input);
        } else {
            self.props.changeFirstIndex();
            self.props.newInput();
        }
    }

    render() {
        return (
            <div>
                i am the game container!
                <WordBox userInput={this.props.allInput} currentIndex={this.props.currentIndex} wordList={this.props.wordList}/>
                <TextBox value={this.props.currentInput} onInput={(input) => this.onInput(input)}/>
                <InfoBar timer={this.state.timer} />
            </div>
        );
    }
}

GameContainer.propTypes = {
    endGame: PropTypes.func,
    decrementTime: PropTypes.func,
    startGame: PropTypes.func,
    changeFirstIndex: PropTypes.func,
    changeSecondIndex: PropTypes.func,
    keepInput: PropTypes.func,
    newInput: PropTypes.func,
    wordList: PropTypes.array,
    timer: PropTypes.number,
    allInput: PropTypes.array,
    currentInput: PropTypes.string,
    currentIndex: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        wordList: state.game,
        currentIndex: state.wordIndex,
        timer: 100,
        currentInput: state.input.currentInput,
        allInput: state.input.allInput
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startGame: () => {
            dispatch(startGame());
        },
        decrementTime: () => {
            dispatch(decrementTime());
        },
        endGame: () => {
            dispatch(endGame());
        },
        changeFirstIndex: () => {
            dispatch(changeFirstIndex());
        },
        changeSecondIndex: () => {
            dispatch(changeSecondIndex());
        },
        keepInput: (input) => {
            dispatch(keepInput(input));
        },
        newInput: () => {
            dispatch(newInput());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
