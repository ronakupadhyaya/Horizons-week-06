import words from '../dictionary';
import _ from 'underscore';

const tempArr = words.slice(0, 100);

const initialState = {
    wordsList: _.shuffle(tempArr),
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EXPRESSION':
            return state;
        default:
            return state;
    }
};

export default gameReducer;
