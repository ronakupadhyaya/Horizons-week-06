import words from '../dictionary';
import _ from 'underscore';
import * as types from '../actions/types';

const theWords = _.shuffle(words);
const wordList = theWords.slice(0, 100);

const gameReducer = (state = {wordList, gameStarted: false, time: 60, userInput: []}, action) => {
    console.log(action.type);
    switch(action.type) {
        case types.START_GAME:
            const obj = {gameStarted: true};
            return Object.assign({}, state, obj);
        case types.DECREMENT_TIMER:
            const obj2 = {time: state.time - 1};
            return Object.assign({}, state, obj2);
        case types.USER_ADDED:
            const arr = state.userInput.slice();
            arr.push(action.input.substring(action.input.length - 1));
            const obj3 = {userInput: arr};
            return Object.assign({}, state, obj3);
        default:
            return state;
    }
};

export default gameReducer;
