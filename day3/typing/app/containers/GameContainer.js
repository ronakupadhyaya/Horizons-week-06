import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox.js';
import TextBox from '../components/TextBox.js';

class GameContainer extends React.Component {
    onInput(input) {
        // YOUR ON INPUT FUNCTION HERE
    }

    render() {
        return (
            <div>
                I am the game container!
                <WordBox wordList={this.props.wordList}/>
                <TextBox onInput={() => this.onInput()}/>
            </div>
        );
    }
}

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    wordList: PropTypes.array,
    onInput: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        wordList: state.wordList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onStartGame: () => dispatch({
            type: 'START_GAME'
        }),
        onDecrementTimer: () => dispatch({
            type: 'DECREMENT_TIMER'
        }),
        onEndGame: () => dispatch({
            type: 'END_GAME'
        })
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
