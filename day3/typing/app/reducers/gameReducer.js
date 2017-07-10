import wordList from '../dictionary.js';
import _ from 'underscore';
import * as types from '../actions/types';

const wordListNew = wordList.slice();
const randomized = _.shuffle(wordListNew);
const initialState = randomized.slice(0, 100);

const gameReducer = (state = {words: initialState, timer: 0, score: 0, streak: 0}, action) => {
    switch (action.type) {
        case types.START_GAME:
            state.timer = 60;
            return newState;
        case types.DECREMENT_TIMER:
            const newState = Object.create(state);
            state.time -= 1;
            return newState;
        case types.END_GAME:
            state.timer = 0;
            return initialState;
        default:
            return state;
    }
};


export default gameReducer;
