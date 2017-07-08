import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import InfoBar from '../components/InfoBar';

const GameContainer = ({userOnType, onRender, onDecrement, timer, userList, renderState}) => {
    let interval;
    const onInput = (input) => {
        userOnType(input);
        const letterIndex = userList.length;
        onRender(letterIndex, input);
        if(userList.length === 0) {
            interval = setInterval(() => {
                onDecrement();
                if(timer === 0) {
                    clearInterval(interval);
                }
            }, 1000);
        }
    };

    return (
        <div>
            I am the game container!
            {<div>
                <WordBox renderState={renderState[0]}/>
                <TextBox handleInput={onInput}/>
                <InfoBar score={renderState[4]} wrong={renderState[2]} streak={renderState[3]} timer={timer}/>
            </div>
        }
    </div>
);
};

GameContainer.propTypes = {
    wordList: PropTypes.array,
    typedList: PropTypes.array,
    userList: PropTypes.array,
    renderState: PropTypes.array,
    onInput: PropTypes.func,
    onStart: PropTypes.func,
    onEnd: PropTypes.func,
    onType: PropTypes.func,
    onRender: PropTypes.func,
    userOnType: PropTypes.func,
    onDecrement: PropTypes.func,
    timer: PropTypes.number,
    onScore: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        // YOUR MAP STATE TO PROPS HERE
        wordList: state.wordList,
        timer: state.timer,
        typedList: state.typedList,
        userList: state.userList,
        renderState: state.renderState
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onEnd: () => dispatch({type: 'END_GAME'}),
        onDecrement: () => dispatch({type: 'DECREMENT_TIMER'}),
        onType: (letter) => dispatch({type: 'ON_TYPE', letter: letter}),
        userOnType: (letter) => dispatch({type: 'USER_TYPE', letter: letter}),
        onRender: (index, letter) => dispatch({type: 'START_GAME', input: letter, index: index}),
        onScore: () => dispatch({type: 'SCORE'})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
