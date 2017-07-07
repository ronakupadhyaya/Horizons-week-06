import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
// import TextBox from '../components/TextBox';
// import InfoBar from '../components/InfoBar';

class GameContainer extends React.Component {
    render() {
        return (
            <div>
                I am the game container!
                <WordBox wordList={this.props.wordList}/>
            </div>
        );
    }
}

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    wordList: PropTypes.array
    // onInput: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        // onStartGame,
        // onDecrementTimer,
        // onEndGame,
        wordList: state.wordList
    };
};

const mapDispatchToProps = () => {
    return {
        // onStartGame: () => dispatch({ type: 'START_GAME' }),
        // onDecrementTimer: () => dispatch({ type: 'DECREMENT_TIMER' }),
        // onEndGame: () => dispatch({ type: 'END_GAME' })
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
