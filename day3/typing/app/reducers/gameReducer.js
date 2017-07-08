import words from '../dictionary';
import _ from 'underscore';
console.log(words);
const tempArr = words.slice(0, 100);

const initialState = {
    wordsList: _.shuffle(tempArr),
    time: 0,
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START_GAME':
            const newState = Object.assign({}, state, {time: 60});
            return newState;
        case 'DECREMENT_TIMER':
            console.log('made it here');
            const newState2 = Object.assign({}, state, {time: state.time - 1});
            return newState2;
        default:
            return state;
    }
};

export default gameReducer;
