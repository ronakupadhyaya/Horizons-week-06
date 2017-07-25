// import * as types from '../actions/types';
import words from '../dictionary';
import { _ } from 'underscore';

const sampled = _.sample(words, 100);

const wordListReducer = (state = sampled, action) => {
    switch(action.type) {
        case 'NEW_GAME':
            return state;
        default:
            return state;
    }
};

const userInputReducer = (state = {userInput: [], currentIndex: [0, 0]}, action) => {
    switch(action.type) {
        case 'CHAR_ADDED':
            const newUserInput = Object.assign({}, state, {userInput: state.userInput.concat(action.letter)});
            return newUserInput;
        case 'NEXT_WORD':
            const newObjectInput = Object.assign({}, state, {userInput: []}, {currentIndex: [state.currentIndex[0] + 1, 0]});
            return newObjectInput;
        default:
            return state;
    }
};


const initialObject = {gameStarted: false, time: 2};

const gameTimeReducer = (state = initialObject, action) => {
    switch(action.type) {
        case 'START_GAME':
            const newState = Object.assign({}, state, {gameStarted: true});
            return newState;
        case 'DECREMENT_TIMER':
            const newObject = Object.assign({}, state);
            const newTimerState = Object.assign({}, newObject, {time: newObject.time - 1});
            return newTimerState;
        case 'END_GAME':
            return state;
        default:
            return state;
    }
};

export {wordListReducer, gameTimeReducer, userInputReducer};
