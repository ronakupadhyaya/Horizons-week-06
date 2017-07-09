import words from '../dictionary';
import _ from 'underscore';

const tempArr = words.slice(0, 100);

const initialState = {
    wordsList: _.shuffle(tempArr),
    timer: 0,
    userInput: [],
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START_GAME':
            const newState = Object.assign({}, state, {timer: 60});
            return newState;
        case 'DECREATEMENT_TIMER':
            const newState2 = Object.assign({}, state, {timer: state.timer - 1});
            return newState2;
        default:
            return state;
    }
};


export default gameReducer;
