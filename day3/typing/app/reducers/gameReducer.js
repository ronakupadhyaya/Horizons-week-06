import words from '../dictionary';
import _ from 'underscore';

const initialState = {wordList: _.shuffle(words).slice(0, 100),
                      timer: 60,
                      unserInput: []};
const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START_GAME':
            return state;
        case 'DECREMENT_TIMER':
            const newState = Object.assign({}, state, {timer: state.timer - 1});
            return newState;
        case 'END_GAME':
            return state;
        default:
            return state;
    }
};

export default gameReducer;
