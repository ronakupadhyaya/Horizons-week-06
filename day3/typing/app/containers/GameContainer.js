import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import { startGame, endGame, decrementTimer, nextWord, charAdded } from '../actions/index';

class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            interval: '',
            value: ''
        };
    }

    componentWillReceiveProps() {
        if (this.props.gameTime.time <= 1) {
            clearInterval(this.state.interval);
        }
    }

    onInput(input) {
        if (!this.props.gameTime.gameStarted) {
            this.props.startGameProp();
            this.setState( {interval: setInterval(this.props.decrementTimerProp, 1000)});
        } else {
            if(input[input.length - 1] === ' ') {
                this.props.nextWordProp();
                this.setState({value: ''});
            } else {
                this.setState({value: input});
                this.props.charAddedProp();
            }
        }
    }

    render() {
        return (
            <div>
                <div> Time: {this.props.gameTime.time} </div>
                <div> GameStarted Boolean: {this.props.gameTime.gameStarted.toString()} </div>
                <TextBox
                    valueState={this.state.value}
                    onHandleChange={(input) => this.onInput(input)}
                />
                <WordBox
                    wordList={this.props.wordList}
                    currentIndex={this.props.userInput.currentIndex}
                    userInputArray={this.props.userInput.userInput}
                />
            </div>
        );
    }
}

GameContainer.propTypes = {
    onInput: PropTypes.func,
    wordList: PropTypes.array,
    startGameProp: PropTypes.func,
    endGameProp: PropTypes.func,
    decrementTimerProp: PropTypes.func,
    gameTime: PropTypes.object,
    userInput: PropTypes.object,
    nextWordProp: PropTypes.func,
    charAddedProp: PropTypes.func
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        wordList: state.wordList,
        gameTime: state.gameTime,
        userInput: state.userInput
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startGameProp: () => dispatch(startGame()),
        decrementTimerProp: () => dispatch(decrementTimer()),
        endGameProp: () => dispatch(endGame()),
        nextWordProp: () => dispatch(nextWord()),
        charAddedProp: () => dispatch(charAdded())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
