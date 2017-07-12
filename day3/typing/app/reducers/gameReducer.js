import words from '../dictionary.js';
import _ from 'underscore';

const word = _.shuffle(words);
const wordsi = word.slice(0, 100);
const initialState = {words: wordsi, timer: 60, score: 0, streak: 0};

const gameReducer = (state = initialState, action) =>{
    switch(action.type) {
        case 'START_GAME':
            return initialState;
        case 'DECREMENT_TIMER':
            console.log('tickkk');
            const newState = Object.assign({}, state);
            newState.timer = newState.timer - 1;
            return newState;
        case 'GAME_STATE':
            return state;
        default:return state;
    }
};
export default gameReducer;
