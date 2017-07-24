import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { gameReducer } from '../reducers/gameReducer'

class GameContainer extends React.Component {
    onInput(input) {
        // YOUR ON INPUT FUNCTION HERE
    }

    render() {
        return (
            <div>
                I am the game container!
                {
                    // YOUR GAME COMPONENT HERE
                }
            </div>
        );
    }
}

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onInput: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        // YOUR MAP STATE TO PROPS HERE
        // Object.assign({}, state, {
        //   wordList: state.wordList
        // })
        wordList: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
