import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import InfoBar from '../components/InfoBar';
import TextBox from '../components/TextBox';
import WordBox from '../components/WordBox';
import {startGame, decrementTimer, endGame, userAdded} from '../actions/index';

class GameContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    onInput(input) {
        if(!this.props.gameStarted) {
            this.props.start();
            this.interval = setInterval(this.props.decrementTimer, 1000);
        }
        this.props.handleUserAdded(input);
    }
    render() {
        if(this.props.time === 0) {
            clearInterval(this.interval);
            endGame();
        }
        return (
            <div>
              <WordBox words={this.props.wordList} typed={this.props.userInput}/>
              <TextBox inputx={(input) => (this.onInput(input))}/>
              <InfoBar time={this.props.time} score={0} multiplier={0}/>
            </div>
        );
    }
}

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    time: PropTypes.number,
    gameStarted: PropTypes.bool,
    wordList: PropTypes.array,
    userInput: PropTypes.array,
    onInput: PropTypes.func,
    start: PropTypes.func,
    decrementTimer: PropTypes.func,
    handleUserAdded: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        wordList: state.gameReducer.wordList,
        gameStarted: state.gameReducer.gameStarted,
        time: state.gameReducer.time,
        userInput: state.gameReducer.userInput
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        start: () => dispatch(startGame()),
        decrementTimer: () => dispatch(decrementTimer()),
        endGame: () => dispatch(endGame()),
        handleUserAdded: (input) => dispatch(userAdded(input))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
