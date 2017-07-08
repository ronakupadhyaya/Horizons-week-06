import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import InfoBar from '../components/InfoBar';

const GameContainer = ({wordList}) => {
    function onInput(input) {
        if(input.length === 1) {
            this.interval = setInterval(this.props.onDecrementTimer, 1000);
            this.props.onStartGame();
        }
        console.log('cool');
    }

    console.log('hey', wordList);
    return (
        <div>
                <div>
                    <WordBox wordList={wordList}/>
                </div>

                <div >
                    <TextBox onInput={(input) => this.onInput(input)}/>
                </div>

                <div >
                    <InfoBar />
                </div>
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onInput: PropTypes.func,
    onStartGame: PropTypes.func,
    onDecrementTimer: PropTypes.func,
    oneEndGame: PropTypes.func,
    wordList: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        // YOUR MAP STATE TO PROPS HERE
        wordList: state.gameState.wordList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
        onStartGame: dispatch({type: 'START_GAME'}),
        onDecrementTimer: dispatch({type: 'DECREMENT_TIMER'}),
        onEndGame: dispatch({type: 'END_GAME'})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
