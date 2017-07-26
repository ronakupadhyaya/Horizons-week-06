import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import InfoBar from '../components/InfoBar';

class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            intervalId: ''
        };
    }

    componentWillReceiveProps() {
        if (this.props.timer <= 0) {
            this.props.endGame();
            clearInterval(this.state.intervalId);
        }
    }

    onInput = (input) => {
        if (! this.props.started) {
            this.props.startGame();
            const id = setInterval(() => this.props.decrementTime(), 1000);
            this.setState({intervalId: id});
        }
        if (input[input.length - 1] === ' ') {
            this.props.spaceAdded(input);
        } else {
            this.props.charAdded(input);
        }
    }

    render() {
        return (
            <div>
                <WordBox userInput={this.props.userInput} wordList={this.props.wordList} />
                <br></br>
                <TextBox typing={(input) => this.onInput(input)}/>
                <InfoBar timer={this.props.timer} />
            </div>
        );
    }
}

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onInput: PropTypes.func,
    wordList: PropTypes.array,
    startGame: PropTypes.func,
    decrementTime: PropTypes.func,
    endGame: PropTypes.func,
    started: PropTypes.bool,
    timer: PropTypes.number,
    charAdded: PropTypes.func,
    spaceAdded: PropTypes.func,
    userInput: PropTypes.array,
    currentIndex: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        wordList: state.gameReducer.wordList,
        started: state.gameReducer.started,
        timer: state.gameReducer.timer,
        userInput: state.gameReducer.userInput,
        currentIndex: state.gameReducer.currentIndex
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
        startGame: () => dispatch({type: 'START_GAME'}),
        decrementTime: () => dispatch({type: 'DECREMEMNT_TIME'}),
        endGame: () => dispatch({type: 'END_GAME'}),
        charAdded: (input) => dispatch({type: 'CHAR_ADDED', letter: input}),
        spaceAdded: (input) => dispatch({type: 'NEXT_WORD', letter: input})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
