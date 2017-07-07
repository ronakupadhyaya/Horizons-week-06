import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox.js';
import InfoBar from '../components/InfoBar.js';

class GameContainer extends React.Component {
    onInput() {
        // YOUR ON INPUT FUNCTION HERE
        if(!this.interval) {
            this.props.startGame(); // START_GAME is dispatched
            this.interval = setInterval(this.props.updateTime, 1000);
        }
    }

    onEnd(time) {
        if(time <= 0 && this.interval) {
            this.props.endGame();
            clearInterval(this.interval);
        }
    }

    render() {
        return (
            <div>
                I am the game container!
                {
                    // YOUR GAME COMPONENT HERE
                }
                <WordBox wordList={this.props.wordList} userInput={this.props.userInput} />
                <InfoBar onInput={() => this.onInput()} onEnd={(t) => this.onEnd(t)} />
            </div>
        );
    }
}

GameContainer.propTypes = {
    wordList: PropTypes.array,
    userInput: PropTypes.array,
    currentIndex: PropTypes.array,
    startGame: PropTypes.func,
    endGame: PropTypes.func,
    updateTime: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        // YOUR MAP STATE TO PROPS HERE
        wordList: state.wordList,
        userInput: state.textBox.userInput,
        currentIndex: state.textBox.currentIndex
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
        startGame: () => dispatch({type: 'START_GAME'}),
        endGame: () => dispatch({type: 'END_GAME'}),
        updateTime: () => dispatch({type: 'DECREMENT_TIMER'})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
