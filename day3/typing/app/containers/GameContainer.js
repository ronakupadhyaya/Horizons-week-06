import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import wordbox from '../components/wordbox'; //importing wordbox


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
                This is Wordbox: <Wordbox />
            </div>
        );
    }
}

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordList: PropTypes.array,
    onInput: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        // YOUR MAP STATE TO PROPS HERE
        wordList: state.gameReducer.wordList // or state.gameReducer.wordList?
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
        onInput: () => dispatch()
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
