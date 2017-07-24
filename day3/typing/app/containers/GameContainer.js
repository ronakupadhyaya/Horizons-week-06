import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import InfoBar from '../components/InfoBar';
import TextBox from '../components/TextBox';
import WordBox from '../components/WordBox';

class GameContainer extends React.Component {
    onInput(input) {
        // YOUR ON INPUT FUNCTION HERE
    }

    render() {
        return (
            <div>
              <WordBox/>
              <TextBox/>
              <InfoBar time={1} score={0} multiplier={0}/>
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
        wordList: state.gameReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // onStart: dispatch(startGame)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
